import { combineReducers } from 'redux';
import {products, cart}  from './reducer';

export default combineReducers({
  products,
  cart,
});
