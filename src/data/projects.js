const projects = [
    {
        id: 1,
        title: "Portfolio React 1",
        client: "Projet personnel",
        endDate: "2025-07",
        duration: "2 semaines",
        description: "Portfolio professionnel en React et Tailwind.",
        longDescription: "Ce projet est un portfolio complet développé en React avec Tailwind CSS, incluant une architecture modulaire et des transitions fluides pour mettre en valeur les projets personnels et professionnels. Il comprend également une intégration à une API backend et des optimisations d'accessibilité.",
        images: ["https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg"],
        technologies: ["React", "Vite"],
    },
    {
        id: 2,
        title: "API Spring Boot 2",
        client: "Projet personnel",
        endDate: "2024-08",
        duration: "1 semaine",
        description: "API RESTful Spring Boot pour la gestion de projets.",
        longDescription: "API REST complète pour gérer des projets, utilisateurs, authentification JWT, pagination, et filtrage, construite avec Spring Boot et PostgreSQL pour une architecture scalable prête pour un front-end React ou mobile.",
        images: ["https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp"],
        technologies: ["Node.js", "Firebase"],
    },
    {
        id: 3,
        title: "Application Vue 3",
        client: "Projet personnel",
        endDate: "2024-12",
        duration: "2 semaines",
        description: "Application Vue responsive pour tests et apprentissage.",
        longDescription: "Application Vue développée pour s'entraîner sur Vue Router, Vuex et composition API, avec un design responsive et une architecture évolutive permettant l'intégration de nouvelles fonctionnalités.",
        images: ["https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg"],
        technologies: ["Vue"],
    },
    {
        id: 4,
        title: "Portfolio React 4",
        client: "Projet personnel",
        endDate: "2023-07",
        duration: "2 semaines",
        description: "Portfolio professionnel en React et Tailwind.",
        longDescription: "Ce projet est un portfolio complet développé en React avec Tailwind CSS, incluant une architecture modulaire et des transitions fluides pour mettre en valeur les projets personnels et professionnels. Il comprend également une intégration à une API backend et des optimisations d'accessibilité.",
        images: ["https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg"],
        technologies: ["React", "Vite"],
    },
    {
        id: 5,
        title: "API Spring Boot 5",
        client: "Projet personnel",
        endDate: "2022-08",
        duration: "1 semaine",
        description: "API RESTful Spring Boot pour la gestion de projets.",
        longDescription: "API REST complète pour gérer des projets, utilisateurs, authentification JWT, pagination, et filtrage, construite avec Spring Boot et PostgreSQL pour une architecture scalable prête pour un front-end React ou mobile.",
        images: ["https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp"],
        technologies: ["Node.js", "Firebase"],
    },
    {
        id: 6,
        title: "Application Vue 6",
        client: "Projet personnel",
        endDate: "2022-12",
        duration: "2 semaines",
        description: "Application Vue responsive pour tests et apprentissage.",
        longDescription: "Application Vue développée pour s'entraîner sur Vue Router, Vuex et composition API, avec un design responsive et une architecture évolutive permettant l'intégration de nouvelles fonctionnalités.",
        images: ["https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg"],
        technologies: ["Vue"],
    },
    {
        id: 7,
        title: "Portfolio React 7",
        client: "Projet personnel",
        endDate: "2021-07",
        duration: "2 semaines",
        description: "Portfolio professionnel en React et Tailwind.",
        longDescription: "Ce projet est un portfolio complet développé en React avec Tailwind CSS, incluant une architecture modulaire et des transitions fluides pour mettre en valeur les projets personnels et professionnels. Il comprend également une intégration à une API backend et des optimisations d'accessibilité.",
        images: ["https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg"],
        technologies: ["React", "Vite"],
    },
    {
        id: 8,
        title: "API Spring Boot 8",
        client: "Projet personnel",
        endDate: "2020-08",
        duration: "1 semaine",
        description: "API RESTful Spring Boot pour la gestion de projets.",
        longDescription: "API REST complète pour gérer des projets, utilisateurs, authentification JWT, pagination, et filtrage, construite avec Spring Boot et PostgreSQL pour une architecture scalable prête pour un front-end React ou mobile.",
        images: ["https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp", "https://fr.react.dev/images/home/videos/rethinking.jpg", "https://fr.react.dev/images/home/videos/rn.jpg", "https://fr.react.dev/images/home/videos/documentary.webp"],
        technologies: ["Node.js", "Firebase"],
    },
];

export default projects;