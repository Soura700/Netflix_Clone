/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#000000', // Main dark background color
          // Add more custom dark colors as needed
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};