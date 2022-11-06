import React from 'react';
import styles from '../styles/cart.module.css'

export default function ProductCardCart(props) {
  const { title, img, price } = props.product;

  return (
    <>
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img src={img} alt="" className="img-fluid rounded-3" />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-black mb-0 ">{title}</h6>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0">₹{price}</h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" className="text-muted">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
              alt="delete-icon"
              className={styles.deleteIcon}
            />
          </a>
        </div>
      </div>

      <hr className="my-4"></hr>
    </>
  );
}
