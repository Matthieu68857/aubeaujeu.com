# Spécification Technique : MVP Vitrine Web "Au Beau Jeu" (SPA)

## 1. Vue d'ensemble (Overview)
Création de la page d'accueil officielle pour "Au Beau Jeu" (ABJ), boutique et bar à jeux emblématique de Lille (9 ans d'existence, +600 jeux).
Ce projet est une Single-Page Application (SPA) stricte, épurée, responsive, pensée mobile-first avec une esthétique chaleureuse et ludique évoquant l'enfance, portée par la mascotte OBO et la palette de couleurs officielle.

## 2. Exigences Fonctionnelles (Functional Requirements)

### 2.1 Hero Section
- **Identité de marque :** Intégration du logo officiel ABJ et de la mascotte OBO (avec micro-animation subtile de bienvenue respectant `prefers-reduced-motion`).
- **Horaires d'ouverture :**
  - Affichage clair et lisible des horaires hebdomadaires (mardi au dimanche).
  - Indicateur dynamique en temps réel ("Ouvert en ce moment" / "Fermé - Ouvre à XXh") calculé sur le fuseau horaire de Lille (Europe/Paris).
- **Module Réservation Zenchef :**
  - Bouton d'action proéminent "Réserver une table".
  - Modal interactif dédié embarquant le widget officiel Zenchef (avec fallback configurable).
- **Navigation Directe (3 CTAs majeurs) :**
  1. "La Boutique" : défilement fluide vers la section `#boutique`.
  2. "Le Bar à jeux" : défilement fluide vers la section `#bar`.
  3. "Le TCG" : lien externe strict vers `https://tcg-arena.aubeaujeu.com/` (ouverture nouvel onglet sécurisé `target="_blank" rel="noopener noreferrer"`).

### 2.2 Section "La Boutique" (`#boutique`)
- **Présentation historique :** Mise en avant des 9 ans d'existence et de l'âme de la boutique lilloise incontournable.
- **Galerie / Carrousel photo :** Affichage optimisé et responsive des photos réelles de la boutique (`old_photos/boutique/1 (1).jpg`, `2 (1).jpg`, `3.jpg`).
- **Informations pratiques :** Conseils personnalisés, vente de jeux de société, nouveautés et classiques.

### 2.3 Section "Le Bar à jeux" (`#bar`)
- **Présentation de la ludothèque :** Mise en valeur des plus de 600 jeux de société disponibles en libre accès avec accompagnement des animateurs.
- **Galerie d'ambiance :** Présentation des photos réelles du bar (`old_photos/bar/1 (2).jpg`, `2 (2).jpg`, `3 (1).jpg`).
- **Slider interactif de la Carte du Bar :**
  - Visionneuse tactile (swipe mobile, navigation fléchée clavier/desktop, indicateurs de pagination).
  - Affichage haute fidélité des 4 pages du menu (`assets/carte/PAGE 1.png`, `assets/carte/PAGE 1 verso.png`, `assets/carte/PAGE 2.png`, `assets/carte/PAGE 2 verso.png`).
  - Fonctionnalité de zoom / lightbox plein écran pour un confort de lecture optimal des boissons et snacks.
  - Bouton dédié pour télécharger le menu en PDF (généré à la volée à partir des 4 planches pour un confort hors-ligne immédiat sur mobile).

### 2.4 Barre d'accès rapide mobile
- Barre d'action fixe discrète en bas d'écran sur smartphone donnant un accès direct aux 3 actions critiques : Statut/Horaires, Réserver une table, Menu du bar.

## 3. Exigences Non-Fonctionnelles & Performance (Non-Functional Requirements)
- **Architecture :** React 18+ / Vite / TypeScript / Tailwind CSS.
- **Charte Graphique :**
  - Primaire : `#88C4B9` (Vert-Bleu)
  - Accent / Secondaire : `#D994B6` (Rose)
  - Bleu clair : `#79B4D9`
  - Rouge Mauve : `#CF7A86`
  - Jaune Soleil : `#F9CE8C`
  - Fond : `#F6F6F2` (Blanc Cassé)
  - Texte : `#333333` (Gris Foncé, contraste AAA)
- **Règles d'animation Emil Kowalski :**
  - Cibles tactiles `>= 48px`.
  - `:active` scale 0.97 sur les boutons et cartes interactives.
  - Transitions GPU (transform et opacity uniquement), durée 150-250ms, ease-out dynamique.
  - Support strict `prefers-reduced-motion`.
- **Accessibilité :** Balisage sémantique HTML5, contrastes WCAG AAA, icônes Lucide SVG (zéro emoji dans l'UI), navigation au clavier avec focus visible.

## 4. Critères d'Acceptation (Acceptance Criteria)
1. La page est une SPA stricte, responsive de 320px à 4K sans débordement horizontal.
2. Le Hero affiche immédiatement le logo ABJ, la mascotte OBO, les horaires avec statut dynamique et le déclencheur Zenchef.
3. Les 3 CTAs du Hero mènent exactement vers leurs cibles respectives (ancres `#boutique`, `#bar` et lien sortant `tcg-arena.aubeaujeu.com`).
4. La section Boutique affiche le texte des 9 ans et la galerie photo (`old_photos/boutique/`).
5. La section Bar affiche la ludothèque 600+ jeux, les photos d'ambiance (`old_photos/bar/`) et le slider fluide des 4 pages du menu (`assets/carte/`) avec plein écran et téléchargement PDF.
6. La suite de tests automatisés (Vitest) valide le calcul des horaires, la structure des sections et l'accessibilité des liens/boutons.

## 5. Hors Périmètre (Out of Scope)
- Création de pages secondaires ou sous-routes (SPA stricte).
- Système de panier e-commerce ou paiement en ligne.
- Gestion d'authentification utilisateur ou comptes clients.
