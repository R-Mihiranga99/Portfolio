import React from 'react';
import './MyWork.css';
import { ExternalLink } from 'lucide-react';
import theme_pattern from '../../assets/theme_pattern.svg';
import Portfolio from '../../assets/portfolio_thumbnail.png';
import Post_office from '../../assets/post_office_thumbnail.png';
import FilmoraX from '../../assets/filmorax_thumbnail.png';
import Weather_App from '../../assets/weather_app_thumbnail.png';
import { motion } from 'framer-motion';

const MyWork = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Portfolio Website', 
      tech: 'React Vite, JavaScript, HTML5/CSS3', 
      image: Portfolio,
      link: 'https://github.com/R-Mihiranga99/Portfolio.git'
    },
    { 
      id: 2, 
      title: 'Trust Post Logistics App', 
      tech: 'React.js, Node.js, PostgreSQL', 
      image: Post_office,
      link: 'https://github.com/R-Mihiranga99/Trust-Post-Logistic-App.git'
    },
    { 
      id: 3, 
      title: 'FilmoraX Movie Website', 
      tech: 'React, Node.js, Express.js, PostgreSQL, TMDB API', 
      image: FilmoraX,
      link: 'https://github.com/R-Mihiranga99/FilmoraX_Movie_Website.git'
    },
    { 
      id: 4, 
      title: 'BookNest Online BookStore', 
      tech: 'React, Node.js, Express.js, MongoDB', 
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      link: 'https://github.com/R-Mihiranga99/BookNest_Online_BookStore.git'
    },
    { 
      id: 5, 
      title: 'Weather App', 
      tech: 'JavaScript, HTML5/CSS3, OpenWeather API', 
      image: Weather_App,
      link: 'https://github.com/R-Mihiranga99/Weather_App.git'
    },
    { 
      id: 6, 
      title: 'Blog Platform', 
      tech: 'Next.js, MDX, Vercel', 
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      link: 'https://github.com/yourusername/blog-platform'
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Handle click to open in new tab
  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="mywork-section">
      <motion.div 
        className="mywork-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        <h1>My Latest Work</h1>
        <img 
          src={theme_pattern} 
          alt=""
        />
      </motion.div>

      <motion.div 
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="project-card"
            variants={cardVariants}
            onClick={() => handleProjectClick(project.link)}
            whileHover={{ 
              y: -12,
              boxShadow: "0 25px 50px rgba(102, 126, 234, 0.4)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            style={{ cursor: 'pointer' }}
          >
            <div className="project-image-container">
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
                variants={imageVariants}
                whileHover="hover"
              />
              <motion.div 
                className="project-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <motion.div 
              className="project-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {project.title}
              </motion.h3>
              
              <motion.p 
                className="project-tech"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {project.tech}
              </motion.p>
              
              <motion.button
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleProjectClick(project.link);
                }}
                className="project-link"
                variants={linkVariants}
                whileHover="hover"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  padding: 0,
                  font: 'inherit'
                }}
              >
                View Project 
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '0.5rem' }}
                >
                  <ExternalLink size={16} />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MyWork;