import React from 'react';
import { useParams } from 'react-router-dom';
import Ratings from '../components/Ratings';
import styles from '../styles/product.module.css';

export default function Product(props) {
  const params = useParams();
  const productId = params.id;
  const { allProducts } = props;

  const filteredProductArray = allProducts.filter(
    (product) => product.id == productId
  );
  const currentProduct = filteredProductArray[0];

  const { title, description, price, ratings, img } = currentProduct;

  return (
    <>
      <div
        className={`card mb-3 d-flex justify-content-center  mx-auto my-5 p-2 shadow-lg ${styles.cardWrapper}`}
      >
        <div className="row g-0">
          <div className="col-md-3">
            <img src={img} className="img-fluid rounded " alt="product-img" />
          </div>
          <div className="col-md-3 rounded p-2 bg- text-center text-md-start">
            <div className="card-body">
              <h4 className="card-title ">{title}</h4>
              <h4>
                <small>₹</small>
                {price}
              </h4>

              <div className="my-3">
                <Ratings ratings={ratings} />
              </div>
            </div>
          </div>
          <div className="col-md-6 rounded  p-2">
            <div className="card-body ">
              <p className="card-text">{description}</p>
              <div className="btn-container d-flex justify-content-end mt-5">
                <button className={`${styles.editBtn}`}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/420/420181.png"
                    alt=""
                    className={styles.btnImg}
                  />
                </button>
                <button className={styles.editBtn}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
                    alt=""
                    className={styles.btnImg}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
