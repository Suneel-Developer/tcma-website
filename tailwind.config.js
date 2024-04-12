/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "#003444",
        secondary: "#A96D31",
        brown: "#918672",
        gray: "#C2C3BB",
        black_800: "#484D55",
        black_700: "#08224B",
        gray_green: "#C2C3BB",
        green_orange: "#918672",
        orange_brown: "#A96D31",
      },
      boxShadow: {
        shadow1: "0px 0px 8px 0px #2C2828",
      },

      screens: {
        lgx: "1312px",
        'xlg': "1110px",
        xxl: "968px",
        xsm: "468px",
        xxs: "386px",
      },
    },
  },
  plugins: [],
};
