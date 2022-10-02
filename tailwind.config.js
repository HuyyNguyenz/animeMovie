/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      source: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      colors: {
        'teal-100': '#e7f6f2',
        'grey-ccc': '#ccc',
        'grey-666': '#666',
      },
    },
  },
  plugins: [],
};
