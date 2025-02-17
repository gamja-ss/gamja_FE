import { UserInfoData } from "../config/type";
import { create } from "zustand";

interface AuthStore {
  status: boolean;
  setStatus: (value: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  status: false,
  setStatus: (value) => set({ status: value }),
}));

interface UserStore {
  user: UserInfoData;
  initUser: (user: UserInfoData) => void;
}

const initialUserState: UserInfoData = {
  user_id: 0,
  nickname: null,
  bio: null,
  followers_count: 0,
  following_count: 0,
  user_tier: null,
  user_exp: 0,
  total_coins: 0,
};

export const useUserStore = create<UserStore>((set) => ({
  user: initialUserState,
  initUser: (form: UserInfoData) => set({ user: form }),
}));
