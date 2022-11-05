import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`navbar ${styles.navbar}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            className={`${styles.logoImg} d-inline-block`}
            src="https://cdn-icons-png.flaticon.com/512/3081/3081648.png"
            alt="logo"
          />
          <span
            className={`ms-2 text-dark ${styles.siteName} d-none d-sm-inline-block `}
          >
            <strong className={`fs-4 ${styles.firstLetter}`}>X</strong>
            press Mart
          </span>
        </a>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-md-5 d-flex flex-row">
          <li className="nav-item ms-sm-5 mx-2">
            <Link
              className="nav-link fw-semibold text-dark"
              aria-current="page"
              to="/"
            >
              Products
            </Link>
          </li>
          <li className="nav-item ms-sm-5 mx-2">
            <Link
              className="nav-link fw-semibold text-dark"
              aria-current="page"
              to="/addProduct"
            >
              Add a product
              <img
                src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
                alt=""
                className="ms-1"
                style={{ width: '20px' }}
              />
            </Link>
          </li>
        </ul>

        <div className=""></div>

        <div
          className={`cartWrapper  position-relative me-md-5 ${styles.cartWrapper}`}
        >
          <Link to="/cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
              alt="cart"
            />
          </Link>
          <div
            className="rounded-circle d-flex justify-content-center align-items-center position-absolute  "
            style={{
              height: 20,
              width: 20,
              maxHeight: 50,
              maxWidth: 50,
              right: '-5px',
              top: '-7px',
              background: '#ff6161 ',
            }}
          >
            <small className="text-light fw-semibold">9</small>
          </div>
        </div>
      </div>
    </nav>
  );
}
