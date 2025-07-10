import { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const menuItems = [
        { icon: <FaHome size={20} />, label: "Accueil", href: "#hero" },
        { icon: <FaUser size={20} />, label: "À propos", href: "#about" },
        { icon: <FaProjectDiagram size={20} />, label: "Projets", href: "#projects" },
        { icon: <FaEnvelope size={20} />, label: "Contact", href: "#contact" },
    ];

    return (
        <>
            {/* Bouton hamburger mobile */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
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
                    hidden lg:flex fixed top-0 left-0 h-full bg-gray-800 text-white
                    flex-col items-start z-40 transition-all duration-300 ease-in-out
                    ${isExpanded ? "w-48" : "w-14"}
                `}
            >
                <div className="flex flex-col space-y-4 mt-8 w-full px-2">
                    {menuItems.map(({ icon, label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="flex items-center w-full px-2 py-2 hover:bg-gray-700 transition-colors rounded"
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

            {/* Overlay sidebar mobile */}
            <div
                className={`
                    fixed top-0 left-0 
                    bg-gray-800 text-white
                    flex flex-col items-start z-50
                    z-50 
                    transform transition-transform duration-300 ease-in-out
                    lm:hidden
                    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
                    w-42
                    pb-12
                    rounded-br-2xl
                `}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsMobileOpen(false)}
                        aria-label="Fermer le menu"
                        className="text-white"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>
                <nav className="flex flex-col space-y-4 px-4">
                    {menuItems.map(({ icon, label, href }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => setIsMobileOpen(false)} // ferme le menu au clic
                            className="flex items-center px-2 py-2 hover:bg-gray-700 rounded transition-colors"
                        >
                            <span className="text-xl">{icon}</span>
                            <span className="ml-4">{label}</span>
                        </a>
                    ))}
                </nav>
            </div>

            {/* Overlay sombre pour fermer menu mobile quand on clique à l’extérieur */}
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
