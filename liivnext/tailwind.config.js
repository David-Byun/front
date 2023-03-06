// tailwind.config.js

const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Change with you want it
        "litepie-primary": colors.lightBlue, // color system for light mode
        "litepie-secondary": colors.coolGray, // color system for dark mode
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
      textOpacity: ["disabled"],
      textColor: ["disabled"],
    },
  },
  plugins: [],
};
