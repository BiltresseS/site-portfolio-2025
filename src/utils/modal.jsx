import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Modal({
    isOpen,
    onClose,
    children,
    images = [],
    currentIndex = 0,
    setCurrentIndex
}) {
    if (!isOpen) return null;

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <>
            {/* Overlay flou semi-transparent */}
            <div
                onClick={onClose}
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

            {/* Modale centrée */}
            <div
                onClick={onClose}
                className="
                    fixed inset-0 z-50
                    flex justify-center items-center
                    p-4
                "
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="
                        relative
                        max-h-[90vh] max-w-[90vw]
                        flex justify-center items-center
                        bg-base-dark dark:bg-encadre-dark
                        rounded shadow-lg
                        p-2 pl-12 pr-12
                        animate-fadeIn
                    "
                >
                    {/* Bouton de fermeture */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-text-dark dark:text-gray-200 hover:text-red-500 transition text-2xl"
                    >
                        <FiX />
                    </button>

                    {/* Flèche gauche */}
                    {images.length > 1 && (
                        <button
                            onClick={handlePrev}
                            className="absolute left-1 top-1/2 transform -translate-y-1/2 text-text-dark dark:text-gray-200 hover:text-blue-500 transition text-3xl p-1"
                        >
                            <FiChevronLeft />
                        </button>
                    )}

                    {/* Image ou contenu */}
                    {children}

                    {/* Flèche droite */}
                    {images.length > 1 && (
                        <button
                            onClick={handleNext}
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 text-text-dark dark:text-gray-200 hover:text-blue-500 transition text-3xl p-1"
                        >
                            <FiChevronRight />
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
