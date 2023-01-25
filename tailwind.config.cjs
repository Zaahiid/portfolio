/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 3s linear infinite",
        spinFast: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
