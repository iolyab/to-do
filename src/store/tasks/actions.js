import { postTask } from "../../api/tasks";
import { createTask, saveTasks } from "../../services/tasks-service";


export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';
export const ADD_TASK_PENDING = 'ADD_TASK_PENDING'
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const UPDATE_TASK_PRIORITY = 'UPDATE_TASK_PRIORITY';
export const UPDATE_TASK_LABELS = 'UPDATE_TASK_LABELS';
export const UPDATE_TASK = 'UPDATE_TASK';


export const addTask = (taskText, startDate, endDate) => {
    return async (dispatch, getState) => {
        const task = createTask(taskText, startDate, endDate);

        const currentTasks = getState().tasks.tasks;

        const updatedTasks = [...currentTasks, task];

        // saveTasks(updatedTasks)

        // dispatch({
        //     type: ADD_TASK,
        //     payload: task,
        // })

        dispatch({
            type: ADD_TASK_PENDING,
        })

        await postTask(task)
        .then((task) => {
            console.log("Task posted successfully:", task);
            dispatch({
                type: ADD_TASK_SUCCESS,
                payload: task,
            })
            saveTasks(updatedTasks)
        }).catch((error) => {
            console.error("Error posting task:", error);
            dispatch({
                type: ADD_TASK_FAILURE,
                payload: task,
            })
        })
    }
};

export const deleteTask = (id) => {
    return (dispatch, getState) => {
        const currentTasks = getState().tasks.tasks;

        const updatedTasks = currentTasks.filter(task => task.id !== id);

        saveTasks(updatedTasks)

        dispatch({
            type: DELETE_TASK,
            payload: updatedTasks,
        })
    }
};

export const completeTask = (id) => {
    return (dispatch, getState) => {
        const currentTasks = getState().tasks.tasks;

        const updatedTasks = currentTasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
        const updatedTask = updatedTasks.find(task => task.id === id);

        dispatch({
            type: UPDATE_TASK,
            payload: {id, updatedTaskData: {completed: updatedTask.completed}},
        })
        saveTasks(updatedTasks)
    }
};

export const editTask = (id, text, start, end) => {
    return(dispatch, getState) => {
        if(text.trim().length <= 1) return;

        dispatch({
            type: UPDATE_TASK,
            payload: {id, updatedTaskData: {text, start, end}}
        })

        const updatedTasks = getState().tasks.tasks;
        saveTasks(updatedTasks)
    }
};

export const updateTaskPriority = (id, newPriority) => {
    return(dispatch, getState) => {
        dispatch({
            type: UPDATE_TASK,
            payload: {id, updatedTaskData: {priority: newPriority}}
        })
        const updatedTasks = getState().tasks.tasks;
        saveTasks(updatedTasks)
    }
};

export const updateTaskLabels = (id, newLabel) => {
    return(dispatch, getState) => {
        const tasks = getState().tasks.tasks;
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