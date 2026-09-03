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
- [ ] Task: Tests unitaires de la section Boutique
  - [ ] Écrire les tests pour l'affichage de l'histoire des 9 ans et la structure de la galerie
  - [ ] Valider l'échec initial des tests (Red Phase)
- [ ] Task: Implémentation de la section Boutique et carrousel/grille photo
  - [ ] Développer la section avec le texte identitaire lillois
  - [ ] Implémenter la galerie responsive utilisant les photos réelles (`old_photos/boutique/`)
  - [ ] Valider le passage au vert des tests (Green Phase)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

### Phase 4 : Section "Le Bar à jeux" & Slider de la Carte du Bar (TDD)
- [ ] Task: Tests unitaires du bar et du slider de menu
  - [ ] Écrire les tests pour la ludothèque (+600 jeux), les états du slider et l'action de téléchargement PDF
  - [ ] Valider l'échec initial des tests (Red Phase)
- [ ] Task: Implémentation de la ludothèque et du slider interactif de menu
  - [ ] Développer la présentation des 600+ jeux avec galerie d'ambiance (`old_photos/bar/`)
  - [ ] Développer le slider tactile gestuel (swipe, pagination, plein écran) avec les 4 planches (`assets/carte/`)
  - [ ] Ajouter la fonctionnalité de téléchargement direct du menu en PDF (format pratique mobile)
  - [ ] Intégrer la barre d'accès rapide mobile au pouce
  - [ ] Valider le passage au vert des tests (Green Phase)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

### Phase 5 : Polissage UI/UX, Accessibilité & Build Final
- [ ] Task: Revue des micro-animations et conformité design
  - [ ] Vérifier les retours tactiles `:active` scale 0.97, durées < 250ms et support `prefers-reduced-motion`
  - [ ] Valider les contrastes WCAG AAA et les cibles tactiles >= 48px
- [ ] Task: Build de production et tests de non-régression
  - [ ] Exécuter la suite complète de tests Vitest
  - [ ] Valider le build de production Vite sans erreur
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)
