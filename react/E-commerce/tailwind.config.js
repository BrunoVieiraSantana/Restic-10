/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-700": "var(--blue-700)",
        "blue-900": "var(--blue-900)",
        "from-lime-50-to-zinc-50": "var(--from-lime-50-to-zinc-50)",
        "green-700": "var(--green-700)",
        "orange-500": "var(--orange-500)",
        "red-600": "var(--red-600)",
        "stone-500": "var(--stone-500)",
        "stone-900": "var(--stone-900)",
        "variable-collection-slate-100": "var(--variable-collection-slate-100)",
        "variable-collection-white": "var(--variable-collection-white)",
        "variable-collection-zinc-50": "var(--variable-collection-zinc-50)",
        "primary": "#2E91E2",
        "secondary": "#9866EB"
      },
    },
  },
  plugins: [],
}


