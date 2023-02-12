/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        "2xs": "375px",
        xs: "428px",
        sm: "744px",
        md: "834px",
        lg: "1024px",
        xl: "1441px",
        "2xl": "1920px",
      },
    },
  },
  plugins: [],
};
