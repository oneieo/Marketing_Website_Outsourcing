export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export interface AIStrategyResult {
  slogan: string;
  keyStrategies: string[];
  targetAudience: string;
}
