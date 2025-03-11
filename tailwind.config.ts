import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      xls: "550px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "0rem",
      },
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      textShadow: {
        sm: "1px 0.5px 1.5px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      animation: {
        mobile_progress: "mobile_progress 1.5s linear  ",
        desktop_progress: "desktop_progress 1.5s linear  ",
        nav_animate: "nav_animate 0.5s linear",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        nav_animate: {
          "0%": { top: "-90px" },
          "100%": { top: "0px" },
        },
        desktop_progress: {
          "0%": { width: "0%", left: "50%" },
          "100%": { width: "100%", left: "0" },
        },
        mobile_progress: {
          "0%": { width: "0%", left: "50%" },
          "100%": { width: "calc(100vw - 2rem)", left: "1rem" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [
    heroui(),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": (val) => ({
            textShadow: val,
          }),
        },
        {
          values: theme("textShadow"),
        }
      );
    }),
  ],
} satisfies Config;

export default config;
