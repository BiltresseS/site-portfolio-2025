import { useState, useContext } from "react";
import { FaCheckCircle, FaTimesCircle, FaExclamationCircle } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";

export default function Contact() {
    const { globalContent } = useContext(GlobalContext);
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus("");

        const form = e.target;
        const data = new FormData(form);

        const email = data.get("email");
        if (!validateEmail(email)) {
            setStatus("INVALID_EMAIL");
            setIsLoading(false);
            return;
        }

        if (data.get("website")) {
            setStatus("SPAM");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/xblklzgv", {
                method: "POST",
                body: data,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
            } else {
                setStatus("ERROR");
            }
        } catch {
            setStatus("ERROR");
        }

        setIsLoading(false);
    };

    const contactFields = globalContent?.contact?.fields || [];
    const sortedFields = [...contactFields].sort((a, b) => a.order - b.order);

    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center p-8 bg-base dark:bg-base-dark text-gray-800 dark:text-gray-200"
        >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-primary dark:text-accent">Contactez-moi</h2>
            <p
                className="max-w-xl text-center mb-6"
                dangerouslySetInnerHTML={{ __html: globalContent.contact.text }}
            ></p>

            {/* Messages de feedback */}
            {status === "SUCCESS" && (
                <Feedback icon={<FaCheckCircle />} color="green" message="Merci pour votre message ! Je reviendrai vers vous rapidement." />
            )}
            {status === "ERROR" && (
                <Feedback icon={<FaTimesCircle />} color="red" message="Une erreur est survenue. Merci de réessayer ou de me contacter par mail." />
            )}
            {status === "INVALID_EMAIL" && (
                <Feedback icon={<FaExclamationCircle />} color="yellow" message="L'adresse email semble invalide. Merci de vérifier avant d'envoyer." />
            )}

            {status === "" && (
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg bg-encadre dark:bg-encadre-dark p-6 rounded shadow space-y-4 animate-fade-in"
                >
                    {/* Honeypot */}
                    <div className="hidden">
                        <label>
                            Website
                            <input
                                type="text"
                                name="website"
                                id="website"
                                className="w-full p-2 border rounded bg-base dark:text-gray-800"
                                placeholder="Votre site"
                            />
                        </label>
                    </div>

                    {/* Champs dynamiques depuis Firebase */}
                    {sortedFields.map((field) => {
                        const { name, type, required, label, placeHolder, autoComplete, key } = field;

                        const autoCompleteValue =
                            autoComplete ||
                            (type === "email" ? "email"
                                : type === "tel" ? "tel"
                                    : name === "name" ? "name"
                                        : name === "organization" ? "organization"
                                            : "off");

                        return (
                            <div key={name}>
                                <label htmlFor={key} className="block mb-1">{label || name}</label>

                                {type === "textarea" ? (
                                    <textarea
                                        name={key}
                                        id={key}
                                        required={required}
                                        rows="5"
                                        autoComplete={autoCompleteValue}
                                        className="w-full p-2 border rounded bg-base dark:text-gray-800"
                                        placeholder={placeHolder}
                                    />
                                ) : (
                                    <input
                                        type={["email", "tel", "text"].includes(type) ? type : "text"}
                                        name={key}
                                        id={key}
                                        required={required}
                                        autoComplete={autoCompleteValue}
                                        className="w-full p-2 border rounded bg-base dark:text-gray-800"
                                        placeholder={placeHolder}
                                    />
                                )}
                            </div>
                        );
                    })}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {isLoading ? "Envoi..." : "Envoyer"}
                    </button>
                </form>
            )}
        </section>
    );
}

// Composant réutilisable pour les messages de feedback
const Feedback = ({ icon, color, message }) => (
    <div className="flex flex-col items-center justify-center animate-fade-in">
        <div className={`text-${color}-600 dark:text-${color}-400 text-5xl mb-4`}>{icon}</div>
        <p className="text-lg text-center">{message}</p>
    </div>
);
