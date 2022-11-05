import React from 'react';
import { Link } from 'react-router-dom';
import Ratings from './Ratings';

export default function ProductCard(props) {
  const { product, addToCartHandler } = props;
  const { id, title, img, price, ratings } = props.product;

  return (
    <div
      className="col-sm-1 col-md-2 col-lg-3 col-xl-4  rounded shadow mx-2 my-3"
      style={{ width: '15rem' }}
    >
      <div className="card">
        <img
          src={`${img}`}
          alt="product-img"
          className="cart-img-top rounded"
          style={{ width: '100%', height: '200px' }}
        />

        <div className="card-body text-center">
          <div className="mb-2">
            <p className="font-weight-semibold mb-2">
              <Link
                to={`/product/${id}`}
                className="text-default mb-2"
                data-abc="true"
              >
                {title}
              </Link>
            </p>
          </div>

          <h5 className="mb-0 font-weight-semibold">
            <small>₹</small>
            {price}
          </h5>

          <Ratings ratings={ratings} />

          <button
            type="button mt-1"
            className="btn btn-warning btn-sm"
            onClick={() => addToCartHandler(product)}
          >
            <i className="fa fa-cart-plus mr-2"></i> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
