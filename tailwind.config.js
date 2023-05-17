/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0e1225",
        "primary-800": "#0021a3",
        "primary-300": "#00a1fc",
        secondary: "#f8a961",
        "secondary-300": "#f8a911",
        tertiary: "#37474F",
        "tertiary-300": "#BCC1C4",
        "tertiary-800": "#263238",
        quaternary: "#455A64",
        "quaternary-300": "#C1C7CA",
        bg: "#f4f7fe",
      },
    },
  },
  plugins: [],
};
