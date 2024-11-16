import axios from "axios";

export const axiosInstance = axios.create({
  //? LOCAL
  baseURL: "/api",
  //? SERVER
  //   baseURL: "https://api.ganjass.xyz/api",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Cache-Control": "no-cache",
  //   },
  //   withCredentials: true,
});