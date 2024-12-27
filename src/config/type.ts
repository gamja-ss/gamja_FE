export interface InventoryItem {
  category: string;
  id: number;
  img: string;
  name: string;
  coin: number;
  date_of_purchase: Date | null;
}

export interface InventoryProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}
