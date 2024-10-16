/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    colors: {
      matrix: {
        100: "#94FFD0",
        200: "#61FFB9",
        300: "#30FFA4",
        400: "#00FA8C",
        500: "#00C76F",
      },
      peacock: {
        100: "#A8DCC4",
        200: "#84CDAB",
        300: "#5FBE92",
        400: "#44A779",
        500: "#35835F",
      },
      teal: {
        100: "#09A9A7",
        200: "#067977",
        300: "#044B4A",
        400: "#011818",
        500: "#000000",
      },
      antiflash: {
        100: "#FFFFFF",
        200: "#F2F2F2",
        300: "#F0F0F0",
        400: "#D6D6D6",
        500: "#BDBDBD",
      },
      notblack: {
        100: "#525252",
        200: "#383838",
        300: "#1E1E1E",
        400: "#0F0F0F",
        500: "#000000",
      },
    },
    fontFamily: {
      heading: ["Space Grotesk", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      screens: {
        pp: "480px",
        pl: "768px",
        tp: "834px",
        tl: "1024px",
        lp: "1280px",
        dsk: "1440px",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    }
  },
  plugins: [],
};
