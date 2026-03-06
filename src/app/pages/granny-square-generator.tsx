import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { YarnColor, allYarns } from "../data/yarns";
import { Home, Settings, FileText, Palette, X, Menu, Shuffle, ChevronDown, ChevronUp } from "lucide-react";
import { useAdminMode } from "../hooks/use-admin-mode";
import { usePalettes } from "../hooks/use-palettes";
import { toast } from "sonner";
import { jsPDF } from "jspdf";
import { GlobalHeader } from "../components/global-header";

interface SquareRound {
  roundNumber: number;
  yarn: YarnColor;
}

interface GrannySquare {
  id: string;
  row: number;
  col: number;
  rounds: SquareRound[];
}

type StyleMode = "single" | "multiple";
type RandomiserStyle = "standard" | "radial";

export function GrannySquareGenerator() {
  const { isAdminMode } = useAdminMode();
  const { palettes } = usePalettes();
  
  // Style
  const [styleMode, setStyleMode] = useState<StyleMode>("multiple");
  
  // Size controls
  const [squaresWide, setSquaresWide] = useState(5);
  const [squaresLong, setSquaresLong] = useState(5);
  const [roundsPerSquare, setRoundsPerSquare] = useState(5);
  
  // Settings
  const [solidSquares, setSolidSquares] = useState(false);
  const [joiningRound, setJoiningRound] = useState(0); // 0 = no joining round
  const [randomiserStyle, setRandomiserStyle] = useState<RandomiserStyle>("standard");
  
  // Palette
  const [selectedPaletteId, setSelectedPaletteId] = useState<string | null>(null);
  const [isPaletteOpen, setIsPaletteOpen] = useState(true);
  
  // Pattern
  const [squares, setSquares] = useState<GrannySquare[]>([]);
  
  // Mobile drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Get available yarns
  const getAvailableYarns = (): YarnColor[] => {
    if (!selectedPaletteId) {
      return allYarns;
    }
    const selectedPalette = palettes.find(p => p.id === selectedPaletteId);
    return selectedPalette ? selectedPalette.yarns : allYarns;
  };

  // Generate a single square's rounds
  const generateSquareRounds = (availableYarns: YarnColor[]): SquareRound[] => {
    const rounds: SquareRound[] = [];
    let lastYarnId: string | null = null;

    if (solidSquares && joiningRound < roundsPerSquare) {
      // All rounds same color except joining round
      const yarn = availableYarns[Math.floor(Math.random() * availableYarns.length)];
      for (let i = 1; i <= roundsPerSquare; i++) {
        if (joiningRound > 0 && i === roundsPerSquare) {
          // Last round is joining round - pick different color
          let joiningYarn: YarnColor;
          if (availableYarns.length > 1) {
            do {
              joiningYarn = availableYarns[Math.floor(Math.random() * availableYarns.length)];
            } while (joiningYarn.id === yarn.id);
          } else {
            joiningYarn = yarn;
          }
          rounds.push({ roundNumber: i, yarn: joiningYarn });
        } else {
          rounds.push({ roundNumber: i, yarn });
        }
      }
    } else {
      // Each round different color (standard mode)
      for (let i = 1; i <= roundsPerSquare; i++) {
        let selectedYarn: YarnColor;
        
        if (availableYarns.length > 1 && randomiserStyle === "standard") {
          // Avoid consecutive duplicates
          let attempts = 0;
          do {
            selectedYarn = availableYarns[Math.floor(Math.random() * availableYarns.length)];
            attempts++;
          } while (selectedYarn.id === lastYarnId && attempts < 10);
        } else {
          selectedYarn = availableYarns[Math.floor(Math.random() * availableYarns.length)];
        }

        rounds.push({ roundNumber: i, yarn: selectedYarn });
        lastYarnId = selectedYarn.id;
      }
    }

    return rounds;
  };

  // Generate pattern
  const generatePattern = () => {
    const availableYarns = getAvailableYarns();
    if (availableYarns.length === 0) {
      toast.error("No yarns available");
      return;
    }

    const newSquares: GrannySquare[] = [];

    if (styleMode === "single") {
      // Single large square
      newSquares.push({
        id: "single-square",
        row: 0,
        col: 0,
        rounds: generateSquareRounds(availableYarns),
      });
    } else {
      // Multiple squares grid
      for (let row = 0; row < squaresLong; row++) {
        for (let col = 0; col < squaresWide; col++) {
          newSquares.push({
            id: `square-${row}-${col}`,
            row,
            col,
            rounds: generateSquareRounds(availableYarns),
          });
        }
      }
    }

    setSquares(newSquares);
  };

  // Initialize pattern
  useEffect(() => {
    generatePattern();
  }, []);

  // Re-generate when style changes
  useEffect(() => {
    generatePattern();
  }, [styleMode, squaresWide, squaresLong, roundsPerSquare]);

  // Calculate dimensions
  const squareSize = styleMode === "single" ? 300 : 60;
  const gap = 0; // No gap between squares
  const gridWidth = styleMode === "single" ? squareSize : squaresWide * squareSize + (squaresWide - 1) * gap;
  const gridHeight = styleMode === "single" ? squareSize : squaresLong * squareSize + (squaresLong - 1) * gap;

  // Export to PDF
  const exportPatternToPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPos = 20;

    // Title
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text('Granny Square Pattern', pageWidth / 2, yPos, { align: 'center' });
    yPos += 15;

    // Pattern Details
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text(`Style: ${styleMode === 'single' ? 'Single Square' : 'Multiple Squares'}`, 20, yPos);
    yPos += 7;
    
    if (styleMode === "multiple") {
      doc.text(`Grid: ${squaresWide} × ${squaresLong} squares`, 20, yPos);
      yPos += 7;
    }
    
    doc.text(`Rounds per square: ${roundsPerSquare}`, 20, yPos);
    yPos += 7;
    doc.text(`Solid squares: ${solidSquares ? 'Yes' : 'No'}`, 20, yPos);
    yPos += 7;
    
    if (joiningRound > 0) {
      doc.text(`Joining round: Round ${roundsPerSquare}`, 20, yPos);
      yPos += 7;
    }
    
    yPos += 5;

    // Separator
    doc.setLineWidth(0.5);
    doc.line(20, yPos, pageWidth - 20, yPos);
    yPos += 10;

    // Pattern instructions
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Pattern:', 20, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');

    squares.forEach((square, squareIndex) => {
      if (yPos > pageHeight - 40) {
        doc.addPage();
        yPos = 20;
      }

      const squareLabel = styleMode === 'single' 
        ? 'Square' 
        : `Square ${squareIndex + 1} (Row ${square.row + 1}, Col ${square.col + 1})`;
      
      doc.setFont(undefined, 'bold');
      doc.text(squareLabel, 20, yPos);
      yPos += 7;
      doc.setFont(undefined, 'normal');

      square.rounds.forEach((round) => {
        if (yPos > pageHeight - 20) {
          doc.addPage();
          yPos = 20;
        }

        const text = `  Round ${round.roundNumber}: ${round.yarn.brand} ${round.yarn.name} (${round.yarn.colorCode})`;
        
        // Draw color swatch
        const hexToRGB = (hex: string) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return { r, g, b };
        };
        
        const { r, g, b } = hexToRGB(round.yarn.hex);
        doc.setFillColor(r, g, b);
        doc.rect(25, yPos - 3, 5, 5, 'F');
        
        doc.text(text, 32, yPos);
        yPos += 6;
      });

      yPos += 5;
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

    doc.save(`granny-square-pattern-${Date.now()}.pdf`);
    toast.success("Pattern exported as PDF!");
  };

  return (
    <>
      <GlobalHeader />
      <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)]" style={{ backgroundColor: '#edecf2' }}>
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20">
          <div>
            <h1 className="text-lg font-bold text-[#353535]" style={{ fontFamily: 'Inter, sans-serif' }}>Granny Square</h1>
            <p className="text-xs text-black" style={{ fontFamily: 'Inter, sans-serif' }}>{squaresWide} × {squaresLong} squares</p>
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

        {/* Left Sidebar - Controls */}
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
          <div className="p-5 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                Granny Square Generator
              </h1>
              <p className="text-sm text-gray-600">Design your blanket</p>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="lg:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {/* Style Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-900">Style</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setStyleMode("single")}
                  className={`p-3 rounded-lg border transition-all ${
                    styleMode === "single"
                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="aspect-square bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 rounded-md mb-2 shadow-sm"></div>
                  <p className="text-sm font-medium text-gray-900">Single Square</p>
                </button>
                <button
                  onClick={() => setStyleMode("multiple")}
                  className={`p-3 rounded-lg border transition-all ${
                    styleMode === "multiple"
                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="grid grid-cols-3 gap-0.5 aspect-square rounded-md overflow-hidden mb-2 shadow-sm">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="bg-gradient-to-br from-pink-200 to-pink-400"></div>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-gray-900">Multiple Squares</p>
                </button>
              </div>
            </div>

            {/* Size Section */}
            <div className="space-y-4 pt-3 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              
              {styleMode === "multiple" && (
                <>
                  {/* Number of Squares Wide */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700">Number of Squares Wide</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={squaresWide}
                        onChange={(e) => setSquaresWide(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #423277 0%, #423277 ${((squaresWide - 1) / 9) * 100}%, #e5e7eb ${((squaresWide - 1) / 9) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={squaresWide}
                        onChange={(e) => setSquaresWide(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                        className="w-16 h-9 px-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* Number of Squares Long */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-gray-700">Number of Squares Long</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={squaresLong}
                        onChange={(e) => setSquaresLong(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #423277 0%, #423277 ${((squaresLong - 1) / 9) * 100}%, #e5e7eb ${((squaresLong - 1) / 9) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={squaresLong}
                        onChange={(e) => setSquaresLong(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                        className="w-16 h-9 px-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Rounds per Square */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">
                    {styleMode === "single" ? "Number of Rounds" : "Rounds per Square"}
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={roundsPerSquare}
                    onChange={(e) => setRoundsPerSquare(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #423277 0%, #423277 ${((roundsPerSquare - 1) / 9) * 100}%, #e5e7eb ${((roundsPerSquare - 1) / 9) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={roundsPerSquare}
                    onChange={(e) => setRoundsPerSquare(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                    className="w-16 h-9 px-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                {styleMode === "single" && (
                  <p className="text-xs text-gray-500 mt-1 px-1">
                    Approx. {roundsPerSquare * 9}cm × {roundsPerSquare * 9}cm
                  </p>
                )}
              </div>
            </div>

            {/* Palette Section - Collapsible */}
            <div className="pt-3 border-t border-gray-200">
              <button
                onClick={() => setIsPaletteOpen(!isPaletteOpen)}
                className="w-full flex items-center justify-between py-2 hover:bg-gray-100 -mx-2 px-2 rounded-lg transition-colors"
              >
                <h3 className="text-sm font-medium text-gray-900">Your Palette</h3>
                <div className="flex items-center gap-2">
                  {selectedPaletteId && !(palettes.length === 0) && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPaletteId(null);
                        generatePattern();
                      }}
                      className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Change
                    </button>
                  )}
                  <div className="p-1">
                    {isPaletteOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isPaletteOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
              }`}>
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
                        <div className="h-20 rounded-lg overflow-hidden shadow-sm border border-gray-200 flex">
                          {palette.yarns.map((yarn, idx) => (
                            <div
                              key={idx}
                              className="flex-1 relative group cursor-pointer hover:brightness-90 transition-all"
                              style={{ backgroundColor: yarn.hex }}
                              title={yarn.name}
                            />
                          ))}
                        </div>
                        <p className="text-sm font-semibold text-gray-900 px-1">
                          {palette.name}
                        </p>
                      </div>
                    ) : null;
                  })()
                ) : (
                  <div className="space-y-2 max-h-80 overflow-y-auto">
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
            </div>

            {/* Solid Squares Section */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-700">Solid Squares</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    All rounds within a square are the same colour
                  </p>
                </div>
                <button
                  onClick={() => setSolidSquares(!solidSquares)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    solidSquares ? 'bg-primary' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      solidSquares ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Joining Round Section */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div>
                <h3 className="text-base font-bold text-gray-700">Joining Round</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Outer edge of each square is the same colour
                </p>
              </div>
              <select
                value={joiningRound}
                onChange={(e) => setJoiningRound(parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value={0}>No Joining Round</option>
                {roundsPerSquare > 1 && <option value={roundsPerSquare}>Round {roundsPerSquare}</option>}
              </select>
            </div>

            {/* Randomiser Style */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div>
                <h3 className="text-base font-bold text-gray-700">Randomiser Style</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Select from different types of randomiser
                </p>
              </div>
              
              <button
                onClick={() => setRandomiserStyle("standard")}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  randomiserStyle === "standard"
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                    randomiserStyle === "standard" ? "border-primary" : "border-gray-300"
                  }`}>
                    {randomiserStyle === "standard" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">Standard</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Generate blankets that look random, rounds of the same yarn don't touch.
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setRandomiserStyle("radial")}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                  randomiserStyle === "radial"
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                    randomiserStyle === "radial" ? "border-primary" : "border-gray-300"
                  }`}>
                    {randomiserStyle === "radial" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">Radial</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Random colourwash patterns in rings starting at the center and working outward.
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {/* Generate Button */}
            <div className="pt-4">
              <Button
                onClick={generatePattern}
                className="w-full rounded-lg bg-primary hover:bg-primary/90 h-[48px]"
              >
                <Shuffle className="w-5 h-5 mr-2" />
                Randomise Pattern
              </Button>
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
        </div>

        {/* Center - Pattern Preview */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-4 md:mb-6 hidden lg:flex items-center justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Pattern Preview</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {styleMode === "single" 
                    ? `${roundsPerSquare} rounds` 
                    : `${squaresWide}×${squaresLong} grid • ${roundsPerSquare} rounds per square`}
                </p>
              </div>
              <Button
                onClick={exportPatternToPDF}
                className="rounded-lg bg-primary hover:bg-primary/90"
              >
                <FileText className="w-4 h-4 mr-2" />
                Generate Pattern PDF
              </Button>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden p-4 md:p-8">
              <div className="flex items-center justify-center">
                <div 
                  className="relative"
                  style={{
                    width: `${gridWidth}px`,
                    height: `${gridHeight}px`,
                    maxWidth: '100%',
                  }}
                >
                  {squares.map((square) => (
                    <div
                      key={square.id}
                      className="absolute overflow-hidden border border-gray-200"
                      style={{
                        width: `${squareSize}px`,
                        height: `${squareSize}px`,
                        left: styleMode === "single" ? 0 : `${square.col * (squareSize + gap)}px`,
                        top: styleMode === "single" ? 0 : `${square.row * (squareSize + gap)}px`,
                      }}
                    >
                      {/* Render rounds from outside to inside */}
                      {[...square.rounds].reverse().map((round, idx) => {
                        const roundFromCenter = square.rounds.length - idx;
                        const size = (roundFromCenter / square.rounds.length) * 100;
                        
                        return (
                          <div
                            key={round.roundNumber}
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                              randomiserStyle === "radial" ? "rounded-full" : ""
                            }`}
                            style={{
                              backgroundColor: round.yarn.hex,
                              width: `${size}%`,
                              height: `${size}%`,
                            }}
                            title={`Round ${round.roundNumber}: ${round.yarn.name}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile action buttons */}
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