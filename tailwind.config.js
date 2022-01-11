const colors = require('tailwindcss/colors');

const customColors = {
  dark: '#282423',
  'dark-red': '#B02000',
  'light-red': '#F18B74',
  'light-grey': '#DDDDDD',
  ...colors,
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
