/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./*.{html,jsx}",
    "./src/*.{html,jsx}",
    "./src/**/*.{html,jsx}",
    "./src/**/**/*.{html,jsx}",
    "./src/**/**/**/*.{html,jsx}",
  ],

  theme: {
    extend: {
      backgroundColor: {
        background: "#0A2E36",
        carblue: "#006D77",
        accent: "#4CE0B3",
        greenish: "#09E85E",
      },
      borderColor: {
        greenish: "#09E85E",
      },
      color: {
        accent: "#4CE0B3",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
