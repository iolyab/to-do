export const getTasks = (state) => state.tasks;

export const getTaskById = (state, id) => state.tasks.find((task) => task.id === id);

export const getCompletedTasks = (state) => state.tasks.filter((task) => task.completed);

export const getPendingTasks = (state) => state.tasks.filter((task) => !task.completed);

export const getTaskByPriority = (state, priority) => state.tasks.filter((task) => task.priority === priority);

export const getTaskByLabel = (state, label) => state.tasks.filter((task) => task.labels.includes(label));

export const getTasksByLabelAndPriority = (state, label, priority) => state.tasks.filter((task) => task.labels.includes(label) && task.priority === priority)