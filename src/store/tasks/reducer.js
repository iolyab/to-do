import { getSavedTasks } from '../../services/tasks-service';
import { ADD_TASK_SUCCESS, ADD_TASK_FAILURE, UPDATE_TASK_SUCCESS, UPDATE_TASK_PENDING, UPDATE_TASK_FAILURE, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE} from './actions';

const initialState = {
    data: getSavedTasks(),
    loading: false,
    error: null,
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload],
                loading: false,
            }
            case ADD_TASK_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    loading: false,
                }
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
            case DELETE_TASK_FAILURE:
                return {
                    ...state,
                    error: action.payload
                }

        case UPDATE_TASK_SUCCESS: {
            const {id, updatedTaskData} = action.payload;

              return {
                ...state,
                data: state.data.map(task => task.id === id ? {...task, ...updatedTaskData} : task),
              };
            }
                case UPDATE_TASK_FAILURE:
                    return {
                        ...state,
                        error: action.payload,
                        loading: false,
                    }
      
          default:
            return state;
        }
    }
 export { tasksReducer };