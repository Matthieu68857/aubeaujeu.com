/**
 * Official Brand Colors & Tokens for Au Beau Jeu (ABJ)
 * Directly extracted from the official logo & brand guidelines (assets/colors.png)
 */

export const ABJ_COLORS = {
  // Official Core Palette
  primary: '#88C4B9',    // Vert-Bleu / Sauge
  secondary: '#D994B6',  // Rose Bonbon
  blue: '#79B4D9',       // Bleu Ciel
  mauve: '#CF7A86',      // Rouge Mauve / Brique
  yellow: '#F9CE8C',     // Jaune Soleil
  cream: '#F6F6F2',      // Blanc Cassé (Fond principal)
  dark: '#333333',       // Anthracite (Texte principal)

  // Harmonic light tints for section backgrounds & soft badges
  primaryLight: '#EBF5F3',
  secondaryLight: '#FAF0F5',
  blueLight: '#EDF5FB',
  mauveLight: '#FAEDEE',
  yellowLight: '#FDF6EB',
} as const;

export const ABJ_SHADOWS = {
  soft: '0 8px 30px rgba(0, 0, 0, 0.06)',
  hover: '0 14px 40px rgba(136, 196, 185, 0.25)',
  pink: '0 14px 40px rgba(217, 148, 182, 0.25)',
  yellow: '0 14px 40px rgba(249, 206, 140, 0.35)',
  blue: '0 14px 40px rgba(121, 180, 217, 0.35)',
  tactile: '0 4px 0 #333333',
  tactileLg: '0 6px 0 #333333',
} as const;
