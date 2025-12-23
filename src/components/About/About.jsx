import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
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

      {/* 🔹 Title animation */}
      <motion.div
        className="about-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </motion.div>

      <div className="about-content">

        {/* 🔹 Image animation */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={profile_img} alt="About" />
        </motion.div>

        {/* 🔹 Text + skills animation */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p>
            I am an experienced Frontend Developer with over one year of professional expertise
            in the field.
          </p>
          <p>
            My passion for frontend development is reflected in the enthusiasm and dedication
            I bring to each project.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 🔹 Stats animation */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <div className="stat-number">1+</div>
            <div className="stat-label">YEARS OF EXPERIENCE</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">PROJECTS COMPLETED</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
