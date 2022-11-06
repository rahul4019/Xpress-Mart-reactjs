import {
  ADD_ALL_PRODUCTS,
  ADD_TO_CART,
  ADD_PRODUCT,
  REMOVE_FROM_CART,
} from '../constants';

const initialProductsState = {
  allProducts: [],
};

export function products(state = initialProductsState.allProducts, action) {
  switch (action.type) {
    case ADD_ALL_PRODUCTS:
      return { ...state, allProducts: action.products };
    case ADD_PRODUCT:
      return { ...state, allProducts: [action.product, ...state.allProducts] };
    default:
      return state;
  }
}

const initialCartState = {
  cartItems: [],
};

export function cart(state = initialCartState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [action.product, ...state.cartItems] };

    case REMOVE_FROM_CART:
      const filteredCartItems = state.cartItems.filter(
        (product) => product.id !== action.product.id
      );
      
      return { ...state, cartItems: filteredCartItems };

    default:
      return state;
  }
}
