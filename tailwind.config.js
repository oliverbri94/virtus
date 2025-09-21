/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'virtus-blue': {
          DEFAULT: '#0B4F6C', // Un azul corporativo y profundo
          light: '#20A4F3',   // El azul vibrante del logo
        },
        'virtus-dark': '#011627',    // Para textos principales
      },
    },
  },
  plugins: [],
}

