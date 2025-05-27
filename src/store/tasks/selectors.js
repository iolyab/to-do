export const getTasks = (state) => state.tasks.data;

export const getTaskById = (state, id) => state.tasks.data.find((task) => task.id === id);

export const getCompletedTasks = (state) => state.tasks.data.filter((task) => task.completed);

export const getPendingTasks = (state) => state.tasks.data.filter((task) => !task.completed);

export const getTaskByPriority = (state, priority) => state.tasks.data.filter((task) => task.priority === priority);

export const getTaskByLabel = (label) => (state) => state.tasks.data.filter((task) => task.labels.includes(label));

export const getCurrentLabel = (labels, index) => (state) => state.tasks.data.filter((task) => task.labels.includes(labels[index]))

export const getTasksByLabelAndPriority = (state, label, priority) => state.tasks.data.filter((task) => task.labels.includes(label) && task.priority === priority)