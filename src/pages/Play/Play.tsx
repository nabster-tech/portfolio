import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Play.css';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
}

const Play: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: '1',
      title: 'VR Experience Design',
      category: 'AR/VR',
      description: 'Immersive virtual reality experience for architectural visualization',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop',
      tags: ['Unity', 'C#', 'Oculus', '3D Modeling'],
      year: '2024'
    },
    {
      id: '2',
      title: 'Interactive 3D Website',
      category: 'Web Development',
      description: 'Award-winning 3D interactive website with WebGL animations',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Three.js', 'React', 'WebGL', 'GSAP'],
      year: '2024'
    },
    {
      id: '3',
      title: 'Mobile App UX Design',
      category: 'UX/UI Design',
      description: 'Complete UX/UI design for a health and wellness mobile application',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Figma', 'Prototyping', 'User Research', 'iOS'],
      year: '2023'
    },
    {
      id: '4',
      title: 'AR Product Visualizer',
      category: 'AR/VR',
      description: 'Augmented reality app for furniture placement and visualization',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
      tags: ['ARKit', 'Swift', '3D Scanning', 'iOS'],
      year: '2023'
    },
    {
      id: '5',
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce platform with advanced animations',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      year: '2023'
    },
    {
      id: '6',
      title: 'Brand Identity Design',
      category: 'Design',
      description: 'Complete brand identity for a tech startup',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Illustrator', 'Photoshop', 'Brand Strategy'],
      year: '2022'
    }
  ];

  const categories = ['All', 'Web Development', 'AR/VR', 'UX/UI Design', 'Design'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.div
      className="play-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="play-content section-padding">
          <motion.div
            className="play-hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl">Playground</h1>
            <p className="hero-subtitle">
              Explore my creative experiments, side projects, and innovative solutions
              across various technologies and design disciplines.
            </p>
          </motion.div>

          <motion.div
            className="filter-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="projects-grid"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/case-study/${project.id}`} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <span className="project-year">{project.year}</span>
                      <div className="project-category-badge">{project.category}</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="no-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>No projects found for this category.</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Play;
