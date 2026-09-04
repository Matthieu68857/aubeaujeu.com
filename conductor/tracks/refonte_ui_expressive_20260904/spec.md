# Spécification : Refonte UI/UX Expressive, Colorée & Animée (Inspiration Mana & WIP)

## 1. Vue d'Ensemble & Objectif
Transformer la vitrine web d'Au Beau Jeu pour abandonner l'aspect "SaaS / corporate blanc" au profit d'un univers visuel chaleureux, festif, tactile et dynamique. L'expérience doit évoquer le plaisir du jeu de société et la convivialité lilloise en combinant la fidélité à la maquette d'origine (`assets/frontpage_wip.png`) et le dynamisme moderne de *Mana Yerba Maté* (vagues SVG, color-blocking, micro-animations rebondissantes).

## 2. Charte Graphique & Palette Stricte
Toutes les couleurs de fond, bordures, ombres et éléments graphiques doivent dériver exclusivement des teintes officielles issues de `assets/colors.png` :
- Vert-Bleu / Sauge : `#88C4B9`
- Rose Bonbon : `#D994B6`
- Bleu Ciel : `#79B4D9`
- Rouge Mauve / Brique : `#CF7A86`
- Jaune Soleil : `#F9CE8C`
- Blanc Cassé / Crème (Fond de base) : `#F6F6F2`
- Anthracite (Texte & contrastes) : `#333333`

## 3. Exigences Fonctionnelles & Ergonomie

### 3.1 Hero Section
- **Logo central grand format :** Typographie et logo "Au Beau Jeu" mis en majesté au centre supérieur de l'écran avec ses couleurs vives d'origine.
- **Formes organiques d'ambiance :** Blobs et formes SVG colorées aux teintes officielles dans les angles supérieurs avec animation de flottement subtile (Framer Motion).
- **Fiches Horaires tactiles "Carnets à spirales" :**
  - Deux carnets distincts stylisés (Horaires Boutique & Horaires Bar) avec reliures à spirales et texture quadrillée papier.
  - Badge temps réel indiquant si le lieu est actuellement Ouvert ou Fermé en fonction de l'heure locale et du jour de la semaine.
- **3 Ancres de navigation rapide :**
  - Boutons pill/bubble tactiles renvoyant directement vers : *La Boutique*, *Le Bar à Jeux*, et *TCG & Tournois*.
- **Exclusion :** Aucun bouton Zenchef (sera intégré avec le widget officiel plus tard).

### 3.2 Nouvelle Section Dédiée "TCG & Tournois"
- **Ancre de navigation :** Accessible directement depuis le Hero via l'ancre `#tcg`.
- **Contenu épuré & impactant :** Présentation du rôle d'Au Beau Jeu comme carrefour des passionnés de cartes à collectionner à Lille (rencontres, initiations, tournois officiels).
- **Badges de jeux :** Épingles/badges visuels des univers phares (Pokémon, Disney Lorcana, Magic: The Gathering, One Piece, Star Wars Unlimited).
- **Call-to-Action vers TCG Arena :** Bouton sortant clair et attractif ouvrant `https://tcg-arena.aubeaujeu.com/` dans un nouvel onglet sécurisé.

### 3.3 Rythme & Transitions de Sections (Inspiration Mana Yerba Maté)
- **Séparateurs SVG organiques :** Vagues et courbes fluides bicolores reliant sans rupture abrupte :
  - Hero -> Boutique
  - Boutique -> Bar à Jeux & Menu
  - Bar à Jeux -> TCG & Tournois
  - TCG -> Footer
- **Animations d'ambiance & micro-interactions :**
  - Déclenchement fluide des éléments à l'entrée dans le viewport (staggered reveal).
  - Micro-rebonds (spring physics) sur les boutons et cartes au survol/clic.
  - Mascotte OBO intégrée avec bienveillance sous forme de sticker dynamique.
  - Respect strict de la préférence utilisateur `prefers-reduced-motion`.

### 3.4 Préservation des Acquis & Fonctionnalités Clés
- Visionneuse tactile de la carte du bar (pagination tactile, zoom modal haute définition, bouton de téléchargement PDF).
- Galeries photos réelles de la boutique et du bar (`old_photos/`).
- Informations pratiques, mentions légales et réseaux sociaux dans le footer.
- Responsive absolu mobile et desktop.

## 4. Critères d'Acceptation
1. Le logo est proéminent, central et fidèle à `frontpage_wip.png`.
2. Le Hero intègre les doubles carnets à spirales avec badge Ouvert/Fermé.
3. Les transitions entre chaque section sont des vagues SVG organiques aux couleurs de la charte.
4. La section TCG existe, dispose de son ancre et de son lien sortant vers TCG Arena.
5. Aucun composant Zenchef n'est présent.
6. 100% des couleurs proviennent de la charte officielle ou de leurs déclinaisons harmoniques.
7. Tous les tests unitaires et d'intégration passent (`npm test` / Vitest).
