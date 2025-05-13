import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {thunk} from 'redux-thunk';
import { tasksReducer } from './tasks/reducer';

const rootReducer = combineReducers({tasks: tasksReducer});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export {store}