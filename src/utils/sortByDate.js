export default function sortByDateDesc(array) {
    return [...array].sort((a, b) => {
        const aDate = new Date(`${a.endDate}-01`);
        const bDate = new Date(`${b.endDate}-01`);
        return bDate - aDate; // décroissant
    });
}