import React from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/home.module.css';

export default function (props) {
  const { unSortedProducts, sortedProducts, addToCartHandler } = props;
  const [sortByPrice, setSortByPrice] = useState(false);

  const handleSort = () => {
    setSortByPrice(!sortByPrice);
  };

  return (
    <>
      {/* <div className="d-flex justify-content-end px-4 mt-4 position-absolute"> */}
      <button
        type="button"
        className={`btn btn-light border border-secondary border-2 rounded-pill fw-semibold position-absolute  ${styles.sortBtn}`}
        onClick={() => {
          handleSort();
        }}
      >
        Sort by price
      </button>
      {/* </div> */}
      {sortByPrice
        ? sortedProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              addToCartHandler={addToCartHandler}
            />
          ))
        : unSortedProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              addToCartHandler={addToCartHandler}
            />
          ))}
    </>
  );
}
