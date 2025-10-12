/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'virtus-blue': '#007BFF', // <-- Cambia este código por tu azul exacto
        'virtus-blue-light': '#3395FF', // <-- Cambia este por tu azul claro
        'virtus-dark': '#343a40', // <-- Cambia este por tu color oscuro
      },
    },
  },
  plugins: [],
}

