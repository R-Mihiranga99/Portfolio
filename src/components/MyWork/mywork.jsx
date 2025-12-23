import React from 'react';
import './MyWork.css';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import theme_pattern from '../../assets/theme_pattern.svg';

const MyWork = () => {
  const projects = [
    { 
      id: 1, 
      title: 'E-Commerce Platform', 
      tech: 'React, Node.js, MongoDB', 
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      link: '#'
    },
    { 
      id: 2, 
      title: 'Task Management App', 
      tech: 'Next.js, TypeScript, PostgreSQL', 
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      link: '#'
    },
    { 
      id: 3, 
      title: 'Social Media Dashboard', 
      tech: 'React, Firebase, Tailwind', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      link: '#'
    },
    { 
      id: 4, 
      title: 'Portfolio Website', 
      tech: 'React, CSS3, Framer Motion', 
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      link: '#'
    },
    { 
      id: 5, 
      title: 'Weather App', 
      tech: 'React, API Integration', 
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
      link: '#'
    },
    { 
      id: 6, 
      title: 'Blog Platform', 
      tech: 'Next.js, MDX, Vercel', 
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className="mywork-section">

      {/* 🔹 Title animation */}
      <motion.div
        className="mywork-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </motion.div>

      {/* 🔹 Projects grid */}
      <motion.div
        className="projects-grid"
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
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.03 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default MyWork;
