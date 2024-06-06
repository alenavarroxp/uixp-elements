import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: {
          50: "#f2f3f4",
          100: "#e5e6e8",
          200: "#c9cbce",
          300: "#afb1b4",
          400: "#92969a",
          500: "#5F6368",
          600: "#4d5156",
          700: "#404346",
          800: "#2f3234",
          900: "#232628",
        },
        primary: colors.blue,
      },
    },
  },
  plugins: [],
};
