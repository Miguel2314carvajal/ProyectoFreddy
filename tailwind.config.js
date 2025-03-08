/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#087ea4',
        'primary-dark': '#149eca',
        'react-dark': '#23272F',
        'react-darker': '#1B1F24',
        dark: {
          DEFAULT: '#23272F',
          lighter: '#343A46',
        }
      },
      backgroundColor: {
        'dark-gradient': 'linear-gradient(180deg, #23272F 0%, #1A1C22 100%)',
      }
    },
  },
  plugins: [],
}
