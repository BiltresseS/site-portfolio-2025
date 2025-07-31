import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import AnimatedCareerLoop from "../components/AnimatedCareerLoop";

const Hero = () => {
    const { globalContent } = useContext(GlobalContext);

    return (
        <section id="hero" className="relative w-full min-h-screen flex justify-center bg-base dark:bg-base-dark">
            {/* Bande en gradient */}
            <div className="absolute top-1/4 left-0 w-full h-60 md:h-54 lg:h-40 bg-gradient-to-r from-accent dark:from-primary to-accent-light dark:to-primary-dark flex justify-center">
                {/* Contenu centré */}
                <div className="flex flex-col lg:flex-row items-center gap-6 max-w-4xl w-full px-4">
                    {/* Photo */}
                    <div className="relative -mt-20 -mb-4 lg:-mt-8 lg:-mb-8">
                        <img
                            src={globalContent.homePage.profilePhotoUrl}
                            alt="Photo portrait"
                            className="w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-base dark:border-base-dark shadow-lg"
                        />
                    </div>

                    {/* Texte */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl font-poppins text-primary dark:text-accent mb-2">
                            {globalContent.homePage.name}
                        </h1>
                        <AnimatedCareerLoop careers={globalContent.homePage.careers} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
