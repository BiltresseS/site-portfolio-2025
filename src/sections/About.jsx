import { useState, useEffect, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";

const iconLibraries = {
    DiIcons,
    SiIcons,
    FiIcons,
    FaIcons,
};

const About = () => {
    const [visible, setVisible] = useState(false);
    const [skillsList, setSkillsList] = useState([]);
    const [technologiesList, setTechnologiesList] = useState([]);
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

    useEffect(() => {
        const fetchSkills = async () => {
            const snapshot = await getDocs(collection(db, "skills"));
            const allData = snapshot.docs.map(doc => doc.data());

            const orderedSkills = allData
                .filter(item => item.type === "skill")
                .sort((a, b) => a.order - b.order);

            const orderedTechnos = allData
                .filter(item => item.type === "technology")
                .sort((a, b) => a.order - b.order);

            setSkillsList(orderedSkills);
            setTechnologiesList(orderedTechnos);
        };

        fetchSkills();
    }, []);

    return (
        <section
            ref={aboutRef}
            id="about"
            className="min-h-screen flex flex-col items-center justify-center bg-base dark:bg-base-dark transition-colors duration-500 pb-16"
        >
            {/* Encadré */}
            <div className="lg:max-w-5xl w-full lg:rounded-xl p-8 lg:p-16 bg-encadre dark:bg-encadre-dark shadow-md transition-colors duration-500">

                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-6 text-primary dark:text-accent">
                        À propos
                    </h2>
                    <p className="text-lg dark:text-dark leading-relaxed mb-8 text-justify">
                        Jeune wallon passionné par l’informatique, la culture populaire et la musique, je suis motivé par la création sous toutes ses formes. Curieux et touche-à-tout, je m’adapte facilement aux besoins des projets tout en travaillant de manière autonome ou en équipe. Grâce à un éventail de compétences allant du design graphique au développement web et mobile, je m’efforce de transformer des idées en solutions visuelles et techniques de qualité. Mon objectif : allier créativité et efficacité pour développer des projets à forte valeur ajoutée et générer des opportunités mutuellement enrichissantes.
                    </p>
                </div>

                {/* Compétences et technologies en deux colonnes */}
                <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Logiciels */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold mb-4 text-primary dark:text-accent text-center">Logiciels</h3>
                        {skillsList.map((skill) => {
                            const IconComponent = iconLibraries[skill.library]?.[skill.icon];
                            return (
                                <div key={skill.name} className="flex flex-col items-start space-y-1">
                                    <div className="flex items-center space-x-2">
                                        {IconComponent && <IconComponent size={24} className={skill.color} />}
                                        <span className="font-medium dark:text-dark">{skill.name}</span>
                                    </div>
                                    <div className="w-full bg-encadre-slider rounded-full h-3">
                                        <div
                                            className={`h-3 rounded-full transition-all duration-1000 ease-in-out 
                                                ${visible ? 'w-full' : 'w-0'}
                                                ${visible ? 'bg-gradient-to-r from-primary to-primary-dark dark:from-accent dark:to-accent-light' : ''}
                                            `}
                                            style={{ width: visible ? `${skill.level}%` : "0%" }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold mb-4 text-primary dark:text-accent text-center">Technologies</h3>
                        {technologiesList.map((tech) => {
                            const IconComponent = iconLibraries[tech.library]?.[tech.icon];
                            return (
                                <div key={tech.name} className="flex flex-col items-start space-y-1">
                                    <div className="flex items-center space-x-2">
                                        {IconComponent && <IconComponent size={24} className={tech.color} />}
                                        <span className="font-medium dark:text-dark">{tech.name}</span>
                                    </div>
                                    <div className="w-full bg-encadre-slider rounded-full h-3">
                                        <div
                                            className={`h-3 rounded-full transition-all duration-1000 ease-in-out 
                                                ${visible ? 'w-full' : 'w-0'}
                                                ${visible ? 'bg-gradient-to-r from-primary to-primary-dark dark:from-accent dark:to-accent-light' : ''}
                                            `}
                                            style={{ width: visible ? `${tech.level}%` : "0%" }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
