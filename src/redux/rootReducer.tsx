import {combineReducers} from 'redux';
import catagoryReducer from './reducers/catagories/catagories';
import counterReducer from './reducers/counterReducer/counterReducer';
// Import your individual reducers

const rootReducer = combineReducers({
  counter: counterReducer,
  catagories: catagoryReducer,
});

export default rootReducer;
