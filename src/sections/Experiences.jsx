import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import parcours from "../data/parcours";
import sortByDateDesc from "../utils/sortByDate";

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

    const sortedEvents = sortByDateDesc(parcours);

    return (
        <section
            ref={timelineRef}
            id="parcours"
            className="min-h-screen flex flex-col items-center justify-center py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-500 px-4 sm:px-6 md:px-14"
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">Mon Parcours</h2>
            <div className="relative w-full max-w-4xl">
                {/* Barre verticale */}
                <div className="absolute top-0 bottom-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 left-2 w-1 bg-purple-500"></div>

                <div className="space-y-12">
                    {sortedEvents.map((event, index) => {
                        const color = event.type === "formation" ? "border-blue-500" : "border-green-500";

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
                                    className={`
                                        w-4 h-4 
                                        rounded-full
                                        border-2 ${color}
                                        bg-gray-100 dark:bg-gray-900
                                        absolute
                                        sm:left-1/2 sm:transform sm:-translate-x-1/2
                                        left-0.5 top-4
                                    `}
                                ></div>

                                {/* Carte */}
                                <div
                                    className={`
                                        bg-white dark:bg-gray-800 rounded-lg shadow-md p-6
                                        w-[92%] ml-6 sm:ml-0 sm:w-7/15
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
                                                <p className="mb-2"><span className="font-semibold">Détails:</span> {event.details}</p>
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
