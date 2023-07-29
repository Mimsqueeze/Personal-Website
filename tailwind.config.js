/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-30": "#f4f0f0",
        "gray-40": "#f1e8e8",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#e0e9ff",
        "primary-300": "#a3cfff",
        "primary-500": "#669eff",
        "primary-700": "#1469fc",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":"linear-gradient(90deg, #FF616A 8%, #FFC837 100%",
        "mobile-home": "url('./assets/homePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/sparkles.png')",
        circles: "url('./assets/circles.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
      xl: "2160px"
    }
  },
  plugins: [],
};