import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF8C00",
          dark: "#E67E00",
          muted: "#FFF4E6",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F2F2F2",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          muted: "#5c5c5c",
          line: "#CCCCCC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
        card: "0 4px 24px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)",
        glow: "0 12px 40px rgba(255,140,0,0.22)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(255,140,0,0.14) 0%, rgba(242,242,242,0.95) 45%, #ffffff 100%)",
        "cta-gradient": "linear-gradient(135deg, #FF8C00 0%, #ffb347 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
