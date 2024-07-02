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
      },
      keyframes: {
        "fade-in-out": {
          "0%": { opacity: 0.3 },
          "50%": { opacity: 0.6 },
          "100%": { opacity: 0.3 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "ping": {
          "75%, 100%": { transform: "scale(1.4)", opacity: 0 }
        }
      },
      animation: {
        "fade-in-out": 'fade-in-out 1s linear infinite',
        "fade-in": 'fade-in 0.3s linear',
        "ping": 'ping 0.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
}