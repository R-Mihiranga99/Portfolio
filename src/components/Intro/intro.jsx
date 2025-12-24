import React, { useEffect, useRef } from 'react';
import '../Intro/intro.css';
import { Mail, Download, Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import Typed from 'typed.js';
import Profile_Bg from '../../assets/Profile-Bg.jpeg';
import { motion } from 'framer-motion';

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

  const greetingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const descVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
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

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="hero-greeting"
          variants={greetingVariants}
        >
          Hello, I'm
        </motion.div>

        <motion.h1 
          className="hero-title"
          variants={titleVariants}
        >
          <motion.span 
            className="hero-name"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(102, 126, 234, 0.8)"
            }}
            transition={{ duration: 0.3 }}
          >
            Mihiranga
          </motion.span>
        </motion.h1>

        <motion.h2 
          className="hero-subtitle"
          variants={subtitleVariants}
        >
          I'm a <span ref={typingRef} className="typing-text"></span>
        </motion.h2>

        <motion.p 
          className="hero-desc"
          variants={descVariants}
        >
          I'm a skilled web developer with experience in creating visually appealing
          and user-friendly websites.
        </motion.p>

        <motion.div 
          className="hero-socials"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noreferrer"
            variants={socialVariants}
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              backgroundColor: "#1877F2"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Facebook size={22} />
          </motion.a>
          <motion.a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer"
            variants={socialVariants}
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Instagram size={22} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer"
            variants={socialVariants}
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              backgroundColor: "#0A66C2"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Linkedin size={22} />
          </motion.a>
          <motion.a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            variants={socialVariants}
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              backgroundColor: "#333"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Github size={22} />
          </motion.a>
        </motion.div>

        <motion.div 
          className="hero-buttons"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.button 
            className="btn-primary" 
            onClick={() => scrollToSection('contact')}
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 30px rgba(102, 126, 234, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Hire Me <Mail size={18} />
          </motion.button>

          <a href="/resume.pdf" download>
            <motion.button 
              className="btn-secondary"
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05,
                borderColor: "#667eea",
                backgroundColor: "rgba(102, 126, 234, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Resume <Download size={18} />
            </motion.button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-image"
        initial="hidden"
        animate="visible"
        variants={imageContainerVariants}
      >
        <motion.div 
          className="profile-container"
          animate={floatAnimation}
        >
          <motion.div 
            className="profile-bg"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.img 
            src={Profile_Bg} 
            alt="Profile" 
            className="profile-img"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 60px rgba(102, 126, 234, 0.4)"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;