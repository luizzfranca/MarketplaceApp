/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/screens/*.tsx", "./src/components/*.tsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          700: "#1A181B",
          600: "#3E3A40",
          500: "#5F5B62",
          400: "#9F9BA1",
          300: "#D9D8DA",
          200: "#EDECEE", //background
          100: "#F7F7F8",
        },
        blue: {
          200: "#364D9D",
          150: "#647AC7",
          100: "#80B3FF",
        },
        red: {
          100: "#EE7979",
        },
      },
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
      },
    },
  },
  plugins: [],
};
