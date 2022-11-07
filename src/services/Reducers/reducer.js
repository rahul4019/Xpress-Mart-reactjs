import {
  ADD_ALL_PRODUCTS,
  ADD_TO_CART,
  ADD_PRODUCT,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
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

    case UPDATE_PRODUCT:
      const filteredProducts = state.allProducts.filter(
        (product) => product.id !== action.product.id
      );
      return { ...state, allProducts: [action.product, ...filteredProducts] };

    case DELETE_PRODUCT:
      const productsAfterDeletion = state.allProducts.filter(
        (product) => product.id !== action.product.id
      );
      console.log('products after deletion array: ', productsAfterDeletion);
      return {
        ...state,
        allProducts: [...productsAfterDeletion],
      };

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
