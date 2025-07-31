import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Footer() {
    const { globalContent } = useContext(GlobalContext);
    const name = globalContent?.homePage?.name || "Nom Inconnu";

    return (
        <footer className="p-4 bg-gradient-to-r from-accent to-accent-light dark:from-primary dark:to-primary-dark dark:text-text-dark text-center">
            © {new Date().getFullYear()} {name}. Tous droits réservés.
        </footer>
    );
}