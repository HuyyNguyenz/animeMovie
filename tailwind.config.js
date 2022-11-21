/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      source: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-color': '#e7f6f2',
        'navbar-bg-color': '#f3f9f9',
        'navbar-hover-color': '#ffb900',
        'blue-switch-mode': '#2196f3',
        'grey-ccc': '#ccc',
        'grey-666': '#666',
        'text-color': '#444444',
        'submit-btn': '#dd3333',
        'read-more-btn': '#7c83fd',
        'read-more-btn-hover': '#96baff',
        'hover-submit-btn': '#dbdbdb',
        'section-bg-color': '#f3f9f9',
        'dark-mode-1': '#191919',
        'dark-mode-2': '#202020',
        'dark-mode-3': '#232323',
        'dark-mode-4': '#3a3a3a',
        'dark-mode-5': '#323232',
        'dark-mode-hover': '#000000d9',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
