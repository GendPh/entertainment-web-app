/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#10141E',
          secondary: '#161D2F',
          accent: '#5A698F',
        },
        text: '#FFFFFF',
        accent: '#FC4747',
      }
    },
  },
  plugins: [],
}