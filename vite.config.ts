import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  //?LOCAL
  // server: {
  //     proxy: {
  //         "/api": {
  //             target: "https://api.gamjass.xyz",
  //             changeOrigin: true,
  //             secure: false,
  //             rewrite: (path) => path.replace(/^\/api/, "/api"),
  //         },
  //     },
  // },
});
