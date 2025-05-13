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
        const tasksToSave = tasks.map((task) => ({
            ...task, 
            start: task.start || null,
            end: task.end || null
        }))
        localStorage.setItem("tasks", JSON.stringify(tasksToSave));
    } catch (error) {
        console.log("Error saving tasks to localStorage:", error);
    }
}

export const createTask = (taskText, startDate, endDate) => {
    return {
        id: Math.random() + 1,
        text: taskText,
        completed: false,
        priority: null,
        labels: [],
        start: startDate,
        end: endDate,
    }
}
