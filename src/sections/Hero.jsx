import AnimatedCareerLoop from "../components/AnimatedCareerLoop";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-start justify-center pt-[15%] bg-white" id="hero">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6">

                {/* Photo à gauche */}
                <img
                    src={profilePic}
                    alt="Photo portrait"
                    className="w-40 h-40 rounded-full object-cover border-4 border-gray-300 shadow-lg"
                />

                {/* Texte à droite */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
                        BILTRESSE Sébastien
                    </h1>
                    <AnimatedCareerLoop />
                </div>
            </div>
        </section>
    );
};

export default Hero;
