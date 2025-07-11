import { useParams } from 'react-router-dom';

export default function ProjectDetails() {
    const { id } = useParams();

    return (
        <div className="min-h-screen p-8 bg-white bg-gray-100 dark:bg-gray-900">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Détails du projet</h2>
            <p>Affichage des détails pour le projet ID : {id}</p>
            <p>Cette page sera remplie plus tard avec les données dynamiques.</p>
        </div>
    );
}