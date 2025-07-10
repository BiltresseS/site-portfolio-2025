export default function Footer() {
    return (
        <footer className="p-4 bg-gray-800 text-white text-center">
            © {new Date().getFullYear()} Ton Nom. Tous droits réservés.
        </footer>
    );
}