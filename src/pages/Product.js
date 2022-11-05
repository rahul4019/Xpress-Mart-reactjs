import React from 'react';
import { useParams } from 'react-router-dom';
import Ratings from '../components/Ratings';

export default function Product(props) {
  const params = useParams();
  console.log(params.id);
  const { products } = props;

  const filteredProductArray = products.filter(
    (product) => product.id == params.id
  );
  const currentProduct = filteredProductArray[0];
  console.log(currentProduct);

  const { id, title, description, price, ratings, img } = currentProduct;

  return (
    <>
      <div
        className="card mb-3 d-flex justify-content-center  mx-auto my-5 p-2 shadow-lg"
        style={{ width: '90%' }}
      >
        <div className="row g-0">
          <div className="col-md-3">
            <img src={img} className="img-fluid rounded " alt="" />
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
              <bold className="card-text">{description}</bold>
              <div className="btn-container d-flex justify-content-end mt-5">
                <button
                  className="edit-btn"
                  style={{ border: 'none', background: 'transparent' }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/420/420181.png"
                    alt=""
                    style={{ width: '40px' }}
                  />
                </button>
                <button
                  className="delete-btn"
                  style={{ border: 'none', background: 'transparent' }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
                    alt=""
                    style={{ width: '40px' }}
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
