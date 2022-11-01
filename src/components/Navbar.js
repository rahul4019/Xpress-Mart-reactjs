import React from 'react';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <div>
      <nav className={`navbar ${styles.navbar}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className={`${styles.logoImg} d-inline-block`}
              src="https://cdn-icons-png.flaticon.com/512/3081/3081648.png"
              alt="logo"
            />
            <span className={`ms-2 text-dark ${styles.siteName}`}>
              <strong className={`fs-4 ${styles.firstLetter}`}>X</strong>
              press Mart
            </span>
          </a>

          <div className={`cartWrapper me-5 ${styles.cartWrapper}`}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
              alt="cart"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
