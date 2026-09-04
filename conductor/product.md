# Au Beau Jeu (ABJ) - Vitrine Web & Bar à Jeux

## Overview
Au Beau Jeu (ABJ) est une Single-Page Application (SPA) responsive, épurée et chaleureuse dédiée à la célèbre boutique et bar à jeux de Lille (9 ans d'existence, plus de 600 jeux disponibles). L'expérience utilisateur est pensée mobile-first avec une esthétique soignée rappelant l'enfance et l'univers du jeu de société, incarnée par la mascotte OBO et la charte graphique officielle.

## Objectifs Principaux
1. **Accès Immédiat & Pratique :** Présentation en Hero des horaires d'ouverture mis en évidence (anti-pattern évité) et intégration d'un module/bouton de réservation de table Zenchef interactif.
2. **Navigation Directe (3 CTAs majeurs) :**
   - **La Boutique :** Ancre vers la présentation de la boutique lilloise historique.
   - **Le Bar à Jeux :** Ancre vers l'espace bar, la ludothèque de 600+ jeux et le menu.
   - **Le TCG :** Lien sortant strict vers https://tcg-arena.aubeaujeu.com/.
3. **Mise en Valeur de la Boutique :** Récit des 9 ans d'histoire et carrousel/grille photo utilisant les clichés récents (dossier `old_photos/boutique/`).
4. **Expérience Bar & Menu Interactif :** Mise en avant des 600+ jeux avec galerie d'ambiance (`old_photos/bar/`) et slider interactif tactile (swipe avec momentum, zoom/plein écran, pagination) pour feuilleter les pages haute définition de la nouvelle carte du bar (`assets/carte/PAGE 1.png`, `PAGE 1 verso.png`, `PAGE 2.png`, `PAGE 2 verso.png`), complété par un bouton de téléchargement PDF dédié au mobile.
5. **Identité Visuelle & OBO :** Mascotte OBO intégrée avec micro-animations subtiles (springs, physics légères) pour guider l'utilisateur et renforcer l'ambiance chaleureuse sans gêner la lisibilité.

## Contraintes & Périmètre
- **Architecture :** Single-Page Application (SPA) stricte. Aucune autre page générée.
- **Design :** Épuré, direct, mobile-first, esprit nostalgique / retour en enfance.
- **Charte Visuelle :**
  - Vert-Bleu (#88C4B9), Rose (#D994B6), Bleu clair (#79B4D9), Rouge Mauve (#CF7A86), Jaune Soleil (#F9CE8C), Blanc Cassé fond (#F6F6F2), Gris Foncé texte (#333333).
- **Assets Médias :**
  - Identité & mascottes : `assets/` (`logo_horizontal.png`, `logo_vertical.png`, `obo1.png`, `obo2.png`, `obo3.png`, `colors.png`, `frontpage_wip.png`).
  - Photos réelles : `old_photos/boutique/` et `old_photos/bar/`.
  - Nouvelle carte du bar : `assets/carte/` (`PAGE 1.png`, `PAGE 1 verso.png`, `PAGE 2.png`, `PAGE 2 verso.png`).

