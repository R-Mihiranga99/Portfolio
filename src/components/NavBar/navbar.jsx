import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import contactImg from '../../assets/contact-img.png';
import theme_pattern from '../../assets/theme_pattern.svg';
import {Link} from 'react-scroll';

const Navbar = () => {

  return (
    <nav className="navbar">
      <img src={logo} alt='Logo' className='logo'/>
      <img src={theme_pattern} alt="" className='logo-img'/>
      <div className='desktopMenu'>
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About Me</Link>
        <Link className="desktopMenuListItem">Services</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>

      </div>
      <button className='desktopMenuButton'>
        <img src= {contactImg} alt='' className='desktopMenuImg'/>
        Contact Me
      </button>

    </nav>

  )
}

export default Navbar;