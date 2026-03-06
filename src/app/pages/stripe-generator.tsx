import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { YarnColor, allYarns } from "../data/yarns";
import { Shuffle, FileText, Palette, Check, X, Menu, Home, Settings } from "lucide-react";
import { usePalettes } from "../hooks/use-palettes";
import { toast } from "sonner";
import { jsPDF } from "jspdf";
import { GlobalHeader } from "../components/global-header";
import { useAdminMode } from "../hooks/use-admin-mode";

interface StripeRow {
  id: string;
  yarn: YarnColor;
  rows: number;
}

interface BlanketSize {
  name: string;
  category: string;
  widthInches: number;
  heightInches: number;
  widthCm: number;
  heightCm: number;
}

const BLANKET_SIZES: BlanketSize[] = [
  // Baby Blankets
  { name: "Lovey", category: "Baby", widthInches: 12, heightInches: 12, widthCm: 31, heightCm: 31 },
  { name: "Security", category: "Baby", widthInches: 16, heightInches: 16, widthCm: 41, heightCm: 41 },
  { name: "Cradle", category: "Baby", widthInches: 20, heightInches: 32, widthCm: 51, heightCm: 82 },
  { name: "Stroller", category: "Baby", widthInches: 30, heightInches: 36, widthCm: 77, heightCm: 92 },
  { name: "Baby", category: "Baby", widthInches: 36, heightInches: 36, widthCm: 92, heightCm: 92 },
  { name: "Receiving", category: "Baby", widthInches: 40, heightInches: 40, widthCm: 102, heightCm: 102 },
  { name: "Toddler", category: "Baby", widthInches: 36, heightInches: 48, widthCm: 92, heightCm: 122 },
  { name: "Swaddler", category: "Baby", widthInches: 48, heightInches: 48, widthCm: 122, heightCm: 122 },
  { name: "Crib", category: "Baby", widthInches: 40, heightInches: 60, widthCm: 102, heightCm: 153 },
  // Adult Blankets
  { name: "Lapghan", category: "Adult", widthInches: 40, heightInches: 48, widthCm: 102, heightCm: 122 },
  { name: "Small Throw", category: "Adult", widthInches: 52, heightInches: 60, widthCm: 133, heightCm: 153 },
  { name: "Large Throw", category: "Adult", widthInches: 60, heightInches: 72, widthCm: 153, heightCm: 183 },
  { name: "Twin", category: "Adult", widthInches: 66, heightInches: 90, widthCm: 168, heightCm: 229 },
  { name: "Double", category: "Adult", widthInches: 80, heightInches: 90, widthCm: 204, heightCm: 229 },
  { name: "Queen", category: "Adult", widthInches: 90, heightInches: 90, widthCm: 229, heightCm: 229 },
  { name: "King", category: "Adult", widthInches: 90, heightInches: 108, widthCm: 229, heightCm: 275 },
  { name: "CA King", category: "Adult", widthInches: 98, heightInches: 110, widthCm: 249, heightCm: 280 },
];

export function StripeGenerator() {
  const { palettes } = usePalettes();
  const { isAdminMode } = useAdminMode();
  const [stripes, setStripes] = useState<StripeRow[]>([]);
  const [numStripes, setNumStripes] = useState(20);
  const [minRows, setMinRows] = useState(1);
  const [maxRows, setMaxRows] = useState(6);
  const [selectedPaletteId, setSelectedPaletteId] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  // Size mode toggle
  const [sizeMode, setSizeMode] = useState<"presets" | "manual">("presets");
  
  // Blanket size - default to "Stroller" size
  const [selectedBlanketSize, setSelectedBlanketSize] = useState<BlanketSize>(BLANKET_SIZES[3]); // Stroller
  
  // Manual dimensions (cm)
  const [manualWidth, setManualWidth] = useState(75);
  const [manualHeight, setManualHeight] = useState(90);
  
  // Stripe width control (fixed number of rows per stripe)
  const [stripeWidth, setStripeWidth] = useState(1);
  
  // Repeat yarn every other row
  const [repeatYarn, setRepeatYarn] = useState<YarnColor | null>(null);
  
  const [rowHeight, setRowHeight] = useState(0.5); // cm per row

  // Mobile controls drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Get current blanket dimensions
  const blanketWidth = sizeMode === "presets" ? selectedBlanketSize.widthCm : manualWidth;
  const blanketHeight = sizeMode === "presets" ? selectedBlanketSize.heightCm : manualHeight;

  // Get available yarns based on selected palette
  const getAvailableYarns = () => {
    if (!selectedPaletteId) {
      return allYarns;
    }
    const selectedPalette = palettes.find(p => p.id === selectedPaletteId);
    return selectedPalette ? selectedPalette.yarns : allYarns;
  };

  // Generate random stripe pattern with improved logic
  const generatePattern = () => {
    let availableYarns = getAvailableYarns();
    if (availableYarns.length === 0) {
      toast.error("No yarns available");
      return;
    }

    // Filter out repeat yarn from available yarns if it exists
    if (repeatYarn) {
      availableYarns = availableYarns.filter(y => y.id !== repeatYarn.id);
      if (availableYarns.length === 0) {
        toast.error("Need at least one other color besides the repeat yarn");
        return;
      }
    }

    const newStripes: StripeRow[] = [];
    let lastYarnId: string | null = null;

    // Calculate number of stripes based on blanket height and stripe width
    const estimatedStripes = Math.ceil(blanketHeight / (stripeWidth * rowHeight));
    const targetStripes = Math.max(10, estimatedStripes); // At least 10 stripes

    for (let i = 0; i < targetStripes; i++) {
      let selectedYarn: YarnColor;

      // If repeat yarn is set, alternate between repeat yarn and random yarns
      if (repeatYarn && i % 2 === 0) {
        selectedYarn = repeatYarn;
      } else {
        // Select a random yarn that's different from the last one (if enough colors)
        if (availableYarns.length > 1) {
          let attempts = 0;
          do {
            selectedYarn = availableYarns[Math.floor(Math.random() * availableYarns.length)];
            attempts++;
          } while (selectedYarn.id === lastYarnId && attempts < 10);
        } else {
          selectedYarn = availableYarns[0];
        }
      }

      newStripes.push({
        id: `stripe-${i}-${Date.now()}-${Math.random()}`,
        yarn: selectedYarn,
        rows: stripeWidth,
      });

      lastYarnId = selectedYarn.id;
    }

    setStripes(newStripes);
  };

  // Initialize with random pattern
  useEffect(() => {
    generatePattern();
  }, []);

  // Calculate total rows and blanket measurements
  const totalRows = stripes.reduce((sum, stripe) => sum + stripe.rows, 0);
  const calculatedHeight = totalRows * rowHeight;

  // Calculate display dimensions (maintaining aspect ratio)
  const maxDisplayHeight = 700; // Max height in pixels for display
  const maxDisplayWidth = 600; // Max width in pixels for display
  const aspectRatio = blanketWidth / blanketHeight;
  
  let displayWidth = maxDisplayWidth;
  let displayHeight = maxDisplayWidth / aspectRatio;
  
  if (displayHeight > maxDisplayHeight) {
    displayHeight = maxDisplayHeight;
    displayWidth = maxDisplayHeight * aspectRatio;
  }

  // Export pattern
  const exportPattern = () => {
    const patternText = stripes.map((stripe, idx) => 
      `${idx + 1}. ${stripe.yarn.name} (${stripe.yarn.colorCode}) - ${stripe.rows} ${stripe.rows === 1 ? 'row' : 'rows'}`
    ).join('\n');

    const fullText = `Stripe Blanket Pattern\n${'='.repeat(40)}\nBlanket Size: ${blanketWidth}cm × ${blanketHeight}cm\nTotal Rows: ${totalRows}\nCalculated Height: ${calculatedHeight.toFixed(1)}cm\nTotal Stripes: ${stripes.length}\n\n${patternText}`;

    const blob = new Blob([fullText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `stripe-pattern-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("Pattern exported successfully!");
  };

  // Export pattern as PDF
  const exportPatternToPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPos = 20;

    // Title
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text('Stripe Blanket Pattern', pageWidth / 2, yPos, { align: 'center' });
    yPos += 15;

    // Blanket Details
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    const sizeText = sizeMode === 'presets' 
      ? `${selectedBlanketSize.name} (${selectedBlanketSize.widthInches}" × ${selectedBlanketSize.heightInches}")` 
      : 'Custom Size';
    doc.text(`Blanket Size: ${sizeText}`, 20, yPos);
    yPos += 7;
    doc.text(`Dimensions: ${blanketWidth}cm × ${blanketHeight}cm`, 20, yPos);
    yPos += 7;
    doc.text(`Total Rows: ${totalRows}`, 20, yPos);
    yPos += 7;
    doc.text(`Total Stripes: ${stripes.length}`, 20, yPos);
    yPos += 7;
    doc.text(`Stripe Width: ${stripeWidth} ${stripeWidth === 1 ? 'row' : 'rows'} per stripe`, 20, yPos);
    yPos += 12;

    // Separator line
    doc.setLineWidth(0.5);
    doc.line(20, yPos, pageWidth - 20, yPos);
    yPos += 10;

    // Pattern Title
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Pattern:', 20, yPos);
    yPos += 10;

    // Pattern list
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');

    stripes.forEach((stripe, index) => {
      // Check if we need a new page
      if (yPos > pageHeight - 20) {
        doc.addPage();
        yPos = 20;
      }

      const rowText = `${stripe.rows} ${stripe.rows === 1 ? 'row' : 'rows'}`;
      const text = `${index + 1}. ${stripe.yarn.brand} ${stripe.yarn.name} (${stripe.yarn.colorCode}) - ${rowText}`;
      
      // Draw color swatch
      const hexToRGB = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
      };
      
      const { r, g, b } = hexToRGB(stripe.yarn.hex);
      doc.setFillColor(r, g, b);
      doc.rect(20, yPos - 3, 5, 5, 'F');
      
      // Draw text
      doc.text(text, 28, yPos);
      yPos += 7;
    });

    // Footer
    yPos += 10;
    if (yPos > pageHeight - 30) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(`Generated by Crochet Colour System on ${new Date().toLocaleDateString()}`, pageWidth / 2, pageHeight - 10, { align: 'center' });

    // Save PDF
    doc.save(`stripe-blanket-pattern-${Date.now()}.pdf`);
    toast.success("Pattern exported as PDF!");
  };

  // Copy individual stripe to clipboard
  const copyStripe = async (stripe: StripeRow, index: number) => {
    const text = `${stripe.yarn.name} (${stripe.yarn.colorCode}) - ${stripe.rows} ${stripe.rows === 1 ? 'row' : 'rows'}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <>
      <GlobalHeader />
      <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)]" style={{ backgroundColor: '#edecf2' }}>
        {/* Mobile Header with Menu Button */}
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20">
          <div>
            <h1 className="text-lg font-bold text-[#353535]" style={{ fontFamily: 'Inter, sans-serif' }}>Stripe Generator</h1>
            <p className="text-xs text-black" style={{ fontFamily: 'Inter, sans-serif' }}>{blanketWidth}cm × {blanketHeight}cm</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={exportPatternToPDF}
              size="sm"
              className="rounded-lg bg-primary hover:bg-primary/90"
            >
              <FileText className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setIsDrawerOpen(true)}
              size="sm"
              variant="outline"
              className="rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Drawer Overlay */}
        {isDrawerOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}

        {/* Left Sidebar - Controls (Desktop and Mobile Drawer) */}
        <div className={`
          ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          fixed lg:static
          inset-y-0 left-0
          w-80 flex-shrink-0 bg-white
          border-r border-gray-200
          flex flex-col
          z-40
          transition-transform duration-300 ease-in-out
        `}>
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary mb-1">
                Stripe Blanket Generator
              </h1>
              <p className="text-sm text-gray-600">Create random stripe patterns</p>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Size Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-gray-700">Size</h3>
                {/* Presets/Manual Toggle */}
                <div className="inline-flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setSizeMode("presets")}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${
                      sizeMode === "presets"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Presets
                  </button>
                  <button
                    onClick={() => setSizeMode("manual")}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${
                      sizeMode === "manual"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Manual
                  </button>
                </div>
              </div>

              {sizeMode === "presets" ? (
                <>
                  {/* Preset Size Dropdown */}
                  <button
                    onClick={() => {
                      // Simple cycle through sizes or open dropdown
                      const currentIndex = BLANKET_SIZES.findIndex(s => s === selectedBlanketSize);
                      const nextIndex = (currentIndex + 1) % BLANKET_SIZES.length;
                      setSelectedBlanketSize(BLANKET_SIZES[nextIndex]);
                    }}
                    className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 text-left transition-colors flex items-center justify-between group"
                  >
                    <span className="text-base font-semibold text-gray-900">
                      {selectedBlanketSize.name}
                    </span>
                    <Check className="w-5 h-5 text-primary" />
                  </button>
                  
                  {/* Size Info */}
                  <p className="text-sm text-gray-500 px-1">
                    Approx. {selectedBlanketSize.widthCm}cm x {selectedBlanketSize.heightCm}cm
                  </p>
                </>
              ) : (
                <>
                  {/* Manual Length Slider */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700">Length</label>
                      <span className="text-xs text-gray-500">in cm</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="20"
                        max="300"
                        value={manualHeight}
                        onChange={(e) => setManualHeight(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #423277 0%, #423277 ${((manualHeight - 20) / 280) * 100}%, #e5e7eb ${((manualHeight - 20) / 280) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <input
                        type="number"
                        min="20"
                        max="300"
                        value={manualHeight}
                        onChange={(e) => setManualHeight(Math.max(20, Math.min(300, parseInt(e.target.value) || 20)))}
                        className="w-16 h-9 px-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* Manual Width Slider */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700">Width</label>
                      <span className="text-xs text-gray-500">in cm</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="20"
                        max="300"
                        value={manualWidth}
                        onChange={(e) => setManualWidth(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #423277 0%, #423277 ${((manualWidth - 20) / 280) * 100}%, #e5e7eb ${((manualWidth - 20) / 280) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <input
                        type="number"
                        min="20"
                        max="300"
                        value={manualWidth}
                        onChange={(e) => setManualWidth(Math.max(20, Math.min(300, parseInt(e.target.value) || 20)))}
                        className="w-16 h-9 px-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Palette Section */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-gray-700">Palette</h3>
                {selectedPaletteId && (
                  <button
                    onClick={() => {
                      setSelectedPaletteId(null);
                      generatePattern();
                    }}
                    className="text-sm font-semibold text-[#d1417a] hover:text-[#b12b64] transition-colors"
                  >
                    Change Palette
                  </button>
                )}
              </div>

              {palettes.length === 0 ? (
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Palette className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 mb-3">
                    Create a palette to get started
                  </p>
                  <Link to="/palette-builder">
                    <Button size="sm" className="rounded-lg bg-primary hover:bg-primary/90">
                      <Palette className="w-3 h-3 mr-2" />
                      Create Palette
                    </Button>
                  </Link>
                </div>
              ) : selectedPaletteId ? (
                (() => {
                  const palette = palettes.find(p => p.id === selectedPaletteId);
                  return palette ? (
                    <div className="space-y-2">
                      {/* Palette Visual Preview */}
                      <div className="h-20 rounded-lg overflow-hidden shadow-sm border border-gray-200 flex">
                        {palette.yarns.map((yarn, idx) => (
                          <div
                            key={idx}
                            className="flex-1 relative group cursor-pointer hover:brightness-90 transition-all"
                            style={{ backgroundColor: yarn.hex }}
                            title={yarn.name}
                          >
                            {palette.yarns.length <= 6 && (
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-white/90 px-1.5 py-0.5 rounded text-[10px] font-bold text-gray-900 shadow-lg">
                                  {yarn.colorCode}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm font-semibold text-gray-900 px-1">
                        {palette.name}
                      </p>
                    </div>
                  ) : null;
                })()
              ) : (
                <div className="space-y-2">
                  {palettes.map(palette => (
                    <button
                      key={palette.id}
                      onClick={() => {
                        setSelectedPaletteId(palette.id);
                        generatePattern();
                      }}
                      className="w-full px-3 py-2 rounded-lg text-sm font-semibold transition-all text-left bg-white border border-gray-300 text-gray-700 hover:border-primary"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {palette.yarns.slice(0, 4).map((yarn, idx) => (
                            <div
                              key={idx}
                              className="w-3 h-3 rounded-sm"
                              style={{ backgroundColor: yarn.hex }}
                            />
                          ))}
                        </div>
                        <span className="truncate">{palette.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Stripe Width Section */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-base font-bold text-gray-700">Stripe Width</h3>
              <p className="text-xs text-gray-600 -mt-2">
                The number of rows each stripe should use.
              </p>

              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={stripeWidth}
                  onChange={(e) => setStripeWidth(parseInt(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #423277 0%, #423277 ${((stripeWidth - 1) / 19) * 100}%, #e5e7eb ${((stripeWidth - 1) / 19) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={stripeWidth}
                  onChange={(e) => setStripeWidth(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
                  className="w-16 h-9 px-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Repeat Yarn Section */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-base font-bold text-gray-700">Repeat yarn every other row</h3>
              <p className="text-xs text-gray-600 -mt-2">
                You can specify a yarn to appear ever other stripe.
              </p>

              {repeatYarn ? (
                <button
                  onClick={() => setRepeatYarn(null)}
                  className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-3 text-left transition-colors flex items-center gap-3 group"
                >
                  <div
                    className="w-12 h-12 rounded-lg shadow-sm flex-shrink-0 border border-gray-300"
                    style={{ backgroundColor: repeatYarn.hex }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {repeatYarn.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Click to remove
                    </p>
                  </div>
                  <Check className="w-5 h-5 text-primary" />
                </button>
              ) : (
                <div className="grid grid-cols-4 gap-2">
                  {getAvailableYarns().slice(0, 8).map((yarn) => (
                    <button
                      key={yarn.id}
                      onClick={() => setRepeatYarn(yarn)}
                      className="aspect-square rounded-lg border-2 border-gray-200 hover:border-primary transition-all shadow-sm hover:shadow-md"
                      style={{ backgroundColor: yarn.hex }}
                      title={yarn.name}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Generate Button */}
            <div className="pt-4">
              <Button
                onClick={generatePattern}
                className="w-full rounded-lg bg-primary hover:bg-primary/90 h-[48px]"
              >
                <Shuffle className="w-5 h-5 mr-2" />
                Randomize Pattern
              </Button>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="p-6 border-t border-gray-200 space-y-3">
            {isAdminMode && (
              <Link to="/admin">
                <Button variant="outline" className="w-full rounded-lg">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Center - Blanket Preview */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex items-center justify-center">
          <div className="w-full max-w-4xl">
            <div className="mb-4 md:mb-6 hidden lg:flex items-center justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Blanket Preview</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {blanketWidth}cm × {blanketHeight}cm • {totalRows} rows
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={exportPattern}
                  variant="outline"
                  className="rounded-lg hidden md:flex"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Export Pattern
                </Button>
                <Button
                  onClick={exportPatternToPDF}
                  className="rounded-lg bg-primary hover:bg-primary/90"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span className="hidden md:inline">Generate Pattern PDF</span>
                  <span className="md:hidden">PDF</span>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden p-4 md:p-8">
              <div className="flex items-center justify-center">
                <div 
                  className="border-2 md:border-4 border-gray-300 rounded-lg overflow-hidden shadow-xl max-w-full"
                  style={{
                    width: `${displayWidth}px`,
                    height: `${displayHeight}px`,
                    maxWidth: '100%',
                  }}
                >
                  {stripes.map((stripe) => {
                    // Calculate the height of each stripe proportional to its rows
                    const stripeHeightPercent = (stripe.rows / totalRows) * 100;
                    return (
                      <div
                        key={stripe.id}
                        className="relative group cursor-pointer hover:brightness-90 transition-all"
                        style={{
                          backgroundColor: stripe.yarn.hex,
                          height: `${stripeHeightPercent}%`,
                        }}
                        title={`${stripe.yarn.name} - ${stripe.rows} rows`}
                      >
                        {/* Row count indicator on hover */}
                        {stripeHeightPercent > 3 && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="bg-white/90 px-2 py-1 rounded text-xs font-bold text-gray-900 shadow-lg">
                              {stripe.rows} {stripe.rows === 1 ? 'row' : 'rows'}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile action buttons at bottom */}
            <div className="mt-4 lg:hidden">
              <Button
                onClick={generatePattern}
                className="w-full rounded-lg bg-primary hover:bg-primary/90"
              >
                <Shuffle className="w-4 h-4 mr-2" />
                Randomize
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}