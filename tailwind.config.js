/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        secondary: "#6366F1",
        background: "#FAFAFA",
        foreground: "#111827",
        card: "#FFFFFF",
        muted: "#F3F4F6",
        border: "#E5E7EB"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
