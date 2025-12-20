import React from 'react'
import './services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
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
        <div className="services-title">
            <h1>My Services</h1>
            <img src= {theme_pattern} alt="" />
        </div>
        <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services;