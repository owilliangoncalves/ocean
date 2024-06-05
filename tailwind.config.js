const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      verdePrimario: '#3CC7DA',
      verdeSecundario: '#0A2A33',
      branco: '#fff',
    },
    container: {
      center: true,
      padding: 'auto',
    },
  },

  darkMode: 'class',
  plugins: [nextui({ addCommonColors: true })],
};
