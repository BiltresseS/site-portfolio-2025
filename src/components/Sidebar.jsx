import { useState } from "react";
import { FaCalendarAlt, FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import useActiveSection from "../utils/useActiveSection";

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const sectionIds = ["hero", "about", "parcours", "projects", "contact"];
    const activeSection = useActiveSection(sectionIds);

    const menuItems = [
        { icon: <FaHome size={20} />, label: "Accueil", href: "/#hero", id: "hero" },
        { icon: <FaUser size={20} />, label: "À propos", href: "/#about", id: "about" },
        { icon: <FaCalendarAlt size={20} />, label: "Mon parcours", href: "/#parcours", id: "parcours" },
        { icon: <FaProjectDiagram size={20} />, label: "Projets", href: "/#projects", id: "projects" },
        { icon: <FaEnvelope size={20} />, label: "Contact", href: "/#contact", id: "contact" },
    ];

    return (
        <>
            {/* Bouton hamburger mobile */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-accent dark:bg-primary"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Ouvrir le menu"
            >
                <FaBars size={24} />
            </button>

            {/* Sidebar desktop */}
            <nav
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                className={`
                    hidden lg:flex fixed top-0 left-0 h-full bg-accent dark:bg-primary
                    flex-col items-start z-40 transition-all duration-300 ease-in-out
                    ${isExpanded ? "w-48" : "w-14"}
                `}
            >
                <div className="flex flex-col space-y-4 mt-8 w-full px-2">
                    {menuItems.map(({ icon, label, href, id }) => (
                        <a
                            key={label}
                            href={href}
                            className={`
                                flex items-center w-full px-2 py-2 rounded 
                                transition-colors duration-300
                                ${activeSection === id
                                    ? "bg-primary dark:bg-accent text-accent dark:text-primary"
                                    : "hover:bg-primary hover:text-base dark:hover:bg-accent dark:hover:text-base-dark"
                                }
                            `}
                        >
                            <span className="text-xl">{icon}</span>
                            <span
                                className={`
                                    ml-4 whitespace-nowrap overflow-hidden transition-opacity duration-200
                                    ${isExpanded ? "opacity-100" : "opacity-0"}
                                `}
                            >
                                {label}
                            </span>
                        </a>
                    ))}
                </div>
            </nav>

            {/* Sidebar mobile */}
            <div
                className={`
                    fixed top-0 left-0 
                    bg-linear-to-r from-accent dark:from-primary to-accent-light dark:to-primary-dark
                    flex flex-col items-start z-50
                    transform transition-transform duration-300 ease-in-out
                    lg:hidden
                    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
                    w-42
                    pb-12
                    rounded-br-2xl
                `}
            >
                <div className="flex justify-end p-4 w-full">
                    <button
                        onClick={() => setIsMobileOpen(false)}
                        aria-label="Fermer le menu"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>
                <nav className="flex flex-col space-y-4 px-4 w-full">
                    {menuItems.map(({ icon, label, href, id }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => setIsMobileOpen(false)}
                            className={`
                                flex items-center w-full px-2 py-2 rounded 
                                transition-colors duration-300
                                ${activeSection === id ? "bg-primary dark:bg-accent text-accent dark:text-base-dark" : ""}
                            `}
                        >
                            <span className="text-xl">{icon}</span>
                            <span className="ml-4">{label}</span>
                        </a>
                    ))}
                </nav>
            </div>

            {/* Overlay sombre */}
            {isMobileOpen && (
                <div
                    onClick={() => setIsMobileOpen(false)}
                    className="
                        fixed inset-0
                        bg-black/30
                        backdrop-blur-[2px]
                        z-40
                        transition-opacity duration-300 ease-in-out
                        animate-fadeIn
                    "
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default Sidebar;