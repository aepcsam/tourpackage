import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>About Us</h2>
            <img
              src='./images/download.png'
              alt='Ricoma qatar Embroidery'
              className='logo'
            />
            <p>
              Lorem ipsum dolor sit amet sectetur adipiscing elit amet
              consectetur scing elit amet consectetur adipiscing elit sed et
              eletum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet sectetur adipiscing elit amet
              consectetur scing elit amet.
            </p>
            <div className='icon flex_space'>
              <a href='https://www.facebook.com/100088075972149/videos/1592985097794694/'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='!#'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='!#'>
                <i className='fab fa-linkedin'></i>
              </a>
              <a href='https://www.instagram.com/ricoma.qatar/'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='!#'>
                <i className='fab fa-pinterest'></i>
              </a>
              <a href='https://www.youtube.com/channel/UCqlyARqBwS6U1WzafZpdRmQ?sub_confirmation=1'>
                <i className='fab fa-youtube'></i>
              </a>
            </div>
          </div>

          <div className='box'>
            <h2>Navigation</h2>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About us</Link>
              </li>
              <li>
                <Link to='/gallery'>Gallery</Link>
              </li>
              <li>
                <Link to='/destinations'>Destinations</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/testimonial'>Testimonial</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className='box post'>
            <h2>Recent Posts</h2>
            <ul>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
            </ul>
          </div>

          <div className='box'>
            <h2>NewsLetter</h2>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
            <input type='text' name='' id='' />
            <input type='text' className='primaty-btn' value='SUBSCRIBE' />
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2023 All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
