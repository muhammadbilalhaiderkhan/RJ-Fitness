/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // sab sahi path
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        teko: ["Teko", "sans-serif"],
      },
    },
  },
  plugins: [],
};
