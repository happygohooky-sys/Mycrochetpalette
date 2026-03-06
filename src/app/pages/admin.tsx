import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { ArrowLeft, Save, Download, ExternalLink, Database, PackageOpen } from "lucide-react";
import { toast } from "sonner";
import { getSheetConfig, saveSheetConfig, fetchYarnsFromSheet } from "../services/google-sheets";
import { Alert } from "../components/ui/alert";
import { useAdminMode } from "../hooks/use-admin-mode";
import { GlobalHeader } from "../components/global-header";

type DataSource = "default" | "google-sheets";

export function Admin() {
  const { isAdminMode } = useAdminMode();
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState<DataSource>("default");
  
  // Google Sheets state
  const [sheetId, setSheetId] = useState("");
  const [sheetApiKey, setSheetApiKey] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  const [yarnCount, setYarnCount] = useState<number | null>(null);

  useEffect(() => {
    // Redirect if not in admin mode
    if (!isAdminMode) {
      navigate("/");
      toast.error("Access denied");
      return;
    }

    // Load saved configs
    const sheetConfig = getSheetConfig();
    if (sheetConfig) {
      setSheetId(sheetConfig.sheetId);
      setSheetApiKey(sheetConfig.apiKey);
    }

    // Check current data source
    const savedSource = localStorage.getItem("happygohooky_data_source");
    if (savedSource === "google-sheets") {
      setDataSource("google-sheets");
    }
  }, [isAdminMode, navigate]);

  const handleSaveSheetConfig = async () => {
    if (!sheetId.trim() || !sheetApiKey.trim()) {
      toast.error("Please enter both Sheet ID and API Key");
      return;
    }

    setIsLoading(true);
    try {
      const yarns = await fetchYarnsFromSheet(sheetId.trim(), sheetApiKey.trim());
      saveSheetConfig({ sheetId: sheetId.trim(), apiKey: sheetApiKey.trim() });
      
      // Save preference
      localStorage.setItem("happygohooky_data_source", "google-sheets");
      
      setYarnCount(yarns.length);
      toast.success(`Connected! Found ${yarns.length} yarn colors`);
    } catch (error) {
      toast.error("Failed to connect to Google Sheet. Please check your credentials.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadTemplate = () => {
    const template = `Name,Color Code,Hex Color,Brand,Weight,Image URL
White,1001,#F5F5F5,Stylecraft Special DK,DK,
Cream,1002,#FFF8DC,Stylecraft Special DK,DK,
Black,1003,#2B2B2B,Stylecraft Special DK,DK,`;

    const blob = new Blob([template], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'yarn-template.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("Template downloaded");
  };

  const handleUseDefaultDatabase = () => {
    localStorage.setItem("happygohooky_data_source", "default");
    toast.success("Using default yarn database with 60+ Stylecraft Special DK colors");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#edecf2' }}>
      <GlobalHeader />
      <main className="max-w-[1440px] mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#353535] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Admin Settings</h1>
          <p className="text-base leading-[22px] text-black" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Configure your yarn database and data sources
          </p>
        </div>
        <div className="space-y-6">
          {/* Default Database Card */}
          <Card className="p-6 border-2 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="font-semibold text-lg mb-4">Choose Your Data Source</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setDataSource("default")}
                className={`p-4 border-2 rounded-lg transition-all text-left ${
                  dataSource === "default"
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <PackageOpen className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Default Yarn Database</h3>
                </div>
                <p className="text-sm text-slate-600 mb-2">
                  Access 140+ authentic yarn colors from popular brands. Browse by brand and weight with built-in filtering.
                </p>
                <p className="text-xs text-green-600 font-medium">✓ Built-in • Works offline</p>
              </button>
              
              <button
                onClick={() => setDataSource("google-sheets")}
                className={`p-4 border-2 rounded-lg transition-all text-left ${
                  dataSource === "google-sheets"
                    ? "border-blue-500 bg-blue-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Database className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Google Sheets</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Manage your own custom yarn catalog using a Google Spreadsheet
                </p>
              </button>
            </div>
          </Card>

          {/* Default Yarn Database Configuration */}
          {dataSource === "default" && (
            <>
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="font-semibold text-lg">Default Yarn Database</h2>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">BUILT-IN</span>
                </div>
                
                <p className="text-sm text-slate-600 mb-6">
                  Access 140+ authentic yarn colors from popular brands. Browse by brand and weight with built-in filtering.
                </p>

                <Button 
                  onClick={handleUseDefaultDatabase}
                  className="w-full"
                >
                  <PackageOpen className="w-4 h-4 mr-2" />
                  Use Default Database
                </Button>
              </Card>

              <Card className="p-6 bg-blue-50 border-blue-200">
                <h3 className="font-semibold mb-2 text-blue-900">What's Included</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• 140+ yarn colors from 5 popular brands</li>
                  <li>• Stylecraft Special DK (40+ colors)</li>
                  <li>• Lion Brand Wool-Ease (20+ colors)</li>
                  <li>• Red Heart Super Saver (23+ colors)</li>
                  <li>• Bernat Softee Baby (10+ colors)</li>
                  <li>• Caron Simply Soft (15+ colors)</li>
                  <li>• Filter by brand and yarn weight</li>
                  <li>• Accurate hex color values</li>
                  <li>• Works offline - no API required</li>
                </ul>
              </Card>
            </>
          )}

          {/* Google Sheets Configuration */}
          {dataSource === "google-sheets" && (
            <>
              <Card className="p-6">
                <h2 className="font-semibold text-lg mb-4">How to Connect Google Sheets</h2>
                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="font-semibold">1.</span>
                    <div>
                      <p>Create a Google Sheet with the following columns (in this exact order):</p>
                      <code className="block mt-2 p-2 bg-slate-100 rounded text-xs">
                        Name | Color Code | Hex Color | Brand | Weight | Image URL
                      </code>
                      <Button onClick={downloadTemplate} variant="link" size="sm" className="mt-2 px-0">
                        <Download className="w-4 h-4 mr-2" />
                        Download CSV Template
                      </Button>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold">2.</span>
                    <div>
                      <p>Make your Google Sheet publicly viewable:</p>
                      <p className="text-xs text-slate-500 mt-1">Share → Anyone with the link → Viewer</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold">3.</span>
                    <div>
                      <p>Get a Google Sheets API key:</p>
                      <a 
                        href="https://console.cloud.google.com/apis/credentials"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xs flex items-center gap-1 mt-1"
                      >
                        Google Cloud Console <ExternalLink className="w-3 h-3" />
                      </a>
                      <p className="text-xs text-slate-500 mt-1">Create an API key and enable Google Sheets API</p>
                    </div>
                  </li>
                </ol>
              </Card>

              <Card className="p-6">
                <h2 className="font-semibold text-lg mb-4">Google Sheet Configuration</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="sheetId">Google Sheet ID</Label>
                    <Input
                      id="sheetId"
                      type="text"
                      placeholder="1a2b3c4d5e6f7g8h9i0j..."
                      value={sheetId}
                      onChange={(e) => setSheetId(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sheetApiKey">Google Sheets API Key</Label>
                    <Input
                      id="sheetApiKey"
                      type="password"
                      placeholder="AIza..."
                      value={sheetApiKey}
                      onChange={(e) => setSheetApiKey(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button 
                    onClick={handleSaveSheetConfig} 
                    disabled={isLoading}
                    className="w-full"
                  >
                    {isLoading ? (
                      "Testing Connection..."
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Save & Test Connection
                      </>
                    )}
                  </Button>
                  
                  {yarnCount !== null && dataSource === "google-sheets" && (
                    <Alert className="bg-green-50 border-green-200">
                      <p className="text-sm text-green-800">
                        ✓ Successfully connected! Found {yarnCount} yarn colors in your sheet.
                      </p>
                    </Alert>
                  )}
                </div>
              </Card>
            </>
          )}
        </div>
      </main>
    </div>
  );
}