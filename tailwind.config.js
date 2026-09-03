/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        abj: {
          primary: '#88C4B9',     // Vert-Bleu
          secondary: '#D994B6',   // Rose
          blue: '#79B4D9',        // Bleu clair
          mauve: '#CF7A86',       // Rouge Mauve
          yellow: '#F9CE8C',      // Jaune Soleil
          cream: '#F6F6F2',       // Blanc Cassé (Fond principal)
          dark: '#333333',        // Gris Foncé (Texte principal)
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'abj-soft': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'abj-hover': '0 14px 40px rgba(136, 196, 185, 0.25)',
        'abj-pink': '0 14px 40px rgba(217, 148, 182, 0.25)',
      },
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
};
