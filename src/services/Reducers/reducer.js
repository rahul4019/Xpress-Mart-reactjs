import { ADD_ALL_PRODUCTS, ADD_TO_CART } from '../constants';

const initialProductsState = {
  products: [],
};

export function products(state = initialProductsState, action) {
  switch (action.type) {
    case ADD_ALL_PRODUCTS:
      return { ...state, products: action.products };
    default:
      return state;
  }
}

const initialCartState = {
  cartItems: [],
};

export function cartItems(state = initialCartState.cartItems, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('product: ',action.product);
      return [ ...state, {cartItems: action.product}] ;

    default:
      return state;
  }
}
