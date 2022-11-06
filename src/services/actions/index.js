import { ADD_ALL_PRODUCTS, ADD_TO_CART, ADD_PRODUCT, REMOVE_FROM_CART } from '../constants';

// action creators
export const addAllProducts = (products) => {
  return {
    type: ADD_ALL_PRODUCTS,
    products,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    product,
  }
}

export function handleGetAllProducts() {
  const url = 'https://my-json-server.typicode.com/rahul4019/server/products';

  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((products) => {
        dispatch(addAllProducts(products));
      })
      .catch((err) => console.log(err));
  };
}
