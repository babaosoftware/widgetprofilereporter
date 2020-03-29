import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import profileReducers from './profilereducers';

const store = createStore(profileReducers, applyMiddleware(thunk));

export default store;