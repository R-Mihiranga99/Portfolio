import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import contactImg from '../../assets/contact-img.png';
import theme_pattern from '../../assets/theme_pattern.svg';
import underline from '../../assets/nav_underline.svg'
import {Link} from 'react-scroll';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

  const [menu,setMenu] = useState ("about")

  return (
    <nav className="navbar">
      <AnchorLink className='anchor-link' offset={50} href='#home'>
      <img src={logo} alt='Logo' className='logo'/></AnchorLink>
      <img src={theme_pattern} alt="" className='logo-img'/>
      <div className='desktopMenu'>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")} className="desktopMenuListItem">Home </p></AnchorLink>{menu==="home"? <img src= {underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")} className="desktopMenuListItem">About Me </p></AnchorLink>{menu==="about"? <img src= {underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")} className="desktopMenuListItem">Services </p></AnchorLink>{menu==="services"? <img src= {underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#MyWork'><p onClick={()=>setMenu("MyWork")} className="desktopMenuListItem">Portfolio </p></AnchorLink>{menu==="MyWork"? <img src= {underline} alt=''/>:<></>}</li>

      </div>
      <button className='desktopMenuButton'><AnchorLink className='anchor-link' offset={50} href='#Contact'>
        <img src= {contactImg} alt='' className='desktopMenuImg'/>
        Contact Me
        </AnchorLink>
      </button>

    </nav>

  )
}

export default Navbar;