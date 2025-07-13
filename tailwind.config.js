/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-black': '#141414',
        'netflix-dark': '#000000',
        'netflix-gray': '#808080',
        'netflix-light-gray': '#E5E5E5',
      },
      fontFamily: {
        'netflix': ['Netflix Sans', 'Helvetica Neue', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 