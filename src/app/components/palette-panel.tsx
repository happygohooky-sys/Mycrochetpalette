import { YarnColor } from "../data/yarns";
import { X, Save, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { YarnBall } from "./yarn-ball";

interface PalettePanelProps {
  selectedYarns: YarnColor[];
  onRemove: (yarn: YarnColor) => void;
  onSave: (name: string) => void;
  onClear: () => void;
}

export function PalettePanel({ selectedYarns, onRemove, onSave, onClear }: PalettePanelProps) {
  const [paletteName, setPaletteName] = useState("");
  const [showSaveInput, setShowSaveInput] = useState(false);

  const handleSave = () => {
    if (paletteName.trim()) {
      onSave(paletteName.trim());
      setPaletteName("");
      setShowSaveInput(false);
    }
  };

  const exportPalette = () => {
    const paletteData = {
      name: paletteName || `Palette ${new Date().toLocaleDateString()}`,
      colors: selectedYarns.map(yarn => ({
        name: yarn.name,
        colorCode: yarn.colorCode,
        hex: yarn.hex,
      })),
    };
    
    const blob = new Blob([JSON.stringify(paletteData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${paletteData.name.replace(/\s+/g, '-').toLowerCase()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 flex flex-col h-full">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Your Palette</h2>
        <p className="text-sm text-gray-500">
          {selectedYarns.length} {selectedYarns.length === 1 ? 'color' : 'colors'} selected
        </p>
      </div>

      <div className="flex-1 overflow-y-auto mb-6">
        {selectedYarns.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center px-4">
            <p className="text-gray-400">
              Click on yarn colors to add them to your palette
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {selectedYarns.map((yarn) => (
              <div
                key={yarn.id}
                className="relative flex h-[56px] transition-all hover:scale-[1.02] group rounded-lg"
                style={{ boxShadow: '0px 1px 4px 0px rgba(12,12,13,0.05)' }}
              >
                {/* Rotated color block - smaller version */}
                <div className="flex h-[56px] items-center justify-center w-[64px]">
                  <div className="-rotate-90 flex-none">
                    <div 
                      className="h-[64px] rounded-tl-[8px] rounded-tr-[8px] w-[56px] relative overflow-hidden" 
                      style={{ backgroundColor: yarn.hex }}
                    />
                  </div>
                </div>
                
                {/* Info section */}
                <div className="relative bg-white flex flex-col gap-[2px] h-[56px] items-start justify-center flex-1 px-[10px] rounded-br-[8px] rounded-tr-[8px]">
                  <div 
                    aria-hidden="true" 
                    className="absolute border-[#f1f3fe] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" 
                  />
                  <p 
                    className="font-semibold leading-[18px] relative shrink-0 text-[#0c0a1c] text-[14px] w-full whitespace-nowrap overflow-hidden text-ellipsis pr-8" 
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                  >
                    {yarn.name}
                  </p>
                  <p 
                    className="font-medium leading-[12px] not-italic opacity-85 relative shrink-0 text-[#5a5866] text-[11px] tracking-[0.1px] w-full whitespace-nowrap overflow-hidden text-ellipsis" 
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {yarn.colorCode}
                  </p>
                </div>
                
                {/* Remove button */}
                <button
                  onClick={() => onRemove(yarn)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200 rounded-lg"
                  aria-label={`Remove ${yarn.name}`}
                >
                  <X className="w-3.5 h-3.5 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedYarns.length > 0 && (
        <div className="space-y-3 border-t border-gray-200 pt-6">
          {showSaveInput ? (
            <div className="space-y-3">
              <Input
                type="text"
                placeholder="Palette name..."
                value={paletteName}
                onChange={(e) => setPaletteName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                className="rounded-xl border-gray-300"
                autoFocus
              />
              <div className="flex gap-2">
                <Button onClick={handleSave} className="flex-1 rounded-lg bg-primary hover:bg-primary/90" size="sm">
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button 
                  onClick={() => setShowSaveInput(false)} 
                  variant="outline" 
                  size="sm"
                  className="rounded-lg"
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <>
              <Button onClick={() => setShowSaveInput(true)} className="w-full rounded-lg bg-primary hover:bg-primary/90">
                <Save className="w-4 h-4 mr-2" />
                Save Palette
              </Button>
              <Button onClick={exportPalette} variant="outline" className="w-full rounded-lg">
                <Download className="w-4 h-4 mr-2" />
                Export JSON
              </Button>
              <Button onClick={onClear} variant="outline" className="w-full rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50">
                Clear All
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
}