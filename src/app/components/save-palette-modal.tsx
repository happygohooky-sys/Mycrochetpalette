import { useState } from "react";
import { YarnColor } from "../data/yarns";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface SavePaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
  selectedYarns: YarnColor[];
  initialName?: string;
  isEditing?: boolean;
}

export function SavePaletteModal({
  isOpen,
  onClose,
  onSave,
  selectedYarns,
  initialName = "",
  isEditing = false,
}: SavePaletteModalProps) {
  const [paletteName, setPaletteName] = useState(initialName);

  if (!isOpen) return null;

  const handleSave = () => {
    if (paletteName.trim()) {
      onSave(paletteName.trim());
      setPaletteName("");
      onClose();
    }
  };

  const handleCancel = () => {
    setPaletteName(initialName);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={handleCancel}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[500px] mx-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#e3e4eb]">
            <h2
              className="text-xl font-bold text-[#353535]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {isEditing ? "Edit Palette" : "Save Palette"}
            </h2>
            <button
              onClick={handleCancel}
              className="text-[#6c7280] hover:text-[#353535] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Palette Name Input */}
            <div>
              <label
                htmlFor="palette-name"
                className="block text-sm font-semibold text-[#353535] mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Palette Name
              </label>
              <Input
                id="palette-name"
                type="text"
                placeholder="Enter palette name..."
                value={paletteName}
                onChange={(e) => setPaletteName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSave();
                  }
                }}
                className="w-full h-[44px] text-base border-[#d1d5dc] rounded-lg bg-white focus:border-primary placeholder:text-[#6c7280]"
                style={{ fontFamily: "Inter, sans-serif" }}
                autoFocus
              />
            </div>

            {/* Color Preview */}
            <div>
              <label
                className="block text-sm font-semibold text-[#353535] mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Colours ({selectedYarns.length})
              </label>
              <div className="border border-[#e3e4eb] rounded-lg overflow-hidden">
                <div className="h-[60px] flex">
                  {selectedYarns.map((yarn) => (
                    <div
                      key={yarn.id}
                      className="flex-1 min-w-0 transition-all hover:scale-105"
                      style={{ backgroundColor: yarn.hex }}
                      title={yarn.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Color Names List */}
            <div className="max-h-[200px] overflow-y-auto border border-[#e3e4eb] rounded-lg p-4">
              <div className="space-y-2">
                {selectedYarns.map((yarn, index) => (
                  <div
                    key={yarn.id}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="w-6 h-6 rounded border border-[#e3e4eb] flex-shrink-0"
                      style={{ backgroundColor: yarn.hex }}
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-medium text-[#353535] truncate"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {index + 1}. {yarn.name}
                      </p>
                      <p
                        className="text-xs text-[#6c7280] truncate"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {yarn.brand} • {yarn.colorCode}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e3e4eb] bg-[#f9fafb]">
            <Button
              onClick={handleCancel}
              variant="outline"
              className="px-5 py-2.5 rounded-lg font-semibold text-[#353535] border-[#d1d5dc] hover:bg-[#f3f4f6] transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!paletteName.trim()}
              className="px-5 py-2.5 rounded-lg font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
              style={{
                fontFamily: "Inter, sans-serif",
                backgroundColor: "#4A3B5C",
                fontSize: "14px",
              }}
            >
              {isEditing ? "Save Edit" : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}