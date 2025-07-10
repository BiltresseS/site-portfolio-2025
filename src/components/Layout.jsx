import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="lg:ml-14 w-full">
                {children}
            </main>
        </div>
    );
}