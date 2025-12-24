import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.png';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'React JS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Next JS', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'Node.js', level: 65 }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  return (
    <section id="about" className="about-section">
      <motion.div 
        className="about-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        <h1>About Me</h1>
        <img 
          src={theme_pattern} 
          alt=""
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div 
        className="about-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div 
          className="about-image"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={profile_img}
            alt="About" 
          />
        </motion.div>

        <motion.div 
          className="about-text"
          variants={textVariants}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I am an experienced Frontend Developer with over one year of professional expertise 
            in the field. Throughout my career, I have had the privilege of collaborating with 
            prestigious organizations, contributing to their success and growth.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My passion for frontend development is not only reflected in my extensive experience 
            but also in the enthusiasm and dedication I bring to each project. I'm constantly 
            learning and adapting to new technologies to deliver the best solutions.
          </motion.p>

          <motion.div 
            className="skills-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-item"
                variants={skillVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    custom={skill.level}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={progressVariants}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.div 
            className="stat-item"
            variants={statVariants}
            whileHover={{ 
              scale: 1.1,
              rotate: 2,
              boxShadow: "0 15px 40px rgba(102, 126, 234, 0.4)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="stat-number"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.5,
                type: "spring",
                stiffness: 200
              }}
            >
              1+
            </motion.div>
            <div className="stat-label">YEARS OF EXPERIENCE</div>
          </motion.div>

          <motion.div 
            className="stat-item"
            variants={statVariants}
            whileHover={{ 
              scale: 1.1,
              rotate: -2,
              boxShadow: "0 15px 40px rgba(102, 126, 234, 0.4)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="stat-number"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.7,
                type: "spring",
                stiffness: 200
              }}
            >
              5+
            </motion.div>
            <div className="stat-label">PROJECTS COMPLETED</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;