export default function Footer() {
    return (
        <footer className="p-4 bg-gradient-to-r from-accent to-accent-light dark:from-primary dark:to-primary-dark dark:text-text-dark text-center">
            © {new Date().getFullYear()} Sébastien BILTRESSE. Tous droits réservés.
        </footer>
    );
}