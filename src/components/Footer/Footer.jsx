import React from 'react';
import './Footer.css';
import { Github, Linkedin, Twitter } from 'lucide-react';
import footer_logo from '../../assets/footer_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={footer_logo} alt="" />
          <p>I am a full-stack web developer from Sri Lanka</p>
        </div>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Twitter size={20} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Rav Mihiranga. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;