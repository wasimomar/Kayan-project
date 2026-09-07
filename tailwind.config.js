/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./mainjava.js"],
  theme: {
    extend: {
      colors: {
        gold: { 300: '#34d399', 400: '#10b981', 500: '#059669', 600: '#047857' },
        dark: { 900: '#0a0a0f', 800: '#111118', 700: '#1a1a24', 600: '#22222f', 500: '#2d2d3d' }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
