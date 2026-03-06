import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { YarnColor, allYarns } from "../data/yarns";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { YarnColorCard } from "../components/yarn-color-card";
import { usePalettes } from "../hooks/use-palettes";
import { Palette, Search, ChevronDown, GripVertical } from "lucide-react";
import { toast } from "sonner";
import { getSheetConfig, fetchYarnsFromSheet } from "../services/google-sheets";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SavePaletteModal } from "../components/save-palette-modal";

// Draggable color block component
interface DraggableColorProps {
  yarn: YarnColor;
  index: number;
  moveColor: (dragIndex: number, hoverIndex: number) => void;
}

function DraggableColor({ yarn, index, moveColor }: DraggableColorProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "COLOR",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "COLOR",
    hover(item: { index: number }) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveColor(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="flex-1 min-w-0 h-full relative transition-opacity cursor-move"
      style={{ 
        backgroundColor: yarn.hex,
        opacity: isDragging ? 0.5 : 1,
      }}
      title={yarn.name}
    />
  );
}

export function PaletteBuilder() {
  const [selectedYarns, setSelectedYarns] = useState<YarnColor[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState<string>("all");
  const [weightFilter, setWeightFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [availableYarns, setAvailableYarns] = useState<YarnColor[]>(allYarns);
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState<string>("default");
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const { palettes, savePalette } = usePalettes();

  const loadYarns = async () => {
    setIsLoading(true);
    
    const savedDataSource = localStorage.getItem("happygohooky_data_source");
    
    // Try Google Sheets if it's the saved preference
    if (savedDataSource === "google-sheets") {
      const sheetConfig = getSheetConfig();
      if (sheetConfig) {
        try {
          const yarns = await fetchYarnsFromSheet(sheetConfig.sheetId, sheetConfig.apiKey);
          setAvailableYarns(yarns);
          setDataSource("Google Sheets");
          toast.success(`Loaded ${yarns.length} yarns from Google Sheet`);
          setIsLoading(false);
          return;
        } catch (error) {
          console.error("Failed to load from sheet:", error);
          toast.error("Failed to load from Google Sheet, using default yarns");
        }
      }
    }
    
    // Use default yarns
    setAvailableYarns(allYarns);
    setDataSource("Default Yarn Database");
    setIsLoading(false);
  };

  useEffect(() => {
    loadYarns();
  }, []);

  const toggleYarn = (yarn: YarnColor) => {
    setSelectedYarns(prev => {
      const isSelected = prev.some(y => y.id === yarn.id);
      if (isSelected) {
        return prev.filter(y => y.id !== yarn.id);
      } else {
        return [...prev, yarn];
      }
    });
  };

  const handleSavePalette = (name: string) => {
    if (selectedYarns.length === 0) {
      toast.error("Please add some colors to your palette first");
      return;
    }
    
    savePalette(name, selectedYarns);
    toast.success(`Palette "${name}" saved successfully!`);
    setSelectedYarns([]);
    setIsSaveModalOpen(false);
  };

  const clearPalette = () => {
    setSelectedYarns([]);
    toast.success("Palette cleared");
  };

  // Helper function to convert hex to HSL for color sorting
  const hexToHSL = (hex: string) => {
    hex = hex.replace('#', '');
    
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    
    return { h: h * 360, s, l };
  };

  // Filter yarns
  const filteredYarns = availableYarns.filter((yarn) => {
    const matchesSearch = yarn.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         yarn.colorCode.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = brandFilter === "all" || yarn.brand === brandFilter;
    const matchesWeight = weightFilter === "all" || yarn.weight === weightFilter;
    return matchesSearch && matchesBrand && matchesWeight;
  });

  // Sort yarns
  const sortedYarns = [...filteredYarns].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "colorCode") {
      return a.colorCode.localeCompare(b.colorCode);
    } else if (sortBy === "colorShade") {
      const hslA = hexToHSL(a.hex);
      const hslB = hexToHSL(b.hex);
      return hslA.h - hslB.h;
    }
    return 0;
  });

  // Get unique brands and weights
  const availableBrands = Array.from(new Set(availableYarns.map(y => y.brand))).sort();
  const availableWeights = Array.from(new Set(availableYarns.map(y => y.weight))).sort();

  // Function to move colors in the palette
  const moveColor = (dragIndex: number, hoverIndex: number) => {
    const newSelectedYarns = [...selectedYarns];
    const [draggedYarn] = newSelectedYarns.splice(dragIndex, 1);
    newSelectedYarns.splice(hoverIndex, 0, draggedYarn);
    setSelectedYarns(newSelectedYarns);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Top Navigation */}
      <header className="bg-white border-b border-[#d1d5dc] sticky top-0 z-50">
        <div className="flex items-center h-[55px] px-6">
          <div className="flex-1">
            <Link to="/">
              <h1 className="text-[28px] font-black text-[#6d57fc]" style={{ fontFamily: 'Inter, sans-serif' }}>
                my crochet palette
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/">
              <button className="text-[16px] font-semibold text-[#1e1e1e] hover:text-[#6d57fc] transition-colors flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tools
                <ChevronDown className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/my-palettes">
              <button className="text-[16px] font-semibold text-[#1e1e1e] hover:text-[#6d57fc] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                My Palettes
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Search and Filters Bar */}
      <div className="bg-white border-b border-[#d1d5dc]">
        <div className="flex items-center h-[53px] px-6">
          {/* Search */}
          <div className="flex-1 pr-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#1e1e1e]" />
              <input
                type="text"
                placeholder="Search yarn colours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[37px] pl-12 pr-4 text-[16px] text-[#6c7280] border-0 bg-white focus:outline-none placeholder:text-[#6c7280]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
          </div>
          
          {/* Brand Filter */}
          <div className="border-l border-[#d1d5dc] w-[249px] flex-shrink-0">
            <div className="relative px-4">
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="w-full h-[37px] text-[16px] font-semibold text-[#1e1e1e] border-0 bg-white focus:outline-none appearance-none pr-10"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%231E1E1E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0 center',
                  backgroundSize: '24px 24px'
                }}
              >
                <option value="all">All Brands</option>
                {availableBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Weight Filter */}
          <div className="border-l border-[#d1d5dc] w-[248px] flex-shrink-0">
            <div className="relative px-4">
              <select
                value={weightFilter}
                onChange={(e) => setWeightFilter(e.target.value)}
                className="w-full h-[37px] text-[16px] font-semibold text-[#1e1e1e] border-0 bg-white focus:outline-none appearance-none pr-10"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%231E1E1E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0 center',
                  backgroundSize: '24px 24px'
                }}
              >
                <option value="all">All Weights</option>
                {availableWeights.map((weight) => (
                  <option key={weight} value={weight}>
                    {weight}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort By */}
          <div className="border-l border-[#d1d5dc] w-[162.75px] flex-shrink-0">
            <div className="relative px-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full h-[37px] text-[16px] font-semibold text-[#1e1e1e] border-0 bg-white focus:outline-none appearance-none pr-10"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%231E1E1E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0 center',
                  backgroundSize: '24px 24px'
                }}
              >
                <option value="name">Sort by</option>
                <option value="name">Name</option>
                <option value="colorCode">Color Code</option>
                <option value="colorShade">Color Shade</option>
              </select>
            </div>
          </div>

          {/* Extra dropdown (empty for now) */}
          <div className="border-l border-[#d1d5dc] flex-shrink-0">
            <div className="px-4">
              <ChevronDown className="w-6 h-6 text-[#1e1e1e]" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-[358px] bg-white border-r border-[#d1d5dc] border-t border-[#d1d5dc] flex-shrink-0 h-[calc(100vh-108px)] overflow-y-auto">
          <div className="p-6 space-y-7">
            {/* Create a palette section */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-[20px] font-bold text-[#353535]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Create a palette
                </h2>
                <p className="text-[14px] text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Drag the colours to reorder them
                </p>
              </div>

              {/* Palette Preview */}
              <div className="border border-[#d1d5dc] rounded-md overflow-hidden">
                <div className="h-[41px] flex">
                  {selectedYarns.length > 0 ? (
                    <DndProvider backend={HTML5Backend}>
                      {selectedYarns.map((yarn, index) => (
                        <DraggableColor
                          key={`${yarn.id}-${index}`}
                          yarn={yarn}
                          index={index}
                          moveColor={moveColor}
                        />
                      ))}
                    </DndProvider>
                  ) : (
                    <>
                      <div className="flex-1 bg-white rounded-tl-md rounded-bl-md" />
                      <div className="flex-1 bg-white" />
                      <div className="flex-1 bg-white" />
                      <div className="flex-1 bg-white" />
                      <div className="flex-1 bg-white rounded-tr-md rounded-br-md" />
                    </>
                  )}
                </div>
              </div>

              {/* Save Palette Button */}
              {selectedYarns.length > 0 && (
                <button
                  onClick={() => setIsSaveModalOpen(true)}
                  className="w-full bg-[#e2dfe7] hover:bg-[#d5d1dc] transition-colors px-3 py-1 rounded flex items-center justify-center gap-2"
                >
                  <Palette className="w-5 h-5 text-[#312144]" />
                  <span className="text-[14px] font-semibold text-[#312144]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Save Palette
                  </span>
                </button>
              )}
            </div>

            {/* My Palettes section */}
            <div className="pt-5 border-t border-[#d1d5dc] space-y-4">
              <h3 className="text-[18px] font-bold text-[#353535]" style={{ fontFamily: 'Inter, sans-serif' }}>
                My Palettes
              </h3>

              {palettes.length === 0 ? (
                <p className="text-sm text-[#6c7280]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  No saved palettes yet
                </p>
              ) : (
                <div className="space-y-2">
                  {palettes.map((palette) => (
                    <div key={palette.id} className="border border-[#d1d5dc] rounded-md p-3">
                      <div className="flex flex-wrap gap-1.5 mb-1">
                        {palette.yarns.map((yarn, idx) => (
                          <div
                            key={idx}
                            className="w-5 h-5 rounded"
                            style={{ backgroundColor: yarn.hex }}
                            title={yarn.name}
                          />
                        ))}
                      </div>
                      <p className="text-[14px] font-bold text-[#353535] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {palette.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Center Content - Yarn Grid */}
        <div className="flex-1 h-[calc(100vh-108px)] overflow-y-auto">
          <div className="p-6">
            {/* Results Count */}
            <div className="mb-4">
              <p className="text-[16px] text-black" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="font-semibold">{filteredYarns.length}</span> colours available{" "}
                <span className="font-semibold">{selectedYarns.length}</span> selected
              </p>
            </div>

            {/* Yarn Grid */}
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-12 h-12 border-4 border-[#6d57fc] border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-[#6c7280] text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Loading yarn colors...
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedYarns.map((yarn) => {
                  const isSelected = selectedYarns.some(y => y.id === yarn.id);
                  return (
                    <YarnColorCard 
                      key={yarn.id}
                      yarn={yarn} 
                      isSelected={isSelected}
                      onToggle={toggleYarn}
                    />
                  );
                })}

                {filteredYarns.length === 0 && (
                  <div className="col-span-full text-center py-16">
                    <p className="text-[#6c7280] text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                      No yarn colors match your search
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Save Palette Modal */}
      <SavePaletteModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        onSave={handleSavePalette}
        selectedYarns={selectedYarns}
      />
    </div>
  );
}