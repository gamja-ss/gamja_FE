import axios from "axios";

export const axiosInstance = axios.create({
  //? LOCAL
  baseURL: "/api",
  //? SERVER
  // baseURL: "https://api.gamjass.xyz/",
  // headers: {
  //   "Content-Type": "application/json",
  //   "Cache-Control": "no-cache",
  // },
  // withCredentials: true,
});
