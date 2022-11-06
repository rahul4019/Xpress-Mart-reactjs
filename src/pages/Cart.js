import React from 'react';
import ProductCardCart from '../components/ProductCardCart';
import styles from '../styles/cart.module.css';
import { Link } from 'react-router-dom';

export default function Cart(props) {
  const { allProducts, cart, handleAddToCart } = props;

  let price = 0;
  for (let i = 0; i < cart.length; i++) {
    price += cart[i].price;
  }

  console.log('total price: ', price);

  return (
    <section className={`h-100 h-custom ${styles.section}`}>
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12">
            <div
              className={`card card-registration card-registration-2 shadow-lg ${styles.card}`}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5"></div>

                      {cart.map((product) => (
                        <ProductCardCart key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h4 className="fw-bold mb-5 mt-2 pt-1 text-muted">
                        PRICE DETAILS
                      </h4>

                      <div className="d-flex justify-content-between mb-4">
                        <h6 className="text-capitalize">Items </h6>
                        <h6>{cart.length}</h6>
                      </div>

                      <div className="d-flex justify-content-between mb-4">
                        <h6 className="text-capitalize">delivery charges </h6>
                        <h6 className="text-success">Free</h6>
                      </div>

                      <div className="d-flex justify-content-between mb-5">
                        <h6 className="text-capitalize">Total Amount</h6>
                        <h6>₹ {price}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
