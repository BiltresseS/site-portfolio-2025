# Portfolio & CV en ligne

Ce projet est un **CV en ligne et portfolio** destiné à accompagner mes recherches d'emploi, en présentant mes compétences, mes projets et mon parcours de manière moderne et responsive.

Il est écrit dans des technologies que je maîtrise et que j'apprécie :
- **React** (framework d'interface)
- **Vite** (environnement de build ultra-rapide)
- **Tailwind CSS** (stylisation utilitaire)
- **Firebase** (hébergement et futur back-end léger)

Ce projet me permet également de maintenir mes compétences en développement front-end et back-end tout en servant d'outil professionnel accessible sur tous supports.

---

## 📜 Historique des mises à jour

- **2025-07-16**  
  v0.0.5
  
  - Modification de la page ProjectDetails.jsx pour devenir dynamique avec import depuis la table projects.js
  - Modification de la table projects.js afin d'y intégrer les données nécessaires pour la page ProjectDetails.jsx : 
    - Duration
    - Image qui devient Images (et un array => possibilité d'avoir plusieurs images)
    - Technologies
  - Modification de Projects.jsx pour afficher la première image de projects.images (vu que c'est devenu un array)
  - Isolation des tables skills et technologies de la page About.jsx et transformation en 2 modules importables dans About.jsx et ProjectDetails.jsx (afin d'avoir les petites icônes sans à devoir les importer manuellement dans chaque page) => plus tard, ces tables pourront être remplies dynamiquement lors de l'ajout d'un projet sans pour autant devoir remettre les imports d'icônes en dur dans les 2 pages
  - Création d'une gallerie d'image défilante dans ProjectDetails.jsx. 2 options : une gallerie native en Tailwind/Vanilla ou utilisation de SwiperJs. SwiperJs a gagné...
  - Création d'un module de modale pour l'affichage des images de la gallerie

- **2025-07-15**  
  v0.0.4
  
  - Optimisation de la page "Mon parcours" afin de proposer un visuel plus proche de mon CV
  - Optimisation de la page "Mes projets" avec apparition du commanditaire du projet et de la date du projet sur la preview
  - Tri chronologique des projets (isolation d'une fonction de tri présente dans "Mon Parcours" et transformation en un module importable n'importe où sur le site)
  - Isolation de la table de mon parcours et transformation en un module importable en vue de simplifier la transformation en import de base de données plus tard

- **2025-07-14**  
  v0.0.3
  
  - Création et remplissage de la page "Mon parcours"
  - Centralisation et optimisation des styles CSS liés aux animations dans la page tailwind.config.mjs (renommée depuis tailwind.config.js)

- **2025-07-11**  
  v0.0.2
  
  - Correction d'un bug d'ancres m'empêchant de revenir aux sections principales une fois dans une page de projet
  - Remplissage de la section "A propos" avec sliders de technologies maîtrisées et de programmes utilisés dynamiques
  - Ajout d'un mode dark automatique sur toute l'application

- **2025-07-11**  
  v0.0.1
  
  Remplissage de la section "Hero" (page d'accueil) avec framer-motion pour le défilement des options de carrières

- **2025-07-10**  
  v0.0.0

  Création du projet et mise en ligne initiale sur GitHub.  
  Structure de base : React + Vite + Tailwind, sidebar responsive (menu hamburger mobile + sidebar desktop), configuration du repo.

---

## 🚀 Objectifs à venir

- Ajout d'un système de back-office via Firebase pour gérer les contenus.
- Ajout d'une section "Projets" dynamique connectée à Firestore.
- Mise en place d'un système multilingue (FR/EN).
- Amélioration SEO et accessibilité.

---

## 📂 Déploiement

Ce projet sera accessible en ligne dès sa stabilisation via **Firebase Hosting**.

---

**Merci de votre visite !**

Si vous êtes recruteur ou collaborateur potentiel, n'hésitez pas à me contacter pour en savoir plus sur mon profil ou mes projets.

📫 **Contact** : [biltresse.sebastien [at] gmail.com](mailto:biltresse.sebastien@gmail.com)