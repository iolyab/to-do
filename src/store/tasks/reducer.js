import { getSavedTasks } from '../../services/tasks-service';
import {ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK, UPDATE_TASK_PRIORITY, UPDATE_TASK_LABELS, UPDATE_TASK} from './actions';

const initialState = {
    tasks: getSavedTasks(),
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            }
        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                  )
            }
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if(task.id === action.payload.id) {
                
                        return { ...task, ...action.payload } 
                    }
                    return task
                }
                  ),
            }
        case UPDATE_TASK_PRIORITY:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id
                      ? {
                          ...task,
                          priority: action.payload.newPriority,
                        }
                      : task
                  )
            }
        case UPDATE_TASK_LABELS:
        return {
            ...state,
            tasks: state.tasks.map((task) =>
                task.id === action.payload.id
                  ? {
                      ...task,
                      labels: action.payload.newLabels,
                    }
                  : task
              )
        }
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, ...action.payload } : task
                  ),
            }
        default:
            return state;
    }
  }

export {tasksReducer}