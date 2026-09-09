/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./mainjava.js"],
  theme: {
    extend: {
      colors: {
        gold: { 300: '#35c4bd', 400: '#13a8a1', 500: '#0e938d', 600: '#0b7974' },
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
