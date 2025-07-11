import { useState, useEffect, useRef } from "react";
import { DiVisualstudio, DiReact, DiAngularSimple, DiNodejsSmall } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import {
    SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobedreamweaver,
    SiBlender, SiAutodeskmaya, SiUnity, SiNotepadplusplus, SiOpenai, SiCanva,
    SiHtml5, SiCss3, SiJavascript, SiVite, SiFirebase, SiNestjs, SiExpress
} from "react-icons/si";
import pcsoftLogo from '../assets/pcsoft.png';
import RestApiLogo from '../assets/restapi.png'

const skills = [
    { name: "Visual Studio Code", icon: <DiVisualstudio size={24} className="text-blue-500" />, level: 90 },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={24} className="text-orange-500" />, level: 85 },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={24} className="text-blue-400" />, level: 85 },
    { name: "Adobe InDesign", icon: <SiAdobeindesign size={24} className="text-pink-500" />, level: 80 },
    { name: "Adobe Dreamweaver", icon: <SiAdobedreamweaver size={24} className="text-green-500" />, level: 70 },
    { name: "Blender", icon: <SiBlender size={24} className="text-orange-400" />, level: 65 },
    { name: "Autodesk Maya", icon: <SiAutodeskmaya size={24} className="text-green-600" />, level: 60 },
    { name: "Unity", icon: <SiUnity size={24} className="text-gray-800 dark:text-gray-300" />, level: 70 },
    { name: "PcSoft WebDev", icon: <img src={pcsoftLogo} alt="PcSoft" className="w-6 h-6 rounded" />, level: 75 },
    { name: "PcSoft WinDev Mobile", icon: <img src={pcsoftLogo} alt="PcSoft" className="w-6 h-6 rounded" />, level: 70 },
    { name: "Notepad++", icon: <SiNotepadplusplus size={24} className="text-green-500" />, level: 80 },
    { name: "ChatGPT", icon: <SiOpenai size={24} className="text-emerald-500" />, level: 75 },
    { name: "Canva", icon: <SiCanva size={24} className="text-blue-400" />, level: 85 },
];

const technologies = [
    { name: "HTML", icon: <SiHtml5 size={24} className="text-orange-600" />, level: 95 },
    { name: "CSS", icon: <SiCss3 size={24} className="text-blue-600" />, level: 90 },
    { name: "JavaScript", icon: <SiJavascript size={24} className="text-yellow-400" />, level: 90 },
    { name: "React", icon: <DiReact size={24} className="text-cyan-400" />, level: 85 },
    { name: "React Native", icon: <DiReact size={24} className="text-cyan-500" />, level: 80 },
    { name: "Angular", icon: <DiAngularSimple size={24} className="text-red-600" />, level: 75 },
    { name: "Vue", icon: <FaVuejs size={24} className="text-green-500" />, level: 75 },
    { name: "Vite", icon: <SiVite size={24} className="text-purple-600" />, level: 80 },
    { name: "Node.js", icon: <DiNodejsSmall size={24} className="text-green-700" />, level: 80 },
    { name: "Express", icon: <SiExpress size={24} className="text-gray-700  dark:text-gray-300" />, level: 75 },
    { name: "NestJS", icon: <SiNestjs size={24} className="text-red-600" />, level: 70 },
    { name: "REST", icon: <img src={RestApiLogo} alt="Rest Api" className="w-6 h-6 rounded" />, level: 85 },
    { name: "Firebase", icon: <SiFirebase size={24} className="text-yellow-600" />, level: 75 },
];

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
                                {skill.icon}
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
                                {tech.icon}
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
