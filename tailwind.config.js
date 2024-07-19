/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./public/index.html", // Incluye este archivo si usas HTML en el directorio public
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
        'color-pink': '#FF79C6',
        'color-white': '#F8F8F2',
        'color-charcoal': '#44475A',
        'color-yellow': '#F1FA8C',
        'color-purple': '#BD93F9',
        'border-grey': '#26232b',
        'background-black': '#0e0d11',
      },
      backgroundImage: {
        'pattern': `url('~@/assets/background.png')`,
      },
    },
  },
  plugins: [],
}