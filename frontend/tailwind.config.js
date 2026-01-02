/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
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
