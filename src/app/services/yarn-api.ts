import { YarnColor } from "../data/yarns";

const API_BASE_URL = "https://temperature-blanket.com/api/yarn-colorways";

interface YarnColorway {
  id: number;
  colorway_name: string;
  hex: string;
  yarn_id: number;
  yarn_name: string;
  yarn_company_id: number;
  yarn_company_name: string;
  yarn_weight_id: number;
  yarn_weight_name: string;
  affiliate_link?: string;
  colorway_image_url?: string;
}

interface YarnCompany {
  id: number;
  name: string;
}

interface YarnWeight {
  id: number;
  name: string;
  ply?: string;
}

// Cache for all colorways
let cachedColorways: YarnColorway[] | null = null;

export async function fetchAllYarnColorways(): Promise<YarnColor[]> {
  try {
    if (cachedColorways) {
      return mapColorwaysToYarnColors(cachedColorways);
    }

    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data: YarnColorway[] = await response.json();
    cachedColorways = data;
    
    return mapColorwaysToYarnColors(data);
  } catch (error) {
    console.error("Error fetching yarn colorways:", error);
    throw error;
  }
}

function mapColorwaysToYarnColors(colorways: YarnColorway[]): YarnColor[] {
  return colorways.map((colorway) => ({
    id: colorway.id.toString(),
    name: colorway.colorway_name,
    colorCode: colorway.id.toString(),
    hex: colorway.hex || "#CCCCCC",
    brand: colorway.yarn_company_name,
    weight: colorway.yarn_weight_name,
    imageUrl: colorway.colorway_image_url,
  }));
}

export async function fetchYarnColorwaysByFilters(
  companyId?: number,
  weightId?: number
): Promise<YarnColor[]> {
  try {
    // Fetch all colorways first
    const allColorways = await fetchAllYarnColorways();
    
    // Filter client-side
    let filtered = allColorways;
    
    if (companyId) {
      // We need to filter by company name since we don't have the ID mapping
      const companies = await fetchYarnCompanies();
      const company = companies.find(c => c.id === companyId);
      if (company) {
        filtered = filtered.filter(y => y.brand === company.name);
      }
    }
    
    if (weightId) {
      // Filter by weight name
      const weights = await fetchYarnWeights();
      const weight = weights.find(w => w.id === weightId);
      if (weight) {
        filtered = filtered.filter(y => y.weight === weight.name);
      }
    }
    
    return filtered;
  } catch (error) {
    console.error("Error fetching yarn colorways:", error);
    throw error;
  }
}

export async function fetchYarnCompanies(): Promise<YarnCompany[]> {
  try {
    // Fetch all colorways and extract unique companies
    if (!cachedColorways) {
      await fetchAllYarnColorways();
    }
    
    if (!cachedColorways) {
      return [];
    }
    
    const companiesMap = new Map<string, YarnCompany>();
    cachedColorways.forEach((colorway) => {
      if (!companiesMap.has(colorway.yarn_company_name)) {
        companiesMap.set(colorway.yarn_company_name, {
          id: colorway.yarn_company_id,
          name: colorway.yarn_company_name,
        });
      }
    });
    
    return Array.from(companiesMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error("Error fetching yarn companies:", error);
    return [];
  }
}

export async function fetchYarnWeights(): Promise<YarnWeight[]> {
  try {
    // Fetch all colorways and extract unique weights
    if (!cachedColorways) {
      await fetchAllYarnColorways();
    }
    
    if (!cachedColorways) {
      return [];
    }
    
    const weightsMap = new Map<string, YarnWeight>();
    cachedColorways.forEach((colorway) => {
      if (!weightsMap.has(colorway.yarn_weight_name)) {
        weightsMap.set(colorway.yarn_weight_name, {
          id: colorway.yarn_weight_id,
          name: colorway.yarn_weight_name,
        });
      }
    });
    
    // Sort weights by common yarn weight order
    const weightOrder = ['Lace', 'Fingering', 'Sport', 'DK', 'Worsted', 'Aran', 'Bulky', 'Super Bulky', 'Jumbo'];
    
    return Array.from(weightsMap.values()).sort((a, b) => {
      const aIndex = weightOrder.indexOf(a.name);
      const bIndex = weightOrder.indexOf(b.name);
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return a.name.localeCompare(b.name);
    });
  } catch (error) {
    console.error("Error fetching yarn weights:", error);
    return [];
  }
}

export async function searchYarnColorways(searchTerm: string): Promise<YarnColor[]> {
  try {
    const allColorways = await fetchAllYarnColorways();
    const searchLower = searchTerm.toLowerCase();
    
    return allColorways.filter(yarn =>
      yarn.name.toLowerCase().includes(searchLower) ||
      yarn.brand.toLowerCase().includes(searchLower) ||
      yarn.colorCode.includes(searchTerm)
    );
  } catch (error) {
    console.error("Error searching yarn colorways:", error);
    throw error;
  }
}