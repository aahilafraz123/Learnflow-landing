/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        card: '#171717',
        gradientStart: '#22c55e',
        gradientEnd: '#5eead4',
      },
    },
  },
  plugins: [],
}