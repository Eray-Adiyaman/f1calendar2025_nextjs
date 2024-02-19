/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        BabyPowder:"#FDFFFC",
        LapisLazuli:"#235789",
        FireEngineRed:"#C1292E",
        SchoolBusYellow:"#F1D302",
        RaisinBlack:"#161925",
        Tomato:"#FF6542",
        Plum:"#88498F",
        PayneGray:"#5E6973",
        Platinum:"#7C9AA0"
      }
    },
  },
  plugins: [],
};
