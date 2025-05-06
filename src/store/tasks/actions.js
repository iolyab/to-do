export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const UPDATE_TASK_PRIORITY = 'UPDATE_TASK_PRIORITY';
export const UPDATE_TASK_LABELS = 'UPDATE_TASK_LABELS';
export const UPDATE_TASK = 'UPDATE_TASK';

export const addTask = (taskText, deadline) => ({
    type: ADD_TASK,
    payload: {taskText, deadline},
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id, 
});

export const completeTask = (id) => ({
    type: COMPLETE_TASK,
    payload: id, 
});

export const editTask = (id, newText, newStart, newEnd) => ({
    type: EDIT_TASK,
    payload: {id, newText, newStart, newEnd}
});

export const updateTaskPriority = (id, newPriority) => ({
    type: UPDATE_TASK_PRIORITY,
    payload: {id, newPriority}
});

export const updateTaskLabels = (id, newLabel) => ({
    type: UPDATE_TASK_LABELS,
    payload: {id, newLabel}
});

export const updateTask = (newFields) => ({
    type: UPDATE_TASK,
    payload: newFields,
});