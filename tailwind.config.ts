/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'end-bold': ["SarunProCondensed Bold", "sans-serif"],
      'end-normal': ["SarunProCondensed Regular", "sans-serif"],
    },
    extend: {
      screens: {
        'end-sm': '321px',
        'end-md': '688px',
        'end-lg': '1024px',
        'end-xl': '1200px',
      },
      colors: {
        'end-button-blue': '#7BC6E3',
        'end-button-hover-blue': '#7D95E2',
        'end-button-text-blue': '#7D95E266',
        'end-bg-black': "#000",
        'end-light-blue': "#60a5fa",
        'end-bg-brown': "#1C1C1C",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
