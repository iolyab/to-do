import {legacy_createStore, combineReducers} from 'redux';
import { tasksReducer } from './tasks/reducer';

const rootReducer = combineReducers({tasks: tasksReducer});

const store = legacy_createStore(rootReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())

export default store;