import React from 'react';
import './services.css';
import { motion } from 'framer-motion';
import theme_pattern from '../../assets/theme_pattern.svg';
import { Code, Palette, Zap } from 'lucide-react';

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

  return (
    <section id="services" className="services-section">

      {/* 🔹 Title animation */}
      <motion.div
        className="services-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </motion.div>

      {/* 🔹 Cards grid */}
      <motion.div
        className="services-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.03 }}
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Services;
