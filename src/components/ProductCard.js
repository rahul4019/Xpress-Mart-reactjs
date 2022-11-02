import React from 'react';

export default function ProductCard() {
  return (
    <div
      className="col-sm-12 col-md-6 col-lg-4 col-xl-3  rounded shadow-lg"
      style={{ width: '15rem' }}
    >
      <div className="card overflow-hidden">
        <img
          src="https://www.asus.com/media/Odin/Websites/global/Series/9.png"
          alt="product-img"
          className="cart-img-top bg-info"
          // style={{ width: 96 , height: 350}}
        />

        <div className="card-body text-center">
          <div className="mb-2">
            <h5 className="font-weight-semibold mb-2">
              <a href="/" className="text-default mb-2" data-abc="true">
                Apple iPhone 14 pro
              </a>
            </h5>
          </div>

          <h5 className="mb-0 font-weight-semibold">
            <small>₹</small>86290
          </h5>

          <div className="my-1 " style={{ color: 'orange' }}>
            <i className="fa fa-star star checked"></i>
            <i className="fa fa-star star checked"></i>
            <i className="fa fa-star star checked"></i>
            <i className="fa fa-star star checked"></i>
            <i className="fa fa-star star"></i>
          </div>

          <button type="button" className="btn btn-warning bg-cart">
            <i className="fa fa-cart-plus mr-2"></i> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
