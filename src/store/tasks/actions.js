import { complete, postTask, removeTask, updatePriority, updateTask } from "../../api/tasks";
import { createTask, saveTasks } from "../../services/tasks-service";
import { getTasks } from "./selectors";


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
export const UPDATE_TASK_PENDING = 'UPDATE_TASK_PENDING';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';


export const addTask = (taskText, startDate, endDate) => {
    return async (dispatch, getState) => {
        const task = createTask(taskText, startDate, endDate);

        const currentTasks = getTasks(getState());

        const updatedTasks = [...currentTasks, task];


        try {
            const responseTask = await postTask(task);
            dispatch({
                type: ADD_TASK_SUCCESS,
                payload: responseTask,
            })
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
            await complete(id, updatedTask.completed);
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
            const updatedTask = await updateTask(id, text, start, end);
            dispatch({
                type: UPDATE_TASK_SUCCESS,
                payload: {id, updatedTaskData: updatedTask}
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
            const updatedTask = await updatePriority(id, {priority: newPriority});
            dispatch({
                type: UPDATE_TASK_SUCCESS,
                payload: {id, updatedTaskData: updatedTask}
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
            newLabels = taskToUpdate.labels.includes(newLabel) ? taskToUpdate.labels : [...taskToUpdate.labels, newLabel];
        }
        dispatch({
            type: UPDATE_TASK,
            payload: {id, updatedTaskData: {labels: newLabels}},
        })
        const updatedTasks = tasks.map(task => task.id === id ? {...task, labels: newLabels} : task);
        saveTasks(updatedTasks)
    }
};




