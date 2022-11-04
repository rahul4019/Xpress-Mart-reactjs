import { ADD_ALL_PRODUCTS } from '../constants';

// action creators
export const addAllProducts = (products) => {
  return {
    type: ADD_ALL_PRODUCTS,
    products,
  };
};

export function handleGetAllProducts() {
  const url = 'https://my-json-server.typicode.com/rahul4019/server/products';

  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((products) => {
        // dispatch an action
        dispatch(addAllProducts(products));
      })
      .catch((err) => console.log(err));
  };
}
