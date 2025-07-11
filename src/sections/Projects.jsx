import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Projects() {
    return (
        <section className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900" id="projects">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Mes Projets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/project/${project.id}`}
                        className="block bg-white rounded-lg shadow hover:shadow-lg transition p-4 bg-gray-200 dark:bg-gray-800"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded mb-4 w-full h-48 object-cover"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project.title}</h3>
                        <p className="text-gray-600 text-sm mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}