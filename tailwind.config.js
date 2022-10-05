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
        'blue-switch-mode': '#2196f3',
        'grey-ccc': '#ccc',
        'grey-666': '#666',
        'text-color': '#444444',
        'register-btn': '#dd3333',
      },
    },
  },
  plugins: [],
};
