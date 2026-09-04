# Plan d'Implémentation : Refonte UI/UX Expressive, Colorée & Animée

## Phase 1 : Système Graphique, Palette Officielle & Séparateurs Organiques
- [x] Task: Étendre la configuration Tailwind et les tokens CSS pour refléter fidèlement la palette officielle (`#88C4B9`, `#D994B6`, `#79B4D9`, `#CF7A86`, `#F9CE8C`, `#F6F6F2`, `#333333`) (01e1d85)
  - [x] Déclarer les nuances d'arrière-plan, bordures et ombres colorées douces
  - [x] Créer les tests unitaires pour la conformité des tokens de style
- [x] Task: Développer les composants de séparateurs de vagues SVG organiques (`WaveDivider.tsx`) (52f1ec2)
  - [x] Écrire les tests unitaires pour le rendu SVG dynamique, les hauteurs relatives et les couleurs passées en props
  - [x] Créer le composant `WaveDivider` avec support des variantes de courbure (inversée, double vague, douce)
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md) (fdfd59e)

## Phase 2 : Refonte du Hero & Carnets à Spirales Tactiles
- [x] Task: Composant "Carnet à Spirales" pour les horaires (`SpiralNotebook.tsx`) (ecdc899)
  - [x] Écrire les tests unitaires pour le calcul de l'état ouvert/fermé en temps réel et l'affichage des plages horaires
  - [x] Implémenter le design visuel inspiré de `frontpage_wip.png` (reliure spirales, papier quadrillé, badge ouvert/fermé)
- [x] Task: Refonte complète du composant `Hero.tsx` (2c1b5ba)
  - [x] Écrire les tests unitaires pour le rendu du logo central, des ancres de navigation et l'absence du bouton Zenchef
  - [x] Centrer et agrandir le logo multicolore "Au Beau Jeu"
  - [x] Intégrer les blobs d'arrière-plan animés aux couleurs officielles
  - [x] Positionner les 3 boutons d'accès rapide tactiles (La Boutique `#boutique`, Le Bar `#bar`, Le TCG `#tcg`)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 3 : Section Dédiée "TCG & Tournois"
- [ ] Task: Écrire les tests unitaires pour la section TCG
  - [ ] Vérifier la présence de l'ancre `#tcg`, des badges d'univers (Pokémon, Lorcana, Magic, One Piece, SWU) et du lien sécurisé vers TCG Arena
- [ ] Task: Implémenter le composant `TcgSection.tsx`
  - [ ] Rédiger le contenu clair et chaleureux présentant le rôle d'ABJ dans la scène TCG lilloise
  - [ ] Créer les badges illustrés/stylisés des jeux de cartes
  - [ ] Ajouter le bouton d'action CTA vers `https://tcg-arena.aubeaujeu.com/` (ouverture nouvel onglet sécurisé)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 4 : Transitions Organiques, Animations & Mascotte OBO
- [ ] Task: Insertion des vagues de transition entre l'ensemble des sections
  - [ ] Connecter Hero -> Boutique -> Bar -> TCG -> Footer avec alternance harmonieuse des couleurs
- [ ] Task: Dynamisation par micro-animations (Framer Motion)
  - [ ] Ajouter les effets d'apparition échelonnée (stagger) à l'entrée dans le viewport
  - [ ] Mettre en scène la mascotte OBO sous forme de stickers flottants et interactifs
  - [ ] Styliser les cartes Boutique et Bar avec des bordures et ombres tactiles chaleureuses
  - [ ] Vérifier le respect de l'accessibilité `prefers-reduced-motion`
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 5 : Vérification Globale, Responsive & Tests de Non-Régression
- [ ] Task: Exécution de la suite complète de tests Vitest
  - [ ] Valider l'intégrité de la visionneuse de la carte du bar (zoom, PDF, swipe)
  - [ ] Valider le bon affichage des galeries photos réelles
  - [ ] Vérifier la couverture de code (>80%)
- [ ] Task: Contrôle de la fluidité et du rendu responsive
  - [ ] Vérification sur mobile, tablette et desktop
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)
