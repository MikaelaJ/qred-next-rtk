/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          qred: {
            light: "#ff5a5f",
            DEFAULT: "#2fd67a",
            dark: "#ff5a5f",
          },
        },
        secondary: {
          qred: {
            light: "#ff5a5f",
            DEFAULT: "#214749",
            dark: "#ff5a5f",
          },
        },
        black: {
          qred: {
            lighter: "#DEDEDE",
            DEFAULT: "#222",
            darker: "#1A1A1A",
          },
        },
      },
    },
  },
  plugins: [],
};
