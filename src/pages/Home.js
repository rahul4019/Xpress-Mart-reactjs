import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Home(props) {
  const { products } = props;
  console.log('Home products : ', products);

  return (
    <div className="container-fluid my-4 ">
      <div
        className="d-flex  flex-wrap justify-content-center align-items-center "
        style={{ width: '100%' }}
      >
        {products ? (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <div
            class="spinner-border position-absolute top-50 start-50 "
            role="status"
            style={{ width: '3rem', height: '3rem', color: '#f7b030' }}
          ></div>
        )}
      </div>
    </div>
  );
}
