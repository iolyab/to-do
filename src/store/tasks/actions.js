import { postTask, removeTask, updateTask } from "../../api/tasks";
import { createTask, saveTasks } from "../../services/tasks-service";
import { getTasks } from "./selectors";
import { formatDateForAirtable } from "../../utils/date";


export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';
export const ADD_TASK_PENDING = 'ADD_TASK_PENDING'
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_PENDING = 'DELETE_TASK_PENDING';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const UPDATE_TASK_PRIORITY = 'UPDATE_TASK_PRIORITY';
export const UPDATE_TASK_LABELS = 'UPDATE_TASK_LABELS';
export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';


export const addTask = (taskText, startDate, endDate) => {
    return async (dispatch, getState) => {
        const task = createTask(taskText, startDate, endDate);


        try {
            const responseTask = await postTask(task);
            const postedTask = {
                id: responseTask.id,
                ...responseTask.fields
            }
            dispatch({
                type: ADD_TASK_SUCCESS,
                payload: postedTask,
            })

            const updatedTasks = getTasks(getState());
            saveTasks(updatedTasks)

        }catch(error) {
            dispatch({
                type: ADD_TASK_FAILURE,
                payload: error,
            })
        }
    }
};

export const deleteTask = (id) => {
    return async(dispatch, getState) => {
        const currentTasks = getTasks(getState());

        const updatedTasks = currentTasks.filter(task => task.id !== id);


        try{
            await removeTask(id);
            dispatch({
                type: DELETE_TASK_SUCCESS,
                payload: updatedTasks,
            })
            saveTasks(updatedTasks)
        }catch (error) {
            console.error("Error deleting task:", error);
            dispatch({
                type: DELETE_TASK_FAILURE,
                payload: {id, error},
            })
        }
    }
};

export const completeTask = (id) => {
    return async(dispatch, getState) => {
        const currentTasks = getTasks(getState());

        const updatedTasks = currentTasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
        const updatedTask = updatedTasks.find(task => task.id === id);


        try{
            await updateTask(id, {completed: updatedTask.completed});
            dispatch({
                type: UPDATE_TASK_SUCCESS,
                payload: {id, updatedTaskData: {completed: updatedTask.completed}},
            })
            saveTasks(updatedTasks)
        }catch (error) {
            console.error("Error completing task:", error);
            dispatch({
                type: UPDATE_TASK_FAILURE,
                payload: {id, error},
            })
        }

    }
};

export const editTask = (id, text, start, end) => {
    return async(dispatch, getState) => {
        if(text.trim().length <= 1) return;

        try {

            const updatedFields = { text };

            const formattedStart = formatDateForAirtable(start);
            const formattedEnd = formatDateForAirtable(end);

            if (formattedStart) updatedFields.start = formattedStart;
            if (formattedEnd) updatedFields.end = formattedEnd;

            const updatedTask = await updateTask(id, updatedFields);

            dispatch({
                type: UPDATE_TASK_SUCCESS,
                payload: {id, updatedTaskData: updatedTask.fields}
            })

            const updatedTasks = getTasks(getState());
            saveTasks(updatedTasks)
            return updatedTask;

        }catch (error) {
            console.error("Error editing task:", error);
            dispatch({
                type: UPDATE_TASK_FAILURE,
                payload: {id, error},
            });
            throw error;
        }


    }
};

export const updateTaskPriority = (id, newPriority) => {
    return async(dispatch, getState) => {


        try {
            const updatedTask = await updateTask(id, {priority: newPriority});
            dispatch({
                type: UPDATE_TASK_SUCCESS,
                payload: {id, updatedTaskData: updatedTask.fields}
            })
            const updatedTasks = getTasks(getState());
            console.log(updatedTasks)
            saveTasks(updatedTasks)
        }catch (error) {
            console.error("Error updating priority:", error);
            dispatch({
                type: UPDATE_TASK_FAILURE,
                payload: {id, error},
            })
        }
    }
};

export const updateTaskLabels = (id, newLabel) => {
    return(dispatch, getState) => {
        const tasks = getTasks(getState());
        const taskToUpdate = tasks.find(task => task.id === id);

        let newLabels = [];

        if(taskToUpdate) {
            const currentLabels = taskToUpdate.labels || [];

            newLabels = currentLabels.includes(newLabel) ? currentLabels.filter(label => label !== newLabel) : [...currentLabels, newLabel];
        }else {
            console.log('Task not found:', id);
            return
        }
        dispatch({
            type: UPDATE_TASK_SUCCESS,
            payload: {id, updatedTaskData: {labels: newLabels}},
        })

        const updatedTasks = getTasks(getState());
        saveTasks(updatedTasks)
    }
};




