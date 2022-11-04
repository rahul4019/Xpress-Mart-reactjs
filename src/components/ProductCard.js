import React from 'react';
import Ratings from './Ratings';

export default function ProductCard(props) {
  const {  id,title, img, price,description, ratings  } = props.product;
  return (
    <div
      className="col-sm-12 col-md-6 col-lg-4 col-xl-3  rounded shadow-lg"
      style={{ width: '15rem'}}
    >
      <div className="card ">
        <img
          src={`${img}`}
          alt="product-img"
          className="cart-img-top "
          style={{ width: '100%', height: '200px'}}
        />

        <div className="card-body text-center">
          <div className="mb-2">
            <p className="font-weight-semibold mb-2">
              <a href="/" className="text-default mb-2" data-abc="true">
                {title}
              </a>
            </p>
          </div>

          <h5 className="mb-0 font-weight-semibold">
            <small>₹</small>
            {price}
          </h5>

          {/* <div className="">
            <i className="fa fa-star star checked"></i>
            <i className="fa fa-star star checked"></i>
            <i className="fa fa-star star checked"></i>
            <i className="fa fa-star star checked"></i>
            <i className="fa fa-star star"></i>
          </div> */}
          <Ratings ratings={ratings}/>

          

          <button type="button mt-1" className="btn btn-warning btn-sm">
            <i className="fa fa-cart-plus mr-2"></i> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
