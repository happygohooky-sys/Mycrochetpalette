import { YarnColor } from "../data/yarns";

interface RapidAPIConfig {
  apiKey: string;
}

const RAPIDAPI_CONFIG_KEY = "happygohooky_rapidapi_config";

export function getRapidAPIConfig(): RapidAPIConfig | null {
  const stored = localStorage.getItem(RAPIDAPI_CONFIG_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
}

export function saveRapidAPIConfig(config: RapidAPIConfig) {
  localStorage.setItem(RAPIDAPI_CONFIG_KEY, JSON.stringify(config));
}

interface RapidAPIYarn {
  colorway_name: string;
  yarn_company_name: string;
  yarn_weight_name: string;
  hex?: string;
  colorway_id?: string | number;
  affiliate_link?: string;
  image_url?: string;
}

export async function fetchYarnsFromRapidAPI(
  apiKey: string,
  brand?: string,
  weight?: string
): Promise<YarnColor[]> {
  const url = "https://yarn-colorways.p.rapidapi.com/colorways";
  
  // Build query parameters
  const params = new URLSearchParams();
  if (brand) params.append("yarn_company_name", brand);
  if (weight) params.append("yarn_weight_name", weight);

  const fullUrl = params.toString() ? `${url}?${params.toString()}` : url;

  try {
    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "yarn-colorways.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data: RapidAPIYarn[] = await response.json();

    return data.map((yarn, index) => ({
      id: yarn.colorway_id?.toString() || `yarn-${index}`,
      name: yarn.colorway_name || "Unnamed",
      colorCode: yarn.colorway_id?.toString() || "",
      hex: yarn.hex || "#CCCCCC",
      brand: yarn.yarn_company_name || "Unknown Brand",
      weight: yarn.yarn_weight_name || "DK",
      imageUrl: yarn.image_url,
    }));
  } catch (error) {
    console.error("Error fetching from RapidAPI:", error);
    throw error;
  }
}

export async function searchYarnBrands(apiKey: string): Promise<string[]> {
  const url = "https://yarn-colorways.p.rapidapi.com/yarn-companies";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "yarn-colorways.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.map((item: any) => item.yarn_company_name || item.name || item);
  } catch (error) {
    console.error("Error fetching brands:", error);
    return [];
  }
}

export async function searchYarnWeights(apiKey: string): Promise<string[]> {
  const url = "https://yarn-colorways.p.rapidapi.com/yarn-weights";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "yarn-colorways.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.map((item: any) => item.yarn_weight_name || item.name || item);
  } catch (error) {
    console.error("Error fetching weights:", error);
    return [];
  }
}
