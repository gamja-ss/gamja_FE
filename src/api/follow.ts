import { axiosInstance } from "./axios";

export const searchUser = async (nickname: string) => {
  const response = await axiosInstance.get(`/follow/search/?nickname=${nickname}`);
  return response.data;
};
