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
          <span className={`ms-2 text-dark ${styles.siteName} d-none d-sm-inline-block `}>
            <strong className={`fs-4 ${styles.firstLetter}`}>X</strong>
            press Mart
          </span>
        </a>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
          <li className="nav-item ms-sm-5">
            <Link className="nav-link active" aria-current="page" to="/addProduct">
              Add a product
            </Link>
          </li>
        </ul>

        <div className=""></div>

        <div className={`cartWrapper me-md-5 ${styles.cartWrapper}`}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
            alt="cart"
          />
        </div>
      </div>
    </nav>
  );
}
