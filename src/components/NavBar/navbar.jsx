import React, { useState, useEffect } from 'react';
import '../NavBar/navbar.css';
import { Menu, X } from 'lucide-react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/logo.jpg';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 200
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <AnchorLink className='anchor-link' offset={50} href='#home'>
        <motion.img 
          src={logo} 
          alt='Logo' 
          className='logo'
          variants={logoVariants}
          whileHover={{ 
            scale: 1.1,
            rotate: 360,
            transition: { duration: 0.6 }
          }}
          whileTap={{ scale: 0.95 }}
        />
      </AnchorLink>

      {/* Desktop Menu */}
      <motion.ul 
        className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
        variants={navbarVariants}
      >
        <motion.li variants={menuItemVariants}>
          <motion.a 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.1, color: "#667eea" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Home
          </motion.a>
        </motion.li>
        <motion.li variants={menuItemVariants}>
          <motion.a 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.1, color: "#667eea" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.a>
        </motion.li>
        <motion.li variants={menuItemVariants}>
          <motion.a 
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} 
            onClick={() => scrollToSection('services')}
            whileHover={{ scale: 1.1, color: "#667eea" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Services
          </motion.a>
        </motion.li>
        <motion.li variants={menuItemVariants}>
          <motion.a 
            className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} 
            onClick={() => scrollToSection('portfolio')}
            whileHover={{ scale: 1.1, color: "#667eea" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Portfolio
          </motion.a>
        </motion.li>
      </motion.ul>

      <motion.button 
        className="contact-btn" 
        onClick={() => scrollToSection('contact')}
        variants={buttonVariants}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 8px 25px rgba(102, 126, 234, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Contact Me
      </motion.button>

      <motion.button 
        className="mobile-toggle" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <motion.div
        className="mobile-menu-container"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        <motion.ul className="mobile-menu-list">
          <motion.li variants={mobileItemVariants}>
            <motion.a 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
              onClick={() => scrollToSection('home')}
              whileHover={{ x: 10, color: "#667eea" }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
          </motion.li>
          <motion.li variants={mobileItemVariants}>
            <motion.a 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
              onClick={() => scrollToSection('about')}
              whileHover={{ x: 10, color: "#667eea" }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
          </motion.li>
          <motion.li variants={mobileItemVariants}>
            <motion.a 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} 
              onClick={() => scrollToSection('services')}
              whileHover={{ x: 10, color: "#667eea" }}
              whileTap={{ scale: 0.95 }}
            >
              Services
            </motion.a>
          </motion.li>
          <motion.li variants={mobileItemVariants}>
            <motion.a 
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} 
              onClick={() => scrollToSection('portfolio')}
              whileHover={{ x: 10, color: "#667eea" }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.a>
          </motion.li>
          <motion.li variants={mobileItemVariants}>
            <motion.button 
              className="mobile-contact-btn" 
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;