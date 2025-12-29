/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'og-green': '#006837',
        'og-light-green': '#8DC63F',
        'og-gold': '#FBB03B',
        'og-dark': '#1a1a1a',
        'og-gray': '#333333',
      },
    },
  },
  plugins: [],
}
