import {combineReducers} from 'redux';
import rating from './rating';
import counter from './counter';

export default combineReducers({
  rating,
  counter,
});
