# Plan d'Implémentation : MVP Vitrine Web "Au Beau Jeu" (SPA)

### Phase 1 : Initialisation du Projet & Fondations
- [x] Task: Scaffolding du projet Vite + React + TypeScript (63d4d7e)
  - [x] Initialiser le projet avec Vite en mode React + TS
  - [x] Installer les dépendances : Tailwind CSS, Lucide React, Framer Motion, Vitest, Testing Library
  - [x] Configurer les tokens de la charte graphique ABJ dans Tailwind CSS et les polices Google Fonts
  - [x] Structurer les assets publics (`assets/`, `assets/carte/`, `old_photos/`)
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md)

### Phase 2 : Section Hero & Horaires Dynamiques (TDD)
- [x] Task: Tests unitaires du calcul des horaires et du statut d'ouverture (8022a4f)
  - [x] Écrire les tests pour la logique de statut ("Ouvert en ce moment / Fermé") basée sur l'heure de Lille
  - [x] Valider l'échec initial des tests (Red Phase)
- [x] Task: Implémentation de la logique d'horaires et composant Hero (934259a)
  - [x] Développer l'utilitaire de calcul des horaires
  - [x] Implémenter le composant Hero avec logo officiel, mascotte OBO animée et badge de statut
  - [x] Intégrer les 3 boutons CTAs (La Boutique, Le Bar à jeux, Le TCG sortant)
  - [x] Intégrer le modal interactif de réservation de table Zenchef
  - [x] Valider le passage au vert des tests (Green Phase)
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md)

### Phase 3 : Section "La Boutique" & Galerie Photos (TDD)
- [x] Task: Tests unitaires de la section Boutique (2b58fca)
  - [x] Écrire les tests pour l'affichage de l'histoire des 9 ans et la structure de la galerie
  - [x] Valider l'échec initial des tests (Red Phase)
- [x] Task: Implémentation de la section Boutique et carrousel/grille photo (2b58fca)
  - [x] Développer la section avec le texte identitaire lillois
  - [x] Implémenter la galerie responsive utilisant les photos réelles (`old_photos/boutique/`)
  - [x] Valider le passage au vert des tests (Green Phase)
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md)

### Phase 4 : Section "Le Bar à jeux" & Slider de la Carte du Bar (TDD)
- [x] Task: Tests unitaires du bar et du slider de menu (bf19bbc)
  - [x] Écrire les tests pour la ludothèque (+600 jeux), les états du slider et l'action de téléchargement PDF
  - [x] Valider l'échec initial des tests (Red Phase)
- [x] Task: Implémentation de la ludothèque et du slider interactif de menu (bf19bbc)
  - [x] Développer la présentation des 600+ jeux avec galerie d'ambiance (`old_photos/bar/`)
  - [x] Développer le slider tactile gestuel (swipe, pagination, plein écran) avec les 4 planches (`assets/carte/`)
  - [x] Ajouter la fonctionnalité de téléchargement direct du menu en PDF (format pratique mobile)
  - [x] Intégrer la barre d'accès rapide mobile au pouce
  - [x] Valider le passage au vert des tests (Green Phase)
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md)

### Phase 5 : Polissage UI/UX, Accessibilité & Build Final
- [x] Task: Revue des micro-animations et conformité design (4cd8639)
  - [x] Vérifier les retours tactiles `:active` scale 0.97, durées < 250ms et support `prefers-reduced-motion`
  - [x] Valider les contrastes WCAG AAA et les cibles tactiles >= 48px
- [x] Task: Build de production et tests de non-régression (4cd8639)
  - [x] Exécuter la suite complète de tests Vitest
  - [x] Valider le build de production Vite sans erreur
- [x] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase: Review Fixes
- [x] Task: Apply review suggestions (d2d50cf)

