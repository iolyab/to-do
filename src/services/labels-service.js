export function addLabel(newLabel) {
    const retrievedLabels = JSON.parse(localStorage.getItem("defaultLabels")) || [];
    if (!retrievedLabels.includes(newLabel)) {
        const updatedLabels = [...retrievedLabels, newLabel]
        localStorage.setItem("defaultLabels", JSON.stringify(updatedLabels));
        return updatedLabels;
    }
    return retrievedLabels;
}

export function getLabels() {
    try {
        const existingLabels = JSON.parse(localStorage.getItem("defaultLabels"));
        if (!existingLabels) {
          const defaultLabels = ["Work", "Personal"];
          localStorage.setItem("defaultLabels", JSON.stringify(defaultLabels));
          return defaultLabels;
        } else {
         return existingLabels;
        }
      } catch (error) {
        console.log("Error accessing or parsing localStorage:", error);
        const defaultLabels = ["Work", "Personal"];
        return defaultLabels;
      }
}

