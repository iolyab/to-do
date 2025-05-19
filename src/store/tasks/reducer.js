import { getSavedTasks } from '../../services/tasks-service';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK} from './actions';

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
                tasks: action.payload
            }

        case UPDATE_TASK: {
            const {id, updatedTaskData} = action.payload;

              return {
                ...state,
                tasks: state.tasks.map(task => task.id === id ? {...task, ...updatedTaskData} : task)
              };
            }
      
          default:
            return state;
        }
    }
 export { tasksReducer };