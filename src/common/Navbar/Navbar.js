import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space' onClick={handleClick}>
          <div className='menu-icon'>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>{' '}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <Link to='/' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/gallery' onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to='/destination' onClick={closeMobileMenu}>
                Destination
              </Link>
            </li>
            <li>
              <Link to='/blog' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/testimonial' onClick={closeMobileMenu}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className='login-area flex'>
            <li>
              <Link to='/sign-in'>
                <i className='fas fa-chevron-right'>Sign-in</i>
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <i className='fas fa-chevron-right'>Register</i>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <button className='primary-btn'>Request on Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>
      <header>
        <div className='container flex_space'>
          <div className='logo'>
            <img
              src='./images/download.png'
              alt='Qatar Ricoma Embrodiery Machine'
              className='logo'
            />
          </div>
          <div className='contact flex_space'>
            <div className='box flex_space'>
              <div className='icons'>
                <i className='far fa-clock'></i>
              </div>
              <div className='text'>
                <h4>Working Hours</h4>
                <Link to='/contact'>Monday - SUnday : 24 hours</Link>
              </div>
            </div>

            <div className='box flex_space'>
              <div className='icons'>
                <i className='fas fa-phone-volume'></i>
              </div>
              <div className='text'>
                <h4>Calling Us</h4>
                <Link to='/contact'>+974 50907170</Link>
              </div>
            </div>

            <div className='box flex_space'>
              <div className='icons'>
                <i className='fas fa-envelope'></i>
              </div>
              <div className='text'>
                <h4>Mailing Us</h4>
                <Link to='/contact'>ricoma.qatar@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
