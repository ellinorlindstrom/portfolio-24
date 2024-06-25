import React from 'react';
import styles from '../scss/NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.title} to="/home">
        <div className={styles['main-title']}>ELLINOR</div>
        <div className={styles['main-title']}>LINDSTRÖM</div>
        <div className={styles.subtitle}>PORTFOLIO</div>
      </Link>
      <div className={styles['nav-links']}>
        <Link className={styles ['nav-link']} to="/home">Home</Link>
        <Link className={styles ['nav-link']} to="/projects">Projects</Link>
        <Link className={styles ['nav-link']} to="/about">About</Link>
        </div>
        <Link className={styles['contact-button']} to="/contact">Contact</Link>
    </div>
  );
};

export default NavBar;
