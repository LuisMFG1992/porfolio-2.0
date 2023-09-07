/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#242424',
        primary: '#9333ea',
        primaryHover: '#7e22ce',
      },
    },
  },
  plugins: [],
}
