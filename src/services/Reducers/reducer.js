import { ADD_ALL_PRODUCTS, ADD_TO_CART } from '../constants';

const initialProductsState = {
  allProducts: [],
};

export function products(state = initialProductsState.allProducts, action) {
  switch (action.type) {
    case ADD_ALL_PRODUCTS:
      return { ...state, allProducts: action.products };
    default:
      return state;
  }
}

const initialCartState = {
  cart: [],
};

export function cart(state = initialCartState.cart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product];

    default:
      return state;
  }
}
