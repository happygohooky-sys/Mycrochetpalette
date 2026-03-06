import { YarnColor } from "../data/yarns";

interface GoogleSheetConfig {
  sheetId: string;
  apiKey: string;
}

const CONFIG_KEY = "happygohooky_sheet_config";

export function getSheetConfig(): GoogleSheetConfig | null {
  const stored = localStorage.getItem(CONFIG_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
}

export function saveSheetConfig(config: GoogleSheetConfig) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
}

export async function fetchYarnsFromSheet(
  sheetId: string,
  apiKey: string
): Promise<YarnColor[]> {
  const range = "Sheet1!A2:G1000"; // Adjust range as needed
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet data: ${response.statusText}`);
    }

    const data = await response.json();
    const rows = data.values || [];

    return rows
      .filter((row: string[]) => row.length >= 5) // Must have at least name, code, hex, brand, weight
      .map((row: string[], index: number) => ({
        id: row[1] || `yarn-${index}`, // Use color code as ID
        name: row[0] || "Unnamed",
        colorCode: row[1] || "",
        hex: row[2] || "#CCCCCC",
        brand: row[3] || "Unknown Brand",
        weight: row[4] || "DK",
        imageUrl: row[5] || undefined, // Optional image URL
      }));
  } catch (error) {
    console.error("Error fetching from Google Sheets:", error);
    throw error;
  }
}
