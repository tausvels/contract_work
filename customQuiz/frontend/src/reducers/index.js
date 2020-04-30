import sampleReducer from './sampleReducer';
import isLogged from './loggedReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  sample: sampleReducer,
  logged: isLogged
});

export default allReducers;
