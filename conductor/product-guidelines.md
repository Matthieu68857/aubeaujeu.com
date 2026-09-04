# Directives Produit & UX - Au Beau Jeu (ABJ)

Ce document formalise les exigences graphiques, ergonomiques et techniques du projet Au Beau Jeu, nourries par les compétences de design d'élite (*Frontend Design*, *Emil Kowalski Design Engineering* et *UI/UX Pro Max*).

---

## 1. Identité Visuelle & Palette Officielle
L'ambiance générale évoque un retour en enfance chaleureux, convivial et ludique sans tomber dans les clichés enfantins ou les stéréotypes de templates SaaS génériques.

- **Vert-Bleu (Primaire) :** `#88C4B9` — Utilisé pour les actions clés, réassurance, accents de navigation et bordures d'emphase.
- **Rose (Accent / Secondaire) :** `#D994B6` — Badges chaleureux, highlights et réveils visuels.
- **Bleu clair :** `#79B4D9` — Éléments d'ambiance, tags d'information et contrastes doux.
- **Rouge Mauve :** `#CF7A86` — Badges distinctifs et micro-interactions.
- **Jaune Soleil :** `#F9CE8C` — Énergie, étoiles/badges ludiques, puces d'appel à l'action.
- **Blanc Cassé (Fond principal) :** `#F6F6F2` — Fond chaleureux et texturé évitant la blancheur clinique.
- **Gris Foncé (Texte principal) :** `#333333` — Contraste garanti supérieur à 7:1 sur fond blanc cassé (conforme WCAG AAA).

---

## 2. Typographie & Traitement Éditorial (Anti-Clichés)
- **Typographie :** Choix d'une police sans-serif ronde, amicale et géométrique (ex: *Outfit* ou *Plus Jakarta Sans* / *Nunito*) avec une échelle modulaire stricte.
- **Interdictions de clichés IA :**
  - Pas de sous-titres artificiels en MAJUSCULES espacées systématiques (`EYEBROW TEXT`).
  - Pas de texte monochrome noir pur `#000` agressif.
  - Pas d'emojis utilisés comme icônes d'interface : utilisation exclusive d'icônes vectorielles SVG soignées (Lucide Icons).
- **Ton & Voix :** Vouvoiement complice, chaleureux et direct ("Bienvenue chez vous ! Venez découvrir plus de 600 jeux et partager un bon moment.").

---

## 3. Ergonomie Mobile-First & Directives Tactiles
- **Empreinte tactile minimale :** Toutes les zones cliquables (boutons, liens, pastilles de pagination) respectent une zone tactile minimale de 44x44px (recommandé 48x48px).
- **Horaires visibles immédiatement :** Bannir l'anti-pattern des horaires dissimulés dans un sous-menu. Les horaires et le statut d'ouverture (ouvert/fermé) doivent être identifiables en moins de 2 secondes dès le Hero.
- **Réservation Zenchef :** Intégration en modal/iframe dédié sans friction, directement déclenché depuis le bouton Hero.
- **Barre d'action rapide au pouce :** Sur mobile, maintien des raccourcis clés (Horaires, Réserver, Menu bar) accessibles sans gymnastique digitale.

---

## 4. Physique du Mouvement & Micro-Animations (Framework Emil Kowalski)
- **Règle d'or :** L'animation ne doit jamais ralentir l'interaction. Durée des micro-interactions comprise entre **150ms et 250ms**.
- **Courbes d'accélération sur-mesure :**
  - Entrées / interactions UI : `cubic-bezier(0.23, 1, 0.32, 1)` (ease-out dynamique).
  - Éviter absolument le `ease-in` qui donne une sensation de lenteur au démarrage.
- **Retours tactiles (`:active`) :**
  - Tous les boutons et cartes interactives adoptent `transform: scale(0.97)` lors de l'état `:active`.
- **Règles d'apparition :**
  - Ne jamais animer un élément depuis `scale(0)` (contre-nature). Toujours débuter à `scale(0.95)` avec `opacity: 0`.
- **Performance matérielle :**
  - Animer **uniquement** `transform` et `opacity` pour garantir un rendu 60/120 FPS sur GPU sans recalcul de layout (reflow).
- **Conditionnement tactile & accessibilité :**
  - Les effets de survol (`:hover`) sont strictement encapsulés sous `@media (hover: hover) and (pointer: fine)`.
  - Prise en charge stricte de `@media (prefers-reduced-motion: reduce)` avec désactivation des déplacements physiques au profit de simples fondus d'opacité.

---

## 5. Spécifications des Composants Principaux
1. **Hero Section :**
   - Présentation identitaire avec logo officiel et mascotte OBO animée subtilement.
   - Bloc Horaires d'ouverture mis en valeur.
   - Module / Bouton de réservation Zenchef.
   - Les 3 CTAs indispensables : "La Boutique" (ancre), "Le Bar à jeux" (ancre), "Le TCG" (lien externe vers `https://tcg-arena.aubeaujeu.com/`).
2. **Section La Boutique :**
   - Récit des 9 ans d'histoire de la boutique lilloise.
   - Carrousel / Grille responsive mettant en valeur les photos réelles issues de `old_photos/boutique/`.
3. **Section Le Bar à Jeux & Menu Interactif :**
   - Mise en avant de la collection de +600 jeux et de l'ambiance avec les photos de `old_photos/bar/`.
   - **Slider interactif de la Carte du Bar :** Affichage optimisé des 4 pages issues de `assets/carte/` (`PAGE 1.png`, `PAGE 1 verso.png`, `PAGE 2.png`, `PAGE 2 verso.png`).
   - Gestuelle tactile fluide (swipe horizontal avec détection de vélocité), pagination claire par indicateurs, zoom/plein écran au clic.
   - Bouton d'action directe pour télécharger la carte en PDF.

