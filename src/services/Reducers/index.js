import { combineReducers } from 'redux';
import {products, cartItems}  from './reducer';

export default combineReducers({
  products,
  cartItems,
});
