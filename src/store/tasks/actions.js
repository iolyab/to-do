import { postTask, updatePriority, updateTask } from "../../api/tasks";
import { createTask, saveTasks } from "../../services/tasks-service";


export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';
export const ADD_TASK_PENDING = 'ADD_TASK_PENDING'
export const DELETE_TASK = 'DELETE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const UPDATE_TASK_PRIORITY = 'UPDATE_TASK_PRIORITY';
export const UPDATE_TASK_LABELS = 'UPDATE_TASK_LABELS';
export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_PENDING = 'UPDATE_TASK_PENDING';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';
export const SET_SCOPED_LOADING = 'SET_SCOPED_LOADING';
export const CLEAR_SCOPED_LOADING = 'CLEAR_SCOPED_LOADING';


export const addTask = (taskText, startDate, endDate) => {
    return async (dispatch, getState) => {
        const task = createTask(taskText, startDate, endDate);

        const currentTasks = getState().tasks.tasks;

        const updatedTasks = [...currentTasks, task];


        dispatch(setScopedLoading("addTask", null));
        dispatch({
            type: ADD_TASK_PENDING,
        })

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
        }finally {
            dispatch(clearScopedLoading());
        }
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
    return async(dispatch, getState) => {
        if(text.trim().length <= 1) return;

        dispatch(setScopedLoading("editTask", id));
        dispatch({
            type: UPDATE_TASK_PENDING,
        })

        try {
            const updatedTask = await updateTask(id, text, start, end);
            dispatch({
                type: UPDATE_TASK_SUCCESS,
                payload: {id, updatedTaskData: updatedTask}
            })
            const updatedTasks = getState().tasks.tasks;
            saveTasks(updatedTasks)
        }catch (error) {
            console.error("Error editing task:", error);
            dispatch({
                type: UPDATE_TASK_FAILURE,
                payload: {id, error},
            })
        }finally {
            dispatch(clearScopedLoading())
        }


    }
};

export const updateTaskPriority = (id, newPriority) => {
    return async(dispatch, getState) => {

        dispatch(setScopedLoading("updateTaskPriority", id));
        dispatch({
            type: UPDATE_TASK_PENDING,
        })

        try {
            const updatedTask = await updatePriority(id, {priority: newPriority});
            dispatch({
                type: UPDATE_TASK_SUCCESS,
                payload: {id, updatedTaskData: updatedTask}
            })
            const updatedTasks = getState().tasks.tasks;
            console.log(updatedTasks)
            saveTasks(updatedTasks)
        }catch (error) {
            console.error("Error editing task:", error);
            dispatch({
                type: UPDATE_TASK_FAILURE,
                payload: {id, error},
            })
        }finally {
            dispatch(clearScopedLoading())
        }
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

export const setScopedLoading = (context, id) => ({
    type: SET_SCOPED_LOADING,
    payload: {context, id},
});

export const clearScopedLoading = () => ({
    type: CLEAR_SCOPED_LOADING,
});


