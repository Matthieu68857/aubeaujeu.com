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
          'primary-light': '#EBF5F3',
          secondary: '#D994B6',   // Rose
          'secondary-light': '#FAF0F5',
          blue: '#79B4D9',        // Bleu clair
          'blue-light': '#EDF5FB',
          mauve: '#CF7A86',       // Rouge Mauve
          'mauve-light': '#FAEDEE',
          yellow: '#F9CE8C',      // Jaune Soleil
          'yellow-light': '#FDF6EB',
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
        'abj-yellow': '0 14px 40px rgba(249, 206, 140, 0.35)',
        'abj-blue': '0 14px 40px rgba(121, 180, 217, 0.35)',
        'abj-tactile': '0 4px 0 #333333',
        'abj-tactile-lg': '0 6px 0 #333333',
      },
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
};

