import { useState, useEffect } from "react";
import { YarnColor } from "../data/yarns";

export interface SavedPalette {
  id: string;
  name: string;
  yarns: YarnColor[];
  createdAt: string;
}

const STORAGE_KEY = "happygohooky_palettes";

export function usePalettes() {
  const [palettes, setPalettes] = useState<SavedPalette[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setPalettes(JSON.parse(stored));
      } catch (error) {
        console.error("Failed to parse stored palettes:", error);
      }
    }
  }, []);

  const savePalette = (name: string, yarns: YarnColor[]) => {
    const newPalette: SavedPalette = {
      id: crypto.randomUUID(),
      name,
      yarns,
      createdAt: new Date().toISOString(),
    };

    const updated = [...palettes, newPalette];
    setPalettes(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    
    return newPalette;
  };

  const deletePalette = (id: string) => {
    const updated = palettes.filter(p => p.id !== id);
    setPalettes(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const updatePalette = (id: string, updates: Partial<SavedPalette>) => {
    const updated = palettes.map(p => 
      p.id === id ? { ...p, ...updates } : p
    );
    setPalettes(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return {
    palettes,
    savePalette,
    deletePalette,
    updatePalette,
  };
}
