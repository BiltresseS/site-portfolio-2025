import { useState, useEffect, useRef, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
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
    const { skills, globalContent } = useContext(GlobalContext);
    const aboutData = globalContent?.about;

    const [visible, setVisible] = useState(false);
    const aboutRef = useRef(null);

    const orderedSkills = skills
        .filter((s) => s.type === "skill")
        .sort((a, b) => a.order - b.order);

    const orderedTechnologies = skills
        .filter((s) => s.type === "technology")
        .sort((a, b) => a.order - b.order);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );
        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);

    return (
        <section
            ref={aboutRef}
            id="about"
            className="min-h-screen flex flex-col items-center justify-center bg-base dark:bg-base-dark transition-colors duration-500 pb-16"
        >
            <div className="lg:max-w-5xl w-full lg:rounded-xl p-8 lg:p-16 bg-encadre dark:bg-encadre-dark shadow-md transition-colors duration-500">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-6 text-primary dark:text-accent">
                        À propos
                    </h2>
                    <p className="text-lg dark:text-dark leading-relaxed mb-8 text-justify">
                        {aboutData?.intro || "Chargement..."}
                    </p>
                </div>

                {/* Compétences et technologies en deux colonnes */}
                <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Logiciels */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold mb-4 text-primary dark:text-accent text-center">Logiciels</h3>
                        {orderedSkills.map((skill) => {
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
                        {orderedTechnologies.map((tech) => {
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
