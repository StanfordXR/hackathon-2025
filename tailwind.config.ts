import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aldrich: ["var(--font-aldrich)"],
        orbitron: ["var(--font-orbitron)"],
        ptsans: ["var(--font-pt_sans)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "fade-gradient":
          "radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,1) 100%)",
        "pink-blue-hover":
          "linear-gradient(to right, #aef1f2 0%, #e4bee8 100%)",
        "pink-blue": "linear-gradient(to right, #B7FDFE 0%, #F9D2FD 100%)",
        immersive:
          "radial-gradient(ellipse at center, #110618 0%, rgba(0,0,0,1) 100%)",
      },
      boxShadow: {
        glowing: "0 0 5px #fff, -2px -1px 4px #f0f, 2px 1px 4px #0ff",
      },
      animation: {
        scroll: "scroll 25s forwards linear infinite",
      },
      keyframes: {
        scroll: {
          to: { transform: "translate(calc(-50% - 2rem))" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
