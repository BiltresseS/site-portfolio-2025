import { Link } from "react-router-dom";
import projects from "../data/projects";
import sortByDateDesc from "../utils/sortByDate";

export default function Projects() {
    const sortedProjects = sortByDateDesc(projects);

    return (
        <section className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900" id="projects">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Mon Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sortedProjects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/project/${project.id}`}
                        className="
                            block rounded-lg shadow-md hover:shadow-xl
                            transition duration-300 p-4
                            bg-gray-200 dark:bg-gray-800
                        "
                    >
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.client}</p>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto rounded mb-2"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.endDate}</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}