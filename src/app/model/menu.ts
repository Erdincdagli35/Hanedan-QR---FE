import { BeachCategory } from ".//beach-category";
import { MenuItemTranslation } from "../model/menu-item-translation.model";

export interface MenuItem {
    name: string;
    description: string;
    price: number;
    category: BeachCategory;
    translations: MenuItemTranslation[];
  }