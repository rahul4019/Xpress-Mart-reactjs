import React from 'react';
import ProductCard from '../components/ProductCard';

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
            className="spinner-border position-absolute top-50 start-50 "
            role="status"
            style={{ width: '3rem', height: '3rem', color: '#f7b030' }}
          ></div>
        )}
      </div>
    </div>
  );
}
