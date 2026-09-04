# Pile Technologique (Tech Stack) - Au Beau Jeu (ABJ)

## 1. Core Framework & Runtime
- **Runtime & Langage :** TypeScript + Node.js (Environnement moderne, typage strict)
- **Framework Frontend :** React (SPA réactive, composants modulaires et maintenables)
- **Bundler & Outillage de Dev :** Vite (Build ultra-rapide, HMR instantané, optimisation automatique des assets)

## 2. Style & Design System
- **Moteur CSS :** Tailwind CSS (Design tokens sur-mesure pour la charte ABJ)
  - `primary`: `#88C4B9`
  - `secondary`: `#D994B6`
  - `blue`: `#79B4D9`
  - `mauve`: `#CF7A86`
  - `yellow`: `#F9CE8C`
  - `cream`: `#F6F6F2`
  - `dark`: `#333333`
- **Design Tokens :** `src/constants/theme.ts` (Couleurs officielles, teintes claires dérivées, ombres tactiles `shadow-abj-tactile`)
- **Séparateurs Graphiques :** `WaveDivider.tsx` (Vagues vectorielles SVG bicolores douces et incurvées)
- **Typographie :** Google Fonts (Police géométrique et chaleureuse sans-serif : *Outfit* / *Plus Jakarta Sans*)
- **Pack d'icônes :** Lucide React (Icônes vectorielles légères, accessibles et sans emoji)

## 3. Interactions & Gestuelle
- **Animations & Micro-interactions :** Motion / Framer Motion (Transitions matérielles GPU, gestion des springs, support `prefers-reduced-motion`)
- **Slider interactif :** Composant carrousel tactile natif avec swipe gestuel, indicateurs de pagination, zoom modal plein écran et téléchargement direct du PDF du menu (jsPDF).
- **Navigation Tactile :** Carnets à spirales avec calcul d'ouverture temps réel Europe/Paris (`openingHours.ts`).

## 4. Qualité de Code & Tests
- **Tests Unitaires / Intégration :** Vitest + React Testing Library (38 tests unitaires validés)
- **Linting & Formatage :** ESLint + Prettier
