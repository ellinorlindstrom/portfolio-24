import React from 'react';
import '../scss/NavBar.scss';
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeButton';
import '../scss/App.scss';

const NavBar: React.FC = () => {
  return (
    <div className='navbar'>
      <Link className='title' to="/home">
        <div className='main-title'>ELLINOR</div>
        <div className='main-title'>LINDSTRÖM</div>
        <div className='subtitle'>PORTFOLIO</div>
      </Link>
      <div className='nav-links'>
        <Link className='nav-link' to="/home">Home</Link>
        <Link className='nav-link' to="/projects">Projects</Link>
        <Link className='nav-link' to="/about">About</Link>
        <Link className='nav-link' to="/contact">Contact</Link>
        </div>
        <ThemeToggleButton />
    </div>
  );
};

export default NavBar;
