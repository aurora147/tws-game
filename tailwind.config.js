/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'k-dark': '#1a1a1a',
        'k-purple': '#9b59b6',
        'k-pink': '#ff6b9d',
      },
      fontFamily: {
        'korean': ['"Noto Sans KR"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
