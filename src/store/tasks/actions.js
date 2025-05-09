import { createTask, getSavedTasks, saveTasks } from "../../services/tasks-service";

export const LOAD_TASKS = 'LOAD_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const UPDATE_TASK_PRIORITY = 'UPDATE_TASK_PRIORITY';
export const UPDATE_TASK_LABELS = 'UPDATE_TASK_LABELS';
export const UPDATE_TASK = 'UPDATE_TASK';

export const loadTasks = () => {
    return(dispatch) => {
        const savedTasks = getSavedTasks();

        dispatch({
            type: LOAD_TASKS,
            payload: savedTasks,
        })
    }
};

export const addTask = (taskText, startDate, endDate) => {
    return(dispatch, getState) => {
        const task = createTask(taskText, startDate, endDate);

        const currentTasks = getState().tasks.tasks;

        const updatedTasks = [...currentTasks, task];

        saveTasks(updatedTasks)

        dispatch({

            type: ADD_TASK,
            payload: task,
        })
    }
};

export const deleteTask = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_TASK,
            payload: id,
        })
        const updatedTasks = getState().tasks.tasks;
        saveTasks(updatedTasks)
    }
};

export const completeTask = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: COMPLETE_TASK,
            payload: id,
        })
        const updatedTasks = getState().tasks.tasks;
        saveTasks(updatedTasks)
    }
};

export const editTask = (id, newText, newStart, newEnd) => {
    return(dispatch, getState) => {
        dispatch({
            type: EDIT_TASK,
            payload: {id, newText, newStart, newEnd}
        })
        const updatedTasks = getState().tasks.tasks;
        saveTasks(updatedTasks)
    }
};

export const updateTaskPriority = (id, newPriority) => {
    return(dispatch, getState) => {
        dispatch({
            type: UPDATE_TASK_PRIORITY,
            payload: {id, newPriority}
        })
        const updatedTasks = getState().tasks.tasks;
        saveTasks(updatedTasks)
    }
};

export const updateTaskLabels = (id, newLabel) => {
    return(dispatch, getState) => {
        dispatch({
            type: UPDATE_TASK_LABELS,
            payload: {id, newLabel}
        })
        const updatedTasks = getState().tasks.tasks;
        saveTasks(updatedTasks)
    }
};

export const updateTask = (newFields) => {
    return (dispatch, getState) => {
        dispatch({
            type: UPDATE_TASK,
            payload: newFields,
        })
        const updatedTasks = getState().tasks.tasks;
        saveTasks(updatedTasks)
    }
};