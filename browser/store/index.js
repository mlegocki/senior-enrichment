import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';

import students from './students';
import campuses from './campuses';
import listStatus from './listToggle';

const rootReducer = combineReducers({
    students,
    campuses,
    listStatus
});

const composeEnhancers = composeWithDevTools({
});

const store = createStore(rootReducer, composeEnhancers( 
  applyMiddleware(thunkMiddleware, loggingMiddleware))
);

export default store;

export * from './students';
export * from './campuses';
export * from './listToggle';