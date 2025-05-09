import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {thunk} from 'redux-thunk';
import { tasksReducer } from './tasks/reducer';

const rootReducer = combineReducers({tasks: tasksReducer});

const composeEnhances = window._REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)))

export {store}