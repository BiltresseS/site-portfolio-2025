import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedCareerLoop({ careers = [] }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (careers.length === 0) return;

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % careers.length);
        }, 2500);

        return () => clearInterval(timer);
    }, [careers]);

    const current = careers[index] || "";

    return (
        <div className="relative h-12 w-full flex justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.span
                    key={current}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute text-textDark text-2xl sm:text-3xl text-center px-2 font-poppins"
                >
                    {current}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
