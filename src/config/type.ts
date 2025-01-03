export interface InventoryItem {
  category: string;
  id: number;
  img: string;
  name: string;
  coin: number;
  date_of_purchase: string | null;
}

export interface InventoryProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export interface UserInfoData {
  user_id: number;
  nickname: string | null;
  bio?: string | null; //자기소개
  followers_count: number;
  following_count: number;
  user_tier: string | null;
  user_exp: number;
  total_coins: number;
}
