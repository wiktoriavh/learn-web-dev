const braweriaColors = {
  dark: "#282423",
  "dark-red": "#B02000",
  "light-red": "#F18B74",
  "light-grey": "#DDDDDD",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: braweriaColors,
    },
  },
  plugins: [],
};
