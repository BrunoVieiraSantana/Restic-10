/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {"primary": "#2E91E2", "secondary": "#9866EB" }
    },
  },
  plugins: [],
}

