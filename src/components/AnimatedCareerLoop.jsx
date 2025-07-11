import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const careers = [
    { text: "Graphiste", color: "text-pink-400", font: "font-serif" },
    { text: "Metteur en page", color: "text-blue-400", font: "font-sans" },
    { text: "Designer Web", color: "text-purple-400", font: "font-mono" },
    { text: "Développeur Web", color: "text-green-400", font: "font-sans" },
    { text: "Développeur d'app mobiles", color: "text-yellow-400", font: "font-serif" },
];

export default function AnimatedCareerLoop() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % careers.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    const current = careers[index];

    return (
        <div className="relative h-12 w-full flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.span
                    key={current.text}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute ${current.color} ${current.font} text-2xl sm:text-3xl text-center px-2`}
                >
                    {current.text}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
