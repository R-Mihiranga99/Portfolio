import React, { useEffect, useRef } from 'react';
import './Intro.css';
import { Mail, Download, Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import Typed from 'typed.js';
import Profile_Bg from '../../assets/Profile-Bg.jpeg';

const Intro = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ['Web Developer', 'UI / UX Designer', 'Software Engineer'],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1200,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-greeting">Hello, I'm</div>

        <h1 className="hero-title">
          <span className="hero-name">Mihiranga</span>
        </h1>

        {/* 🔥 TYPING EFFECT */}
        <h2 className="hero-subtitle">
          I'm a <span ref={typingRef} className="typing-text"></span>
        </h2>

        <p className="hero-desc">
          I'm a skilled web developer with experience in creating visually appealing
          and user-friendly websites.
        </p>

        <div className="hero-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook size={22} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin size={22} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github size={22} />
          </a>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollToSection('contact')}>
            Hire Me <Mail size={18} />
          </button>

          <a href="/resume.pdf" download>
            <button className="btn-secondary">
              Resume <Download size={18} />
            </button>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="profile-container">
          <div className="profile-bg"></div>
          <img src={Profile_Bg} alt="Profile" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
