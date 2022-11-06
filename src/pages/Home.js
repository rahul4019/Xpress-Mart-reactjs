import React from 'react';
import ProductCard from '../components/ProductCard';
import styles from '../styles/home.module.css';

export default function Home(props) {
  const { allProducts, addToCartHandler } = props;

  return (
    <div className="container ">
      <div className="d-flex flex-wrap justify-content-around my-4">
        {allProducts ? (
          allProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              addToCartHandler={addToCartHandler}
            />
          ))
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
