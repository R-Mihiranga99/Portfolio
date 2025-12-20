import React from 'react';
import './Intro.css';
import { Mail, Download } from 'lucide-react';
import Profile_Bg from '../../assets/Profile-Bg.jpeg';

const Intro = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-greeting">Hello, I'm</div>
        <h1 className="hero-title">
          <span className="hero-name">Mihiranga</span>
        </h1>
        <h2 className="hero-subtitle">Software Developer</h2>
        <p className="hero-desc">
          I'm a skilled web developer with experience in creating visually appealing 
          and user-friendly websites. Passionate about bringing ideas to life through 
          clean code and modern design.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollToSection('contact')}>
            Hire Me <Mail size={18} />
          </button>
          <a href="/resume.pdf" download="resume.pdf">
            <button className="btn-secondary">
              Resume <Download size={18} />
            </button>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-container">
          <div className="profile-bg"></div>
          <img 
            src={Profile_Bg} 
            alt="Profile" 
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;