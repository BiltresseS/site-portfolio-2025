import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Modal from "../utils/modal";
import { GlobalContext } from "../context/GlobalContext";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const iconLibraries = { DiIcons, SiIcons, FiIcons, FaIcons };

export default function ProjectDetails() {
    const { id } = useParams();
    const { projects, skills, loading } = useContext(GlobalContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [project, setProject] = useState(null);

    // Trouver le projet correspondant à l'ID dès que les projets sont disponibles
    useEffect(() => {
        if (!loading && projects.length > 0) {
            const found = projects.find(p => p.id === id);
            setProject(found);
            if (found) {
                document.title = `${found.title} | BILTRESSE Sébastien`;
            }
        }
    }, [id, loading, projects]);

    if (loading || !project) {
        return (
            <div className="min-h-screen p-8 bg-base dark:bg-base-dark text-gray-800 dark:text-gray-200 flex justify-center items-center">
                <p>{loading ? "Chargement du projet..." : "Projet non trouvé."}</p>
            </div>
        );
    }

    const { title, client, endDate, duration, images, longDescription, technologies: techList } = project;

    const formatDate = (dateString) => {
        const date = new Date(`${dateString}-01`);
        return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    };

    const getTechDataByName = (name) => {
        return skills.find(item => item.name === name) || null;
    };

    return (
        <div className="min-h-screen p-8 bg-base dark:bg-base-dark text-gray-800 dark:text-gray-200">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                    <h2 className="text-3xl font-bold text-primary dark:text-accent">{title}</h2>
                    <Link to="/#projects" className="text-blue-600 hover:underline text-base sm:text-sm">
                        ← Retour aux projets
                    </Link>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4">Client : {client}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Livré : {formatDate(endDate)} • Durée : {duration}
                </p>

                {/* Swiper Galerie */}
                <div className="relative mb-6">
                    <h3 className="text-xl font-semibold mb-2">Galerie</h3>
                    <div className="relative">
                        {/* Custom arrows */}
                        <button className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10 swiper-button-prev-custom">
                            <FiChevronLeft size={24} />
                        </button>
                        <button className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full z-10 swiper-button-next-custom">
                            <FiChevronRight size={24} />
                        </button>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation={{
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom'
                            }}
                            pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="rounded-lg"
                        >
                            {images.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <img
                                        src={img}
                                        alt={`Image ${idx + 1} de ${title}`}
                                        className="w-full h-60 object-cover rounded shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                                        onClick={() => { setCurrentImageIndex(idx); setIsModalOpen(true); }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="custom-swiper-pagination mt-2 flex justify-center gap-2"></div>
                    </div>
                </div>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    images={images}
                    currentIndex={currentImageIndex}
                    setCurrentIndex={setCurrentImageIndex}
                >
                    <img
                        src={images[currentImageIndex]}
                        alt={`Image agrandie ${currentImageIndex + 1}`}
                        className="max-h-[90vh] max-w-full rounded shadow-lg"
                    />
                </Modal>

                <p className="mb-6">{longDescription}</p>

                <h3 className="text-xl font-semibold mb-2">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                    {techList && techList.length > 0 ? techList.map((techName, index) => {
                        const techData = getTechDataByName(techName);
                        if (!techData) {
                            return (
                                <span
                                    key={index}
                                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm"
                                >
                                    {techName}
                                </span>
                            );
                        }
                        const IconComponent = iconLibraries[techData.library]?.[techData.icon];
                        return (
                            <span
                                key={index}
                                className="flex items-center space-x-1 bg-accent-light dark:bg-primary-dark dark:text-blue-200 px-2 py-1 rounded text-sm"
                            >
                                {IconComponent && <IconComponent size={18} className={techData.color} />}
                                <span>{techData.name}</span>
                            </span>
                        );
                    }) : (
                        <span className="text-gray-600 dark:text-gray-400">Aucune technologie spécifiée.</span>
                    )}
                </div>
            </div>
        </div>
    );
}
