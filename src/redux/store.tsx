import {legacy_createStore as createStore} from 'redux';
import rootReducer from './rootReducer'; // Create this file

const store = createStore(rootReducer); // Create this file

export default store;
