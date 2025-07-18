import { useState, useEffect, useRef } from "react";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import skills from "../data/skills";
import technologies from "../data/technologies";

const iconLibraries = {
    DiIcons,
    SiIcons,
    FiIcons,
    FaIcons,
};

const About = () => {
    const [visible, setVisible] = useState(false);
    const aboutRef = useRef(null);

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
        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }
        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);

    return (
        <section
            ref={aboutRef}
            id="about"
            className="min-h-screen flex flex-col items-center justify-center py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-4 sm:px-6 md:px-14"
        >
            <div className="max-w-3xl text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">À propos</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-justify">
                    Jeune wallon passionné par l’informatique, la culture populaire et la musique, je suis motivé par la création sous toutes ses formes. Curieux et touche-à-tout, je m’adapte facilement aux besoins des projets tout en travaillant de manière autonome ou en équipe. Grâce à un éventail de compétences allant du design graphique au développement web et mobile, je m’efforce de transformer des idées en solutions visuelles et techniques de qualité. Mon objectif : allier créativité et efficacité pour développer des projets à forte valeur ajoutée et générer des opportunités mutuellement enrichissantes.
                </p>
            </div>

            {/* Compétences et technologies en deux colonnes */}
            <div className="w-full max-w-5xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 mx-4 sm:mx-8 md:mx-14">

                {/* Logiciels */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300 text-center">Logiciels</h3>
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-start space-y-1">
                            <div className="flex items-center space-x-2">
                                {
                                    (() => {
                                        const IconComponent = iconLibraries[skill.library][skill.icon];
                                        return <IconComponent size={24} className={skill.color} />;
                                    })()
                                }
                                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                <div
                                    className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-in-out"
                                    style={{ width: visible ? `${skill.level}%` : "0%" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300 text-center">Technologies</h3>
                    {technologies.map((tech) => (
                        <div key={tech.name} className="flex flex-col items-start space-y-1">
                            <div className="flex items-center space-x-2">
                                {
                                    (() => {
                                        const IconComponent = iconLibraries[tech.library][tech.icon];
                                        return <IconComponent size={24} className={tech.color} />;
                                    })()
                                }
                                <span className="font-medium text-gray-800 dark:text-gray-200">{tech.name}</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                <div
                                    className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000 ease-in-out"
                                    style={{ width: visible ? `${tech.level}%` : "0%" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
