import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
            <Sidebar />
            <main className="lg:ml-14 w-full">
                {children}
            </main>
        </div>
    );
}