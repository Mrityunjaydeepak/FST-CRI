// tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Define custom animations
      animation: {
        marquee: 'marquee 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      // Remove or correct the scrollBehavior configuration
      // If you need to extend it, define it as an object with valid properties
      // For example, adding a new scroll behavior:
      scrollBehavior: {
        smooth: 'smooth',
        auto: 'auto',
      },
      // Define custom colors
      colors: {
        primary: "#040404",
        secondary: "#383838",
      },
      // Define custom fonts
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
