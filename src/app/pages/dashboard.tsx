import { Link } from "react-router";
import { usePalettes } from "../hooks/use-palettes";
import { Button } from "../components/ui/button";
import { Palette, ArrowRight, Grid3x3, Rows, Sparkles } from "lucide-react";
import { GlobalHeader } from "../components/global-header";

export function Dashboard() {
  const { palettes } = usePalettes();

  // Get the 3 most recent palettes
  const recentPalettes = palettes.slice(0, 3);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#edecf2' }}>
      <GlobalHeader />

      <main className="max-w-[1440px] mx-auto px-8 py-8">
        {/* Tools Grid */}
        <section className="mb-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-[#353535] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Create & Design</h2>
            <p className="text-base leading-[22px] text-black" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>Choose a tool to start creating your project</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* AI Color Matcher - NEW! */}
            <Link to="/ai-color-matcher">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all group cursor-pointer border border-border hover:border-primary relative overflow-hidden">
                {/* New badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  NEW ✨
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">AI Color Matcher</h3>
                <p className="text-sm text-muted-foreground mb-4">Upload any image and let AI extract colours and match them to yarns</p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Start creating
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Palette Builder */}
            <Link to="/palette-builder">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all group cursor-pointer border border-border hover:border-primary">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">Yarn Palette Generator</h3>
                <p className="text-sm text-muted-foreground mb-4">Browse and select from 157 yarn colours to create custom colour palettes</p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Start creating
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Stripe Blanket Generator */}
            <Link to="/stripe-generator">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all group cursor-pointer border border-border hover:border-primary">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Rows className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">Stripe Blanket Generator</h3>
                <p className="text-sm text-muted-foreground mb-4">Generate beautiful stripe patterns for your crochet blankets with custom color sequences</p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Start creating
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Granny Square Pattern */}
            <Link to="/granny-square-generator">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all group cursor-pointer border border-border hover:border-primary">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Grid3x3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">Granny Square Pattern</h3>
                <p className="text-sm text-muted-foreground mb-4">Design custom granny square blanket patterns with color planning tools</p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Start creating
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Recent Palettes */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold text-[#353535] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Recent Palettes</h2>
              <p className="text-base leading-[22px] text-black" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>Your most recently created palettes</p>
            </div>
            <Link to="/my-palettes">
              <Button variant="outline" size="sm" className="rounded-lg h-9">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {palettes.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center shadow-sm border border-border">
              <Palette className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-foreground mb-1">No palettes yet</h3>
              <p className="text-sm text-muted-foreground mb-6">Get started by creating your first colour palette</p>
              <Link to="/palette-builder">
                <Button className="rounded-lg bg-primary hover:bg-primary/90 h-10">
                  <Palette className="w-4 h-4 mr-2" />
                  Create Your First Palette
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentPalettes.map((palette) => (
                <div key={palette.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-border">
                  {/* Color Strip */}
                  <div className="h-24 flex">
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
                  <div className="p-4">
                    <h3 className="font-semibold text-sm text-foreground mb-1">{palette.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {palette.yarns.length} {palette.yarns.length === 1 ? 'colour' : 'colours'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {palettes.length > 3 && (
            <div className="mt-6 text-center">
              <Link to="/my-palettes">
                <Button variant="outline" className="rounded-lg h-10">
                  View {palettes.length - 3} more {palettes.length - 3 === 1 ? 'palette' : 'palettes'}
                </Button>
              </Link>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}