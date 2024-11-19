import typography from "@tailwindcss/typography";
import fontFamily from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        segoescr: ["Segoe Script", ...fontFamily.fontFamily.sans],
      },
    },
  },

  plugins: [typography],
};
