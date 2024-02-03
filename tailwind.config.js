/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#5E3BEE",
        Heading: "#282938",
        Herobg: "#F5FCFF",
        Dribble: "#E62872",
        Body: "#1C1E53",
        Textcl: "#0F1221",
        cardborder: "#006B6A",
      },
    },
  },
  plugins: [],
};
