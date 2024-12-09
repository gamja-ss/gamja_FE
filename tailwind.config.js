/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#f6f6f6",
          200: "#e6e6e6",
          300: "#c8c8c8",
          400: "#989898",
          500: "#656565",
          600: "#4a4a4a",
          700: "#383838",
          800: "#2c2c2c",
          900: "#202020",
        },
        blur: "#989898",
      },
    },
    fontFamily: {
      default: ["pretendard Variable"],
    },
  },
  plugins: [],
};
