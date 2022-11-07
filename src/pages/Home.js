import React from 'react';
import AllProductsWrapper from '../components/AllProductsWrapper';
import styles from '../styles/home.module.css';

export default function Home(props) {
  const { allProducts, addToCartHandler } = props;

  let unSortedProducts;
  let sortedProducts;

  if (allProducts) {
    unSortedProducts = [...allProducts];
    const toBeSorted = [...allProducts];
    sortedProducts = toBeSorted.sort(
      (product1, product2) => product1.price - product2.price
    );
  }

  return (
    <div className="container ">
      <div className="d-flex flex-wrap justify-content-around my-5 positon-relative">
        {unSortedProducts && sortedProducts ? (
          <AllProductsWrapper
            unSortedProducts={unSortedProducts}
            sortedProducts={sortedProducts}
            addToCartHandler={addToCartHandler}
          />
        ) : (
          <div
            className={`spinner-border position-absolute top-50 start-50 ${styles.spinner}`}
            role="status"
          ></div>
        )}
      </div>
    </div>
  );
}
