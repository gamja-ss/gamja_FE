import { axiosInstance } from "./axios";

export const userLogin = async (code: string) => {
  return axiosInstance.post("/auth/login/callback/", { code });
};

export const userTokenVerify = () => {
  return axiosInstance.post("/auth/token/verify/", {});
};

export const userTokenRefresh = () => {
  return axiosInstance.post("/auth/token/refresh/", {});
};

export const userLogout = async () => {
  return axiosInstance.post("/auth/logout/", {});
};
