import React, { useState } from 'react';
import '../Contact/Contact.css';
import { Mail, Phone, MapPin } from 'lucide-react';
import theme_pattern from '../../assets/theme_pattern.svg';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "5ad99d75-6e4d-4f38-a61c-6b38026938aa");
    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    if (res.success) {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    }
  };

  // Animation variants
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
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const rightSideVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const formFieldVariants = {
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

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div 
        className="contact-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        <h1>Get in touch</h1>
        <img 
          src={theme_pattern} 
          alt=""
        />
      </motion.div>

      <motion.div 
        className="contact-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div 
          className="contact-info"
          variants={leftSideVariants}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's talk
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm currently available to take on new projects, so feel free to send me a 
            message about anything that you want me to work on. You can contact anytime.
          </motion.p>

          <motion.div 
            className="contact-items"
            variants={containerVariants}
          >
            <motion.div 
              className="contact-item"
              variants={contactItemVariants}
              whileHover={{ 
                x: 10,
                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="contact-icon"
                variants={iconVariants}
                whileHover="hover"
              >
                <Mail size={24} />
              </motion.div>
              <div className="contact-details">
                <p>ravindumw99@gmail.com</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-item"
              variants={contactItemVariants}
              whileHover={{ 
                x: 10,
                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="contact-icon"
                variants={iconVariants}
                whileHover="hover"
              >
                <Phone size={24} />
              </motion.div>
              <div className="contact-details">
                <p>+94 77 65 81 847</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-item"
              variants={contactItemVariants}
              whileHover={{ 
                x: 10,
                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="contact-icon"
                variants={iconVariants}
                whileHover="hover"
              >
                <MapPin size={24} />
              </motion.div>
              <div className="contact-details">
                <p>Meemaduma, Baddegama, Galle.</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.form 
          onSubmit={onSubmit} 
          className="contact-form"
          variants={rightSideVariants}
        >
          <motion.div 
            className="form-group"
            variants={formFieldVariants}
          >
            <label htmlFor="name">Your Name</label>
            <motion.input 
              type="text" 
              id="name"
              name="name" 
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              whileFocus={{ 
                scale: 1.02,
                borderColor: "#667eea",
                transition: { duration: 0.2 }
              }}
            />
          </motion.div>

          <motion.div 
            className="form-group"
            variants={formFieldVariants}
          >
            <label htmlFor="email">Your Email</label>
            <motion.input 
              type="email" 
              id="email"
              name="email" 
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              whileFocus={{ 
                scale: 1.02,
                borderColor: "#667eea",
                transition: { duration: 0.2 }
              }}
            />
          </motion.div>

          <motion.div 
            className="form-group"
            variants={formFieldVariants}
          >
            <label htmlFor="message">Your Message</label>
            <motion.textarea 
              id="message"
              name="message" 
              placeholder="Type your message here..."
              rows="8"
              value={formData.message}
              onChange={handleChange}
              required
              whileFocus={{ 
                scale: 1.02,
                borderColor: "#667eea",
                transition: { duration: 0.2 }
              }}
            />
          </motion.div>

          <motion.button 
            type="submit" 
            className="submit-btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;