import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        surface: "#141518",
        "surface-2": "#1a1b1f",
        "surface-3": "#232529",
        hairline: "#26282d",
        accent: "#ccff00",
        "accent-dim": "#a8d400",
        "accent-wash": "rgba(204,255,0,0.14)",
        bone: "#f4f4f0",
        mute: "#9a9ca3",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "10px",
      },
      maxWidth: {
        shell: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
