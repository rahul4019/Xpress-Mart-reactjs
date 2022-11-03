import { ADD_ALL_PRODUCTS } from '../constants';

const initialState = {
  products: [],
};

export default function products(state = [], action) {
  switch (action.type) {
    case ADD_ALL_PRODUCTS:
      return { ...state, products: action.products};
    default:
      return state;
  }
}
