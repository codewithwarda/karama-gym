import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#D72638",
          "red-dark": "#a81c27",
          black: "#080808",
          surface: "#111111",
          surface2: "#181818",
          surface3: "#202020",
          border: "rgba(255,255,255,0.07)",
          muted: "#888880",
          "off-white": "#E8E8E0"
        }
      },
      fontFamily: {
        display: ["var(--font-barlow)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      animation: {
        "pulse-dot": "pulse-dot 1.6s ease-in-out infinite",
        "scroll-line": "scroll-line 1.8s ease-in-out infinite"
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.7)" }
        },
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" }
        }
      }
    }
  },
  plugins: []
};
export default config;
