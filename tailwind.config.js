/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      refubookBlue: '#4699C2',
      refubookActiveNav: '#026FC2',
      refubookRed: '#FC8476',
      refubookLightBlue: '#9DAFBD',
      refubookYellow: '#FEDB9B',
      refubookBlack: '#000000',
      refubookLightBlack: '#3F3B3B',
      refubookWhite: '#FFFFFF',
      refubookGray: '#8B8F9C',
      refubookAboutBlue: '#E5FAFF',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
