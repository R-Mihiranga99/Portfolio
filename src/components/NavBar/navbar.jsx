import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Menu, X } from 'lucide-react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/logo.jpg';
import theme_pattern from '../../assets/theme_pattern.svg';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <AnchorLink className='anchor-link' offset={50} href='#home'>
      <img src={logo} alt='Logo' className='logo'/></AnchorLink>
      <img src={theme_pattern} alt="" className='logo-img'/>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
            onClick={() => scrollToSection('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
            onClick={() => scrollToSection('about')}
          >
            About
          </a>
        </li>
        <li>
          <a 
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} 
            onClick={() => scrollToSection('services')}
          >
            Services
          </a>
        </li>
        <li>
          <a 
            className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} 
            onClick={() => scrollToSection('portfolio')}
          >
            Portfolio
          </a>
        </li>
      </ul>
      <button className="contact-btn" onClick={() => scrollToSection('contact')}>
        Contact Me
      </button>
      <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;