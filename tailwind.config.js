/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        empty: '128px',
        cardContent: '230px',
        fitContent: 'fit-content',
      },
      minWidth: {
        5: '1.25rem',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};
