import { Link } from "react-router";
import { usePalettes } from "../hooks/use-palettes";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Trash2, Calendar, MoreVertical, Pencil } from "lucide-react";
import { toast } from "sonner";
import { YarnBall } from "../components/yarn-ball";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { GlobalHeader } from "../components/global-header";

export function MyPalettes() {
  const { palettes, deletePalette, updatePalette } = usePalettes();
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      deletePalette(id);
      toast.success("Palette deleted");
      setOpenMenuId(null);
    }
  };

  const handleRename = (id: string, currentName: string) => {
    setEditingId(id);
    setEditingName(currentName);
    setOpenMenuId(null);
  };

  const saveRename = (id: string) => {
    if (editingName.trim()) {
      updatePalette(id, { name: editingName.trim() });
      toast.success("Palette renamed");
      setEditingId(null);
      setEditingName("");
    }
  };

  const cancelRename = () => {
    setEditingId(null);
    setEditingName("");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#edecf2' }}>
      <GlobalHeader />
      
      <main className="max-w-[1440px] mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#353535] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>My Saved Palettes</h1>
          <p className="text-base leading-[22px] text-black" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            {palettes.length} {palettes.length === 1 ? 'palette' : 'palettes'} saved
          </p>
        </div>

        {palettes.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl p-12 inline-block shadow-sm">
              <p className="text-gray-400 mb-6 text-lg">You haven't saved any palettes yet</p>
              <Link to="/">
                <Button className="rounded-lg bg-primary hover:bg-primary/90">
                  Create Your First Palette
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {palettes.map((palette) => (
              <div key={palette.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                {/* Color Strip */}
                <div className="h-32 flex">
                  {palette.yarns.map((yarn) => (
                    <div
                      key={yarn.id}
                      className="flex-1 hover:flex-[1.5] transition-all cursor-pointer group relative"
                      style={{ backgroundColor: yarn.hex }}
                      title={yarn.name}
                    >
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    {editingId === palette.id ? (
                      <div className="flex-1">
                        <Input
                          value={editingName}
                          onChange={(e) => setEditingName(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') saveRename(palette.id);
                            if (e.key === 'Escape') cancelRename();
                          }}
                          className="rounded-lg border-gray-300 focus:border-primary"
                          autoFocus
                        />
                        <div className="flex gap-2 mt-2">
                          <Button
                            onClick={() => saveRename(palette.id)}
                            size="sm"
                            className="rounded-lg bg-primary hover:bg-primary/90"
                          >
                            Save
                          </Button>
                          <Button
                            onClick={cancelRename}
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
                        <h3 className="font-bold text-lg text-gray-900 flex-1">{palette.name}</h3>
                        <div className="relative">
                          <button
                            onClick={() => setOpenMenuId(openMenuId === palette.id ? null : palette.id)}
                            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="More options"
                          >
                            <MoreVertical className="w-5 h-5 text-gray-600" />
                          </button>
                          
                          {openMenuId === palette.id && (
                            <>
                              <div 
                                className="fixed inset-0 z-10" 
                                onClick={() => setOpenMenuId(null)}
                              />
                              <div className="absolute right-0 top-8 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden z-20 min-w-[160px]">
                                <button
                                  onClick={() => handleRename(palette.id, palette.name)}
                                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2 text-gray-700"
                                >
                                  <Pencil className="w-4 h-4" />
                                  Rename
                                </button>
                                <button
                                  onClick={() => handleDelete(palette.id, palette.name)}
                                  className="w-full px-4 py-2 text-left text-sm hover:bg-red-50 flex items-center gap-2 text-red-600"
                                >
                                  <Trash2 className="w-4 h-4" />
                                  Delete
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {palette.yarns.length} {palette.yarns.length === 1 ? 'color' : 'colors'}
                  </p>

                  <div className="space-y-3">
                    <details className="text-sm">
                      <summary className="cursor-pointer text-gray-600 hover:text-gray-900 font-medium">
                        View all colors
                      </summary>
                      <div className="mt-3 space-y-2 max-h-48 overflow-y-auto">
                        {palette.yarns.map((yarn) => (
                          <div key={yarn.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                            <div 
                              className="w-8 h-8 rounded-md flex-shrink-0 shadow-sm"
                              style={{ backgroundColor: yarn.hex }}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-gray-900 truncate">{yarn.name}</p>
                              <p className="text-xs text-gray-500">{yarn.hex.toUpperCase()}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}