/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      motion_ime: ["ADLaM Display", "cursive"],
      secondary: ["Poppins", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#363636",
        grey: "#484848",
        accent: "#EEFFFF",

        motion_ime: "rgba(0,200,250,1)",
        motion_ime_purple: "#865DFF",
      },
    },
  },
  plugins: [],
};
