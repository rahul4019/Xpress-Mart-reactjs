import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <section className="h-100 h-custom" style={{ background: '#d2c9ff' }}>
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2 shadow-lg"
              style={{ borderRadius: '15px' }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5"></div>
                      {/* <hr className="my-4"></hr> */}
                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          {/* <h6 className="text-muted">Shirt</h6> */}
                          <h6 className="text-black mb-0 ">Asus Laptop</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button className="btn btn-link px-2">
                            <i className="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            type="number"
                            className="form-control form-control-sm"
                          />

                          <button className="btn btn-link px-2">
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">€ 44.00</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      <hr className="my-4"></hr>

                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-muted">Shirt</h6>
                          <h6 className="text-black mb-0">Cotton T-shirt</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button className="btn btn-link px-2">
                            <i className="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            type="number"
                            className="form-control form-control-sm"
                          />

                          <button className="btn btn-link px-2">
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">€ 44.00</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      <hr className="my-4"></hr>

                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-muted">Shirt</h6>
                          <h6 className="text-black mb-0">Cotton T-shirt</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button className="btn btn-link px-2">
                            <i className="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            type="number"
                            className="form-control form-control-sm"
                          />

                          <button className="btn btn-link px-2">
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">€ 44.00</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted">
                            <i className="fas fa-times"></i>
                          </a>
                        </div>
                      </div>

                      <hr className="my-4"></hr>

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <Link to="/" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h4 className="fw-bold mb-5 mt-2 pt-1 text-muted">
                        PRICE DETAILS
                      </h4>

                      <div className="d-flex justify-content-between mb-4">
                        <h6 className="text-capitalize">
                          Price{' '}
                          <span className="text-muted text-lowercase">
                            (3 items)
                          </span>{' '}
                        </h6>
                        <h6>₹2985</h6>
                      </div>

                      <div className="d-flex justify-content-between mb-4">
                        <h6 className="text-capitalize">delivery charges </h6>
                        <h6 className="text-success">Free</h6>
                      </div>

                      <div className="d-flex justify-content-between mb-5">
                        <h6 className="text-capitalize">Total Amount</h6>
                        <h6>€ 137.00</h6>
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
