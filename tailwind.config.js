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
        'potluck-purple': '#9e78f7',
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
