/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#D9A84E",
        brandNavy: "#12325F",
        "background-light": "#F8FAFC",
        "background-dark": "#0F172A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
}