import { useState, useRef } from "react";
import { GlobalHeader } from "../components/global-header";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Upload, Sparkles, X, Save, Image as ImageIcon } from "lucide-react";
import { allYarns } from "../data/yarns";
import { YarnColorCard } from "../components/yarn-color-card";
import { usePalettes } from "../hooks/use-palettes";
import { toast } from "sonner";
import ColorThief from "colorthief";

interface ExtractedColor {
  rgb: [number, number, number];
  hex: string;
}

interface MatchedYarn {
  yarn: typeof allYarns[0];
  distance: number;
}

export function AIColorMatcher() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [extractedColors, setExtractedColors] = useState<ExtractedColor[]>([]);
  const [matchedYarns, setMatchedYarns] = useState<MatchedYarn[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [colorCount, setColorCount] = useState(6);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { savePalette } = usePalettes();

  // Convert RGB to Hex
  const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
  };

  // Calculate color distance using deltaE (simplified version)
  const colorDistance = (rgb1: [number, number, number], rgb2: [number, number, number]): number => {
    const [r1, g1, b1] = rgb1;
    const [r2, g2, b2] = rgb2;
    
    // Weighted Euclidean distance (gives more weight to human perception)
    const rMean = (r1 + r2) / 2;
    const r = r1 - r2;
    const g = g1 - g2;
    const b = b1 - b2;
    
    return Math.sqrt(
      (2 + rMean / 256) * r * r +
      4 * g * g +
      (2 + (255 - rMean) / 256) * b * b
    );
  };

  // Convert hex to RGB
  const hexToRgb = (hex: string): [number, number, number] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
        ]
      : [0, 0, 0];
  };

  // Find closest yarn match for a color
  const findClosestYarn = (rgb: [number, number, number]): MatchedYarn => {
    let closestYarn = allYarns[0];
    let minDistance = Infinity;

    allYarns.forEach(yarn => {
      const yarnRgb = hexToRgb(yarn.hex);
      const distance = colorDistance(rgb, yarnRgb);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestYarn = yarn;
      }
    });

    return { yarn: closestYarn, distance: minDistance };
  };

  // Handle image upload and color extraction
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    const reader = new FileReader();

    reader.onload = async (e) => {
      const imageUrl = e.target?.result as string;
      setUploadedImage(imageUrl);

      // Create image element for ColorThief
      const img = new Image();
      img.crossOrigin = "Anonymous";
      
      img.onload = () => {
        try {
          const colorThief = new ColorThief();
          const palette = colorThief.getPalette(img, colorCount);
          
          // Convert to our format
          const colors: ExtractedColor[] = palette.map((rgb: [number, number, number]) => ({
            rgb,
            hex: rgbToHex(rgb[0], rgb[1], rgb[2])
          }));
          
          setExtractedColors(colors);
          
          // Find matching yarns
          const matches = colors.map(color => findClosestYarn(color.rgb));
          setMatchedYarns(matches);
          
          setIsProcessing(false);
          toast.success(`Extracted ${colors.length} colors and matched them to yarns!`);
        } catch (error) {
          console.error("Error extracting colors:", error);
          toast.error("Failed to extract colors from image");
          setIsProcessing(false);
        }
      };

      img.onerror = () => {
        toast.error("Failed to load image");
        setIsProcessing(false);
      };

      img.src = imageUrl;
    };

    reader.readAsDataURL(file);
  };

  // Save matched yarns as a palette
  const saveAsPalette = () => {
    if (matchedYarns.length === 0) {
      toast.error("No colors to save");
      return;
    }

    const paletteName = `AI Palette ${new Date().toLocaleDateString()}`;
    const yarns = matchedYarns.map(match => match.yarn);
    
    savePalette(paletteName, yarns);

    toast.success(`Saved "${paletteName}" to My Palettes`);
  };

  // Reset everything
  const handleReset = () => {
    setUploadedImage(null);
    setExtractedColors([]);
    setMatchedYarns([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#edecf2' }}>
      <GlobalHeader />

      <main className="max-w-[1440px] mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[326px_1fr] gap-8">
          {/* Left Sidebar - Upload Controls */}
          <div className="space-y-6">
            {/* Page Header */}
            <div>
              <h1 className="text-2xl font-bold text-[#353535] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                AI Color Matcher
              </h1>
              <p className="text-base leading-[22px] text-black" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                Upload an image and let AI extract colors and match them to yarns
              </p>
            </div>

            {/* Upload Controls Card */}
            <div className="bg-white rounded-lg p-6 border border-[#d1d5dc] space-y-6">
              {/* Color Count Selector */}
              <div>
                <label className="block text-base font-semibold mb-3 text-[#1e1e1e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Colors to Extract
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[5, 6, 7, 8].map(count => (
                    <button
                      key={count}
                      onClick={() => setColorCount(count)}
                      className="px-4 py-2.5 rounded-lg font-semibold transition-all text-base"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: colorCount === count ? '#4A3B5C' : '#fff',
                        color: colorCount === count ? '#fff' : '#1e1e1e',
                        border: `1px solid ${colorCount === count ? '#4A3B5C' : '#d1d5dc'}`
                      }}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              {/* Upload Button */}
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                
                <label htmlFor="image-upload" className="block">
                  <div
                    className="w-full px-4 py-3 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-90"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      backgroundColor: '#4A3B5C',
                      fontSize: '16px'
                    }}
                  >
                    <Upload className="w-5 h-5" />
                    Choose Image
                  </div>
                </label>
                <p className="text-xs text-[#6c7280] mt-2 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                  JPG, PNG, WebP • Max 10MB
                </p>
              </div>

              {/* Clear Button (only shown when image is uploaded) */}
              {uploadedImage && (
                <button
                  onClick={handleReset}
                  className="w-full px-4 py-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    backgroundColor: '#fff',
                    color: '#1e1e1e',
                    border: '1px solid #d1d5dc',
                    fontSize: '16px'
                  }}
                >
                  <X className="w-4 h-4" />
                  Clear & Start Over
                </button>
              )}
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-lg p-6 border border-[#d1d5dc]">
              <h3 className="text-base font-semibold mb-2 text-[#353535]" style={{ fontFamily: 'Inter, sans-serif' }}>
                How it works
              </h3>
              <ul className="space-y-2 text-sm text-[#6c7280]" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A3B5C] mt-0.5">1.</span>
                  <span>Upload any image for color inspiration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A3B5C] mt-0.5">2.</span>
                  <span>AI extracts dominant colors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A3B5C] mt-0.5">3.</span>
                  <span>Colors are matched to yarn library</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A3B5C] mt-0.5">4.</span>
                  <span>Save as palette for your projects</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content Area - Results */}
          <div className="space-y-6">
            {!uploadedImage ? (
              /* Empty State */
              <div className="bg-white rounded-lg border border-[#d1d5dc] flex items-center justify-center" style={{ minHeight: '600px' }}>
                <div className="flex flex-col items-center justify-center text-center max-w-md px-6">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)' }}>
                    <ImageIcon className="w-12 h-12 text-white" />
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2 text-[#353535]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Upload Your Inspiration
                  </h2>
                  <p className="text-base text-[#6c7280] leading-[22px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Select an image from the controls on the left to get started. We'll analyze it and find matching yarns from your library.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Header with Save Button */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-[#353535] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Color Match Results
                    </h2>
                    <p className="text-sm text-[#6c7280]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {matchedYarns.length > 0 ? `Found ${matchedYarns.length} matching yarns` : 'Processing...'}
                    </p>
                  </div>
                  {matchedYarns.length > 0 && (
                    <button
                      onClick={saveAsPalette}
                      className="px-5 py-2.5 rounded-lg font-semibold text-white transition-all flex items-center gap-2 hover:opacity-90"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        backgroundColor: '#4A3B5C',
                        fontSize: '14px'
                      }}
                    >
                      <Save className="w-4 h-4" />
                      Save Palette
                    </button>
                  )}
                </div>

                {/* Image Preview */}
                <div className="bg-white rounded-lg p-6 border border-[#d1d5dc]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-semibold text-[#353535]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Uploaded Image
                    </h3>
                  </div>
                  <div className="relative w-full rounded-lg overflow-hidden border border-[#e3e4eb] bg-[#f9fafb]">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded inspiration" 
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: '400px' }}
                    />
                  </div>
                </div>

                {/* Processing State */}
                {isProcessing && (
                  <div className="bg-white rounded-lg p-16 border border-[#d1d5dc]">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-12 h-12 border-4 border-[#4A3B5C] border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-[#6c7280] text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Analyzing colors...
                      </p>
                    </div>
                  </div>
                )}

                {/* Extracted Colors */}
                {extractedColors.length > 0 && !isProcessing && (
                  <div className="bg-white rounded-lg p-6 border border-[#d1d5dc]">
                    <h3 className="text-base font-semibold mb-4 text-[#353535]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Extracted Colors
                    </h3>
                    <div className="flex gap-4 flex-wrap">
                      {extractedColors.map((color, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                          <div
                            className="w-24 h-24 rounded-lg border border-[#d1d5dc] shadow-sm"
                            style={{ backgroundColor: color.hex }}
                          ></div>
                          <span 
                            className="text-xs text-[#6c7280] tracking-wide" 
                            style={{ fontFamily: 'SF Mono, Monaco, monospace' }}
                          >
                            {color.hex.toUpperCase()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Matched Yarns */}
                {matchedYarns.length > 0 && !isProcessing && (
                  <div>
                    <div className="mb-4">
                      <h3 className="text-base font-semibold text-[#353535]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Matched Yarns from Your Library
                      </h3>
                      <p className="text-sm text-[#6c7280] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Closest matches from {allYarns.length} available yarns
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {matchedYarns.map((match, index) => (
                        <div key={index} className="relative">
                          <YarnColorCard 
                            yarn={match.yarn} 
                            isSelected={false} 
                            onToggle={() => {}} 
                          />
                          {/* Match quality indicator */}
                          <div 
                            className="absolute top-2 right-2 px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              backgroundColor: 'rgba(255, 255, 255, 0.98)',
                              border: '1px solid #d1d5dc'
                            }}
                          >
                            {match.distance < 30 ? "🎯 Exact" : match.distance < 60 ? "✨ Close" : "📍 Similar"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}