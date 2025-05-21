import { getSavedTasks } from '../../services/tasks-service';
import { ADD_TASK_SUCCESS, ADD_TASK_FAILURE, ADD_TASK_PENDING, DELETE_TASK, UPDATE_TASK} from './actions';

const initialState = {
    tasks: getSavedTasks(),
    loading: false,
    error: null,
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                loading: false,
            }
            case ADD_TASK_PENDING:
                return {
                    ...state,
                    loading: true,
                    error: null,
                }
            case ADD_TASK_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    loading: false,
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