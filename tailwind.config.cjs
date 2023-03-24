/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue1": "hsl(207, 26%, 17%)",
        "very-dark-blue2": "hsl(200, 15%, 8%)",
        "dark-grey": " hsl(0, 0%, 52%)",
        "very-light-grey": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
