/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'potluck-bg': '#1a102c',
        'potluck-purple': 'rgb(159 84 233 / <alpha-value>)', // Converted #9F54E9 to RGB for opacity support
        'potluck-pink': '#f778c8',
        'potluck-light': '#f0e8ff',
        'potluck-dark': '#cbbde8',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
