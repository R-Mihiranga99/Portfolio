import React from 'react';
import '../Services/services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import { Code, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { 
      icon: <Code className="service-icon-svg" />, 
      title: 'Web Development', 
      desc: 'Building responsive and modern web applications using latest technologies and best practices for optimal performance.' 
    },
    { 
      icon: <Palette className="service-icon-svg" />, 
      title: 'UI/UX Design', 
      desc: 'Creating intuitive and visually appealing user interfaces that provide seamless user experiences across all devices.' 
    },
    { 
      icon: <Zap className="service-icon-svg" />, 
      title: 'Performance Optimization', 
      desc: 'Optimizing websites for speed, SEO, and better user experience through code splitting and modern optimization techniques.' 
    }
  ];

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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
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

  return (
    <section id="services" className="services-section">
      <motion.div 
        className="services-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        <h1>My Services</h1>
        <img 
          src={theme_pattern} 
          alt=""
        />
      </motion.div>

      <motion.div 
        className="services-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-card"
            variants={cardVariants}
            whileHover={{ 
              y: -15,
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(102, 126, 234, 0.4)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="service-icon"
              variants={iconVariants}
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
                transition: { duration: 0.6 }
              }}
            >
              {service.icon}
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {service.desc}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;