/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
      fontWeight: {
        'roboto-mono': '450',
      },
      colors: {
        'color-green': '#50FA7B',
        'color-blue': '#788eff',
        'color-dark-blue': '#6272A4',
        'color-pink': '#FF79C6',
        'color-red': '#FF5555',
        'color-white': '#F8F8F2',
        'color-charcoal': '#44475A',
        'color-yellow': '#F1FA8C',
        'color-purple': '#BD93F9',
        'color-orange': '#FFB86C',
        'border-grey': '#26232b',
        'background-black': '#0e0d11',
      },
    },
  },
  plugins: [],
}