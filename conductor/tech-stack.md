# Pile Technologique (Tech Stack) - Au Beau Jeu (ABJ)

## 1. Core Framework & Runtime
- **Runtime & Langage :** TypeScript + Node.js (Environnement moderne, typage strict)
- **Framework Frontend :** React (SPA réactive, composants modulaires et maintenables)
- **Bundler & Outillage de Dev :** Vite (Build ultra-rapide, HMR instantané, optimisation automatique des assets)

## 2. Style & Design System
- **Moteur CSS :** Tailwind CSS (Design tokens sur-mesure pour la charte ABJ)
  - `color-primary`: `#88C4B9`
  - `color-secondary`: `#D994B6`
  - `color-blue-light`: `#79B4D9`
  - `color-red-mauve`: `#CF7A86`
  - `color-sun-yellow`: `#F9CE8C`
  - `color-bg-cream`: `#F6F6F2`
  - `color-text-dark`: `#333333`
- **Typographie :** Google Fonts (Police géométrique et chaleureuse sans-serif : *Outfit* / *Plus Jakarta Sans*)
- **Pack d'icônes :** Lucide React (Icônes vectorielles légères, accessibles et sans emoji)

## 3. Interactions & Gestuelle
- **Animations & Micro-interactions :** Motion / Framer Motion (Transitions matérielles GPU, gestion des springs, support `prefers-reduced-motion`)
- **Slider interactif :** Composant carrousel/slider tactile natif avec swipe gestuel, indicateurs de pagination, zoom modal plein écran et téléchargement direct du PDF du menu.
- **Réservation :** Intégration modale / iframe Zenchef sécurisée.

## 4. Qualité de Code & Tests
- **Tests Unitaires / Intégration :** Vitest + React Testing Library
- **Linting & Formatage :** ESLint + Prettier
