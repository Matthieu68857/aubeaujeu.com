# Au Beau Jeu (ABJ) - Vitrine Web & Bar à Jeux

## Overview
Au Beau Jeu (ABJ) est une Single-Page Application (SPA) responsive, colorée, chaleureuse et expressive dédiée à la célèbre boutique et bar à jeux de Lille (9 ans d'existence, plus de 600 jeux disponibles). L'expérience utilisateur est pensée mobile-first avec une esthétique tactile inspirée du jeu de société, de la maquette d'origine (`assets/frontpage_wip.png`), des transitions dynamiques de style *Mana Yerba Maté*, et incarnée par la mascotte OBO et la charte graphique officielle.

## Objectifs Principaux
1. **Accès Immédiat & Pratique :** Présentation en Hero des horaires d'ouverture sous forme de doubles carnets à spirales tactiles (Boutique & Bar) avec badge d'ouverture en temps réel.
2. **Navigation Directe (3 Piliers majeurs) :**
   - **La Boutique :** Ancre `#boutique` vers la présentation de la boutique lilloise historique.
   - **Le Bar à Jeux :** Ancre `#bar` vers l'espace bar, la ludothèque de 600+ jeux et le menu.
   - **TCG & Tournois :** Ancre `#tcg` vers la section dédiée au jeu de cartes à collectionner et tournois à Lille.
3. **Mise en Valeur de la Boutique :** Récit des 9 ans d'histoire et carrousel/grille photo utilisant les clichés récents (`old_photos/boutique/`), cartes de valeurs tactiles et conseils d'OBO.
4. **Expérience Bar & Menu Interactif :** Mise en avant des 600+ jeux avec galerie d'ambiance (`old_photos/bar/`) et slider interactif tactile (swipe avec momentum, zoom plein écran, pagination) pour feuilleter les pages haute définition de la carte du bar, complété par un bouton de téléchargement PDF dédié.
5. **Section Dédiée TCG & Tournois :** Mise en lumière de la scène jeu de cartes lilloise (Pokémon, Lorcana, Magic, One Piece, Star Wars), initiations, et accès direct sécurisé vers https://tcg-arena.aubeaujeu.com/.
6. **Transitions & Identité Visuelle :** Séparateurs organiques sous forme de vagues SVG bicolores reliant chaque section sans coupure rigide, palette officielle stricte et micro-animations fluides.

## Contraintes & Périmètre
- **Architecture :** Single-Page Application (SPA) stricte.
- **Design :** Expressif, coloré, tactile, mobile-first, esprit convivial et ludique.
- **Charte Visuelle Officielle :**
  - Vert-Bleu / Sauge (#88C4B9), Rose Bonbon (#D994B6), Bleu clair (#79B4D9), Rouge Mauve (#CF7A86), Jaune Soleil (#F9CE8C), Blanc Cassé fond (#F6F6F2), Anthracite texte (#333333).
- **Assets Médias :**
  - Identité & mascottes : `assets/` (`logo_horizontal.png`, `logo_vertical.png`, `obo1.png`, `obo2.png`, `obo3.png`, `colors.png`, `frontpage_wip.png`).
  - Photos réelles : `old_photos/boutique/` et `old_photos/bar/`.
  - Carte du bar : `assets/carte/` (`PAGE 1.png`, `PAGE 1 verso.png`, `PAGE 2.png`, `PAGE 2 verso.png`).
- **Réservation :** Module Zenchef différé pour intégration du composant officiel ultérieur.
