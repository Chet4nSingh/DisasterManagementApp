/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gun-metal': '#333',
        'gun-metal-dark': '#12242B',
        'honey-dew': '#EAF1E4',
        'antique-white': '#FEEFDD',
        'moonstone': '#50B2C0',
        'atomic-tangerine': '#FAAA8D',
        'beige': '#E2E8CE',
        'ash-gray': '#566B4C',
        'eerie-black': '#262626'
      }
    },
  },
  plugins: [],
};
