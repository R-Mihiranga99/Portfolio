import React from 'react';
import './Footer.css';
import { Github, Linkedin, Twitter } from 'lucide-react';
import footer_logo from '../../assets/footer_logo.png';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const leftSideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const rightSideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
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
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div 
        className="footer-content"
        variants={containerVariants}
      >
        <motion.div 
          className="footer-left"
          variants={leftSideVariants}
        >
          <motion.img 
            src={footer_logo} 
            alt=""
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I am a full-stack web developer from Sri Lanka
          </motion.p>
        </motion.div>

        <motion.div 
          className="social-links"
          variants={rightSideVariants}
        >
          <motion.a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            variants={socialVariants}
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              backgroundColor: "#333",
              boxShadow: "0 5px 20px rgba(51, 51, 51, 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            variants={socialVariants}
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              backgroundColor: "#0A66C2",
              boxShadow: "0 5px 20px rgba(10, 102, 194, 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            variants={socialVariants}
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              backgroundColor: "#1DA1F2",
              boxShadow: "0 5px 20px rgba(29, 161, 242, 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Twitter size={20} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="footer-bottom"
        variants={bottomVariants}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © 2025 Rav Mihiranga. All rights reserved.
        </motion.p>
        <motion.div 
          className="footer-links"
          variants={containerVariants}
        >
          <motion.a 
            href="#privacy"
            variants={linkVariants}
            whileHover={{ 
              color: "#667eea",
              x: 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Privacy Policy
          </motion.a>
          <motion.a 
            href="#terms"
            variants={linkVariants}
            whileHover={{ 
              color: "#667eea",
              x: 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Terms of Service
          </motion.a>
          <motion.a 
            href="#contact"
            variants={linkVariants}
            whileHover={{ 
              color: "#667eea",
              x: 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;