/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xm: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {},
    colors: {
      CustomeColor1: "#ff014f",
      CustomeColor2: "#00d7bb",
      CustomeArc: "#191d21",
      CustomeBgDark1: "#212428",
      CustomeBgDark2: "linear-gradient(145deg, #1e2024,#23272b)",
    },
    fontFamily: {
      Education: ["ui-sans-serif"],
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "blue",
          "base-100": "#212428",
          "base-content": "#c4cfde",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
  //Note: "base-content"="--bc"
  //themes: [
  //   {
  //     mytheme: {
  //       primary: "#0ea5e9",

  //       secondary: "#D926A9",

  //       accent: "#1FB2A6",

  //       neutral: "#191D24",

  //       "base-100": "#212428",

  //       info: "#3ABFF8",

  //       success: "#36D399",

  //       warning: "#FBBD23",

  //       error: "#F87272",
  //     },
  //   },
  //   "dark",
  //   "cupcake",
  // ],
};
