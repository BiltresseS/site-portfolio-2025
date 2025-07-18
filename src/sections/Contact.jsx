import { useState } from "react";

export default function Contact() {
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

    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
        >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Contacte-moi</h2>
            <p className="max-w-xl text-center mb-6">
                Une question, un projet ou une opportunité professionnelle&nbsp;? Utilise ce formulaire pour me contacter directement.
                Si le formulaire ne fonctionne pas, vous pouvez m'écrire à
                <a
                    href="mailto:biltresse.sebastien@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
                >
                    biltresse.sebastien [at] gmail.com
                </a>
                .
            </p>

            {status === "SUCCESS" ? (
                <div className="flex flex-col items-center justify-center animate-fade-in">
                    <div className="text-green-600 dark:text-green-400 text-4xl mb-4">✅</div>
                    <p className="text-lg text-center">
                        Merci pour ton message ! Je reviendrai vers vous rapidement.
                    </p>
                </div>
            ) : status === "ERROR" ? (
                <div className="flex flex-col items-center justify-center animate-fade-in">
                    <div className="text-red-600 dark:text-red-400 text-4xl mb-4">❌</div>
                    <p className="text-lg text-center">
                        Une erreur est survenue. Merci de réessayer ou de me contacter par mail.
                    </p>
                </div>
            ) : status === "INVALID_EMAIL" ? (
                <div className="flex flex-col items-center justify-center animate-fade-in">
                    <div className="text-yellow-600 dark:text-yellow-400 text-4xl mb-4">⚠️</div>
                    <p className="text-lg text-center">
                        L'adresse email semble invalide. Merci de vérifier avant d'envoyer.
                    </p>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4 animate-fade-in"
                >
                    {/* Honeypot */}
                    <div className="hidden">
                        <label>
                            Website
                            <input type="text" name="website" />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="name" className="block mb-1">Nom</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                            placeholder="Votre nom"
                        />
                    </div>

                    <div>
                        <label htmlFor="organization" className="block mb-1">Organisation (optionnel)</label>
                        <input
                            type="text"
                            name="organization"
                            id="organization"
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                            placeholder="Nom de l'organisation"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                            placeholder="votremail@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-1">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            rows="5"
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                            placeholder="Votre message..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {isLoading ? "Envoi..." : "Envoyer"}
                    </button>
                </form>
            )}
        </section>
    );
}
