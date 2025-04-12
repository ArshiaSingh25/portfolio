/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"'],
      }
    },
    colors: {
      primary: '#4c2456', white: "#FFFFFF",
    },
  },
  plugins: [],
}