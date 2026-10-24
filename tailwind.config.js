/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf2fb",
          100: "#fce4f7",
          200: "#f9c4ef",
          300: "#f594e0",
          400: "#f056cb",
          500: "#e91e9a",
          600: "#d41484",
          700: "#b0106c",
          800: "#92105a",
          900: "#7a114e",
          DEFAULT: "#e91e9a",
        },
        gray: {
          50: "#f5f7fa",
          100: "#e8ebf2",
          200: "#d1d6e4",
          300: "#b0b8cc",
          400: "#8891a8",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        neutral: {
          DEFAULT: "#070912",
          overlay: "rgba(7, 9, 18, 0.85)",
        },
        secondary: {
          DEFAULT: "#070912",
        },
        accent: {
          DEFAULT: "#36d6f0",
        },
        navy: "#070912",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(120deg, hsl(320 95% 60%) 0%, hsl(264 90% 66%) 55%, hsl(187 95% 58%) 130%)",
      },
    },
  },
  plugins: [],
};
