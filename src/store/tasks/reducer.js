import { getSavedTasks, saveTasks } from '../../services/tasks-service';
import { ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAILURE, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAILURE, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE} from './actions';

const initialState = {
    data: getSavedTasks(),
    loading: false,
    error: null,
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK_REQUEST:
      return { ...state, loading: true, error: null };

        case ADD_TASK_SUCCESS: 
        const data = [...state.data, action.payload]
        saveTasks(data)
            return {
                ...state,
                data,
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