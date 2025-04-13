export const getSavedTasks =  () => {
    try {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
          return JSON.parse(savedTasks);
        }
        return [];
      } catch (error) {
        console.log("Error loading tasks from localStorage:", error);
        return [];
      }
}

export const saveTasks = (tasks) => {
    try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
        console.log("Error saving tasks to localStorage:", error);
    }
}

export const createTask = (taskText, deadline) => {
    return {
        id: Math.random() + 1,
        text: taskText,
        completed: false,
        priority: null,
        labels: [],
        deadline: deadline,
    }
}
