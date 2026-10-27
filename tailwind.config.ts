import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Sfeer en kleuren — uit de merkkaart
        nacht: "#111111", // Stadsnacht
        kalk: "#ECE8DF", // Kalkwit
        papier: "#F5F2EC", // achtergrond
        wold: "#26392D", // Woldgroen
        klinker: "#7D7D7A", // Klinkergrijs
        wad: "#2C3B4D", // Wadblauw
        kool: "#1B1B1B",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        merk: "0.42em",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        rise: "rise 1s cubic-bezier(.2,.7,.2,1) both",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
