import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const timelineEvents = [
    {
        type: "job",
        startDate: "2023-01",
        endDate: "2025-02",
        title: "Développeur React-Native",
        location: "Mainteno (Fernelmont)",
        description: "Développement de l'application mobile Mainteneo pour la gestion des interventions frigorifiques.",
        details: "Développement et amélioration d'une application mobile en React-Native intégrée à Firebase, amélioration de la gestion des données en temps réel et maintenance d'un site web et d'une application web liée à cette application. Participation active à l'élaboration d'une strategie marketing sur réseaux sociaux et de mailings. Résolution de conflits de DNS, communication clients et SAV. Petits développements divers sur WebDev et WinDev Mobile.",
        skills: ["React Native", "Firebase", "Expo", "Vue", "WordPress", "Node", "JavaScript", "PcSoft WebDev", "PcSoft Windev Mobile", "LinkedIn", "Facebook", "Instagram", "OVH", "Amazon AWS"]
    },
    {
        type: "job",
        startDate: "2018-06",
        endDate: "2020-07",
        title: "Graphiste & Webdesigner",
        location: "CPAS Namur (Jambes)",
        description: "Refonte complète du site web institutionnel et de la charte graphique.",
        details: "Refonte graphique du site web du CPAS de Namur, création d'une nouvelle identité visuelle incluant le logo, la palette de couleurs et les typographies. Mise en page des contenus selon les standards d'accessibilité et formation du personnel à l'utilisation du CMS. Création de différentds visuels utilisés par le CPAS de Namur",
        skills: ["PcSoft WebDev", "Illustrator", "Photoshop", "HTML", "CSS", "Notepad++"]
    },
    {
        type: "job",
        startDate: "2015-01",
        endDate: "2015-12",
        title: "Webdesigner Freelance",
        location: "MBA Group (Bruxelles)",
        description: "Création de sites web vitrines et mise en place de stratégies de communication digitale.",
        details: "Conception et développement de deux sites web pour des filiales du groupe, création de pages Facebook professionnelles, élaboration et mise en œuvre d'une stratégie marketing digitale pour renforcer leur présence en ligne.",
        skills: ["Marketing Digital", "SEO", "Facebook Ads"]
    },
    {
        type: "job",
        startDate: "2011-01",
        endDate: "2012-12",
        title: "Graphiste & Maquettiste",
        location: "Média Animation (Kraainem)",
        description: "Maquettage et mise en page pour des publications et événements culturels.",
        details: "Réalisation de la mise en page du livre « Tournez Jeunesse », création de supports de communication visuelle pour le festival « À Films Ouverts », production de visuels adaptés aux différents canaux de diffusion (print et web).",
        skills: ["InDesign", "Photoshop", "Illustrator"]
    },
    {
        type: "job",
        startDate: "2009-07",
        endDate: "2009-08",
        title: "Stage en animation & modélisation 3D",
        location: "Réal Reality (Anderlecht)",
        description: "Participation à la création d'assets et d'animations 3D pour un court-métrage.",
        details: "Modélisation et texturisation d'assets 3D pour l'animation, gestion des rendus et participation au pipeline de production du court-métrage. Certification Autodesk Maya en cours de stage.",
        skills: ["Autodesk Maya", "Texturing", "Lighting"]
    },
    {
        type: "formation",
        startDate: "2022-09",
        endDate: "2023-06",
        title: "Formation Web Development",
        location: "TechnofuturTIC (Gosselies)",
        description: "Formation intensive en développement web front-end et back-end orientée JavaScript.",
        details: "Apprentissage approfondi des technologies modernes du web, incluant React, Node.js, Angular et les bases de données NoSQL. Participation à des projets pratiques en équipe selon les méthodologies Scrum pour développer des applications web complètes.",
        skills: ["React", "Node.js", "Angular", "NestJS", "MongoDB"]
    },
    {
        type: "formation",
        startDate: "2007-09",
        endDate: "2009-06",
        title: "Graduat en communication visuelle",
        location: "IFAPME (Uccle)",
        description: "Études en infographie, modélisation et animation 3D, mise en page et photographie.",
        details: "Formation pluridisciplinaire couvrant les logiciels de création graphique, la modélisation 3D et l'animation, les bases du développement web ainsi que la photographie, avec une mise en pratique sur des projets créatifs réels.",
        skills: ["Photoshop", "Illustrator", "Maya", "HTML", "CSS"]
    },
    {
        type: "formation",
        startDate: "2005-09",
        endDate: "2007-06",
        title: "Bachelier artistique",
        location: `École de l'image "Le 75" (Woluwe-St-Lambert)`,
        description: "Formation artistique orientée graphisme, mise en page et photographie.",
        details: "Programme axé sur la création visuelle et l'expression artistique incluant dessin, graphisme assisté par ordinateur, mise en page, typographie et photographie, ainsi que des cours d'histoire de l'art pour enrichir la culture visuelle.",
        skills: ["Dessin", "Photographie", "Graphisme"]
    },
    {
        type: "formation",
        startDate: "1996-09",
        endDate: "2005-06",
        title: "CESS Artistique",
        location: "Académie Royale des Beaux-Arts (Bruxelles)",
        description: "Enseignement secondaire artistique avec une spécialisation en dessin et arts visuels.",
        details: "Développement de compétences artistiques fondamentales, incluant dessin, peinture et sculpture, avec des cours de culture générale et d'histoire de l'art, préparant à une poursuite d'études supérieures en arts visuels.",
        skills: ["Dessin", "Peinture", "Sculpture"]
    },
];


const formatDateRange = (start, end) => {
    const options = { year: 'numeric', month: 'long' };
    const startDate = new Date(`${start}-01`);
    const endDate = new Date(`${end}-01`);
    return `${startDate.toLocaleDateString('fr-FR', options)} - ${endDate.toLocaleDateString('fr-FR', options)}`;
};

const Timeline = () => {
    const [visible, setVisible] = useState(false);
    const timelineRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        if (timelineRef.current) {
            observer.observe(timelineRef.current);
        }
        return () => {
            if (timelineRef.current) observer.unobserve(timelineRef.current);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = () => setHoveredIndex(null);
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const sortedEvents = [...timelineEvents].sort((a, b) => {
        const aDate = new Date(`${a.startDate}-01`);
        const bDate = new Date(`${b.startDate}-01`);
        return bDate - aDate; // décroissant : plus récent en haut
    });

    return (
        <section
            ref={timelineRef}
            id="parcours"
            className="min-h-screen flex flex-col items-center justify-center py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 px-4 sm:px-6 md:px-14"
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">Mon Parcours</h2>
            <div className="relative w-full max-w-4xl">
                {/* Barre verticale */}
                <div className="absolute top-0 bottom-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 left-6.5 w-1 bg-purple-500"></div>

                <div className="space-y-12">
                    {sortedEvents.map((event, index) => {
                        const color = event.type === "formation" ? "bg-blue-500" : "bg-green-500";

                        return (
                            <div
                                key={index}
                                className={`
                                    relative flex flex-col sm:flex-row items-center
                                    ${event.type === "formation" ? 'sm:justify-start' : 'sm:justify-end'}
                                    transition-opacity duration-1000
                                    ${visible ? 'opacity-100' : 'opacity-0'}
                                `}
                            >
                                {/* Point */}
                                <div
                                    className={`w-6 h-6 ${color} rounded-full
                                        absolute
                                        sm:left-1/2 sm:transform sm:-translate-x-1/2
                                        left-4 top-4
                                    `}
                                ></div>

                                {/* Carte */}
                                <div
                                    className={`
                                        bg-white dark:bg-gray-800 rounded-lg shadow-md p-6
                                        w-[80%] ml-10 sm:ml-0 sm:w-7/15
                                        sm:static relative
                                    `}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onClick={(e) => {
                                        e.stopPropagation(); // évite les doublons d'événements sur le document
                                        setHoveredIndex(index);
                                    }}
                                >
                                    <div className="flex items-center mb-2">
                                        {event.type === "formation" ? (
                                            <FaGraduationCap className="text-blue-500 mr-2" />
                                        ) : (
                                            <FaBriefcase className="text-green-500 mr-2" />
                                        )}
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{event.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{formatDateRange(event.startDate, event.endDate)}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{event.location}</p>
                                    <p className="text-gray-700 dark:text-gray-300">{event.description}</p>

                                    {/* Popover animé Framer Motion */}
                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="
                                                    absolute top-full mt-2 z-20
                                                    w-64 p-4 rounded-lg shadow-lg
                                                    bg-white dark:bg-gray-800
                                                    border border-gray-200 dark:border-gray-700
                                                    text-sm text-gray-700 dark:text-gray-300
                                                    ml-2 sm:ml-0
                                                "
                                            >
                                                <p><span className="font-semibold">Détails:</span> {event.details}</p>
                                                {event.skills && (
                                                    <p><span className="font-semibold">Compétences:</span> {event.skills.join(", ")}</p>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
