import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.png';

const About = () => {
  const skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'React JS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Next JS', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'Node.js', level: 65 }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="about-content">
        <div className="about-image">
          <img 
            src={profile_img}
            alt="About" 
          />
        </div>
        <div className="about-text">
          <p>
            I am an experienced Frontend Developer with over one year of professional expertise 
            in the field. Throughout my career, I have had the privilege of collaborating with 
            prestigious organizations, contributing to their success and growth.
          </p>
          <p>
            My passion for frontend development is not only reflected in my extensive experience 
            but also in the enthusiasm and dedication I bring to each project. I'm constantly 
            learning and adapting to new technologies to deliver the best solutions.
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: `${skill.level}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1+</div>
              <div className="stat-label">YEARS OF EXPERIENCE</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">PROJECTS COMPLETED</div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;