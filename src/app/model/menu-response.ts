import { BeachCategory } from "./beach-category";

export interface MenuResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  category: BeachCategory;
}