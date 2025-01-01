import { axiosInstance } from "./axios";

export const userInfo = () => {
  return axiosInstance.get("/info/profile/", { withCredentials: true });
};
