export function addLabel(newLabel) {
    const retrievedLabels = JSON.parse(localStorage.getItem("defaultLabels")) || [];
    if (!retrievedLabels.includes(newLabel)) {
        const updatedLabels = [...retrievedLabels, newLabel]
        localStorage.setItem("defaultLabels", JSON.stringify(updatedLabels));
        return updatedLabels;
    }
    return retrievedLabels;
}


