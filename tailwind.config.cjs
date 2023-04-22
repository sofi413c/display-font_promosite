/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface_beige: "#EAE9DF",
        text_brown: "#67564C",
        surface_black: "#121212",
        text_white: "#FFFFFF",
        text_red: "#E30613",
        surface_flatwhite: "#F8F7F3",
      },
      fontFamily: {
        Jockey: ["Jockey One", "sans-serif"],
        Lateef: ["Lateef", "serif"],
      },
      fontSize: {
        sm:"25px",
        md: "50px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
