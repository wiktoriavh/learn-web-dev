const customColors = {
  'br-dark': '#282423',
  'br-dark-red': '#B02000',
  'br-light-red': '#F18B74',
  'br-light-grey': '#DDDDDD',

  "red-brown-50": "#FFE9E3",
  "red-brown-100": "#FADBD3",
  "red-brown-200": "#F7B9AC",
  "red-brown-300": "#F18B74",
  "red-brown-400": "#E7674A",
  "red-brown-500": "#DB4724",
  "red-brown-600": "#CC3816",
  "red-brown-700": "#B02000",
  "red-brown-800": "#841800",
  "red-brown-900": "#581000",

  "black-50": "#F1F1F1",
  "black-100": "#DDDDDD",
  "black-200": "#C0C0BF",
  "black-300": "#A5A3A3",
  "black-400": "#898787",
  "black-500": "#6F6D6C",
  "black-600": "#565352", 
  "black-700": "#3E3B3A",
  "black-800": "#282423",
  "black-900": "#171514",
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: customColors,
    },
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
    },
  },
  plugins: [],
  darkMode: 'class',
};
