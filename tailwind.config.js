
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      textColor1:"#ff014f",
      progressBar:"#ff014f",
      darkBackground: "#212428",
      svgBackgroundColor: "#00d7bb",
      svgFillColor: "rgb(7 89 133)",
    },
    fontFamily: {
      'Education': ['ui-sans-serif'],
    },
  },
  plugins: [require("daisyui")],

  
}