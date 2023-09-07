/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9333ea',
        primaryHover: '#7e22ce',
      },
    },
  },
  plugins: [],
}
