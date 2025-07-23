import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import sortByDateDesc from "../utils/sortByDate";

export default function Projects() {
    const sortedProjects = sortByDateDesc(projects);

    const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 640 ? 3 : 6);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 640 ? 3 : 6);
            setCurrentPage(1); // reset page on resize
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);

    const currentProjects = sortedProjects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            if (page !== currentPage) {
                setCurrentPage(page);
            }
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="min-h-screen p-8 bg-base dark:bg-base-dark" id="projects">
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-accent">Mon Portfolio</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {currentProjects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/project/${project.id}`}
                        className="
                            block rounded-lg shadow-md hover:shadow-xl
                            transition duration-300 p-4
                            bg-accent-light dark:bg-primary-dark
                        "
                    >
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.client}</p>
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-auto rounded mb-2"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.endDate}</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-2">
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded bg-primary text-white disabled:opacity-50"
                >
                    Précédent
                </button>

                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => goToPage(index + 1)}
                        className={`px-3 py-1 rounded 
                            ${currentPage === index + 1
                                ? "bg-accent text-primary"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded bg-primary text-white disabled:opacity-50"
                >
                    Suivant
                </button>
            </div>
        </section>
    );
}
