import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [data, setData] = useState({
        loading: true,
        globalContent: {},
        skills: [],
        parcours: [],
        projects: [],
    });

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [contentSnap, skillsSnap, parcoursSnap, projectsSnap] = await Promise.all([
                    getDocs(collection(db, "globalContent")),
                    getDocs(collection(db, "skills")),
                    getDocs(collection(db, "parcours")),
                    getDocs(collection(db, "projects")),
                ]);

                const globalContentDocs = contentSnap.docs.map((doc) => doc.data());

                const structuredContent = {};
                for (const doc of globalContentDocs) {
                    if (doc.type) {
                        structuredContent[doc.type] = doc;
                    }
                }

                setData({
                    loading: false,
                    globalContent: structuredContent,
                    skills: skillsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
                    parcours: parcoursSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
                    projects: projectsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
                });
            } catch (err) {
                console.error("Erreur de chargement des données globales :", err);
            }
        };

        fetchAllData();
    }, []);

    return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>;
};