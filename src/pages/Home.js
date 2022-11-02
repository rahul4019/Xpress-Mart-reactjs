import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div className="container-fluid my-4 ">
      <div
        className="d-flex  flex-wrap justify-content-center align-items-center"
        style={{ width: '100%' }}
      >
        <ProductCard />
      </div>
    </div>
  );
}
