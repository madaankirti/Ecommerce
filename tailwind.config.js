/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",  // Tailwind's blue
      },
    },
  },
  plugins: [],
}
