/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,html}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        light: "#f5f5f5",
        dark: "#161616",
        error: "#E9ACAC",
      },
    },
  },
  plugins: [],
};
