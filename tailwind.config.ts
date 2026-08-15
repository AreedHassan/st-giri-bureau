import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bureau-ink": "#141312",
        "bureau-paper": "#FAF9F6",
        "bureau-file": "#EDEAE3",
        "bureau-line": "#D9D5CC",
        "bureau-accent": "#8A1F1F",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        squircle: "24px",
      },
      backdropBlur: {
        bureau: "12px",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.3, 0.4, 1)",
      },
      keyframes: {
        blurFadeUp: {
          "0%": { opacity: "0", filter: "blur(14px)", transform: "translateY(24px)" },
          "100%": { opacity: "1", filter: "blur(0)", transform: "translateY(0)" },
        },
        stampIn: {
          "0%": { opacity: "0", transform: "rotate(-8deg) scale(1.4)" },
          "60%": { opacity: "1", transform: "rotate(-6deg) scale(0.95)" },
          "100%": { opacity: "1", transform: "rotate(-6deg) scale(1)" },
        },
      },
      animation: {
        "blur-fade-up": "blurFadeUp 0.6s cubic-bezier(0.34,1.3,0.4,1) forwards",
        "stamp-in": "stampIn 0.5s cubic-bezier(0.34,1.3,0.4,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
