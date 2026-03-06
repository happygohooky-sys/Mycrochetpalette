import { Link } from "react-router";
import { Button } from "./ui/button";
import { useAdminMode } from "../hooks/use-admin-mode";
import { Settings, Palette, Rows, Grid3x3, ChevronDown, LayoutGrid, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function GlobalHeader() {
  const { isAdminMode, toggleAdminMode } = useAdminMode();
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const tools = [
    {
      name: "AI Color Matcher",
      description: "Extract colours from images",
      icon: Sparkles,
      href: "/ai-color-matcher",
      gradient: "from-purple-500 to-pink-500",
      badge: "NEW"
    },
    {
      name: "Yarn Palette Generator",
      description: "Create custom colour palettes",
      icon: Palette,
      href: "/palette-builder",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Stripe Blanket Generator",
      description: "Design stripe patterns",
      icon: Rows,
      href: "/stripe-generator",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Granny Square Pattern",
      description: "Plan granny square blankets",
      icon: Grid3x3,
      href: "/granny-square-generator",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <div 
              onClick={(e) => {
                if (e.detail === 3) { // Triple click
                  toggleAdminMode();
                }
              }}
              className="cursor-pointer"
            >
              <h1 className="text-xl font-semibold text-primary" style={{ fontFamily: 'Gabarito, sans-serif', fontWeight: 700 }}>
                my crochet palette
              </h1>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {/* Tools Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
              >
                <LayoutGrid className="w-4 h-4" />
                Tools
                <ChevronDown className={`w-4 h-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isToolsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-border py-2 overflow-hidden">
                  {tools.map((tool) => (
                    <Link
                      key={tool.href}
                      to={tool.href}
                      onClick={() => setIsToolsOpen(false)}
                    >
                      <div className="px-4 py-3 hover:bg-secondary transition-colors flex items-start gap-3 group relative">
                        {tool.badge && (
                          <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                            {tool.badge}
                          </div>
                        )}
                        <div className={`w-10 h-10 bg-gradient-to-br ${tool.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                          <tool.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-foreground">{tool.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{tool.description}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* My Palettes Link */}
            <Link to="/my-palettes">
              <button className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                My Palettes
              </button>
            </Link>

            {/* Admin Settings (if admin mode) */}
            {isAdminMode && (
              <Link to="/admin">
                <Button variant="outline" size="sm" className="rounded-lg h-9">
                  <Settings className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">Settings</span>
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}