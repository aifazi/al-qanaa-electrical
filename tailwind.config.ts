import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f1b33",
          900: "#0a1326",
          800: "#0f1b33",
          700: "#16264a",
          600: "#1d3258",
          500: "#27406e",
        },
        bronze: {
          DEFAULT: "#a08a63",
          50: "#f7f3ec",
          100: "#ecdfc9",
          200: "#d9c39c",
          300: "#c6a874",
          400: "#a08a63",
          500: "#8a744f",
          600: "#6f5d3f",
        },
        gold: "#c9a24b",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(160, 138, 99, 0.5)",
        card: "0 20px 45px -20px rgba(0, 0, 0, 0.6)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
