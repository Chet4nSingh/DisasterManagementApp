/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gun-metal': '#19323C',
        'gun-metal-dark': '#12242B',
        'honey-dew': '#EAF1E4',
      }
    },
  },
  plugins: [],
};
