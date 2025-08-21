import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import './CaseStudy.css';

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log('Case study ID:', id); // Using id to avoid TS error

  // Mock project data - in a real app, you'd fetch this based on the ID
  const project = {
    id: '1',
    title: 'VR Experience Design',
    category: 'AR/VR',
    description: 'Immersive virtual reality experience for architectural visualization',
    fullDescription: 'This project involved creating a comprehensive VR experience that allows users to walk through architectural spaces before they are built. Using Unity and C#, I developed an immersive environment that supports both Oculus Rift and Quest devices.',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
    ],
    tags: ['Unity', 'C#', 'Oculus', '3D Modeling'],
    year: '2024',
    duration: '6 months',
    role: 'Lead VR Developer & Designer',
    client: 'Architecture Studio Pro',
    challenge: 'The main challenge was creating a seamless VR experience that would allow clients to experience architectural spaces with realistic lighting, materials, and spatial understanding before construction begins.',
    solution: 'I developed a custom VR application using Unity that features photorealistic rendering, interactive elements, and intuitive navigation controls. The solution includes day/night lighting cycles and material customization options.',
    results: [
      'Reduced client revision requests by 60%',
      'Improved project approval rate by 40%',
      'Featured in VR Design Awards 2024'
    ]
  };

  return (
    <motion.div
      className="case-study-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="case-study-content">
          {/* Back Button */}
          <motion.div
            className="back-button-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/play" className="back-button">
              ← Back to Projects
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            className="case-study-hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-content">
              <span className="project-category">{project.category}</span>
              <h1 className="heading-xl">{project.title}</h1>
              <p className="hero-subtitle">{project.fullDescription}</p>
              
              <div className="project-meta">
                <div className="meta-item">
                  <span className="meta-label">Year</span>
                  <span className="meta-value">{project.year}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Duration</span>
                  <span className="meta-value">{project.duration}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Role</span>
                  <span className="meta-value">{project.role}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Client</span>
                  <span className="meta-value">{project.client}</span>
                </div>
              </div>
            </div>
            
            <div className="hero-image">
              <img src={project.image} alt={project.title} />
            </div>
          </motion.div>

          {/* Project Details */}
          <div className="project-details section-padding">
            <div className="details-grid">
              <motion.div
                className="detail-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-md">The Challenge</h2>
                <p>{project.challenge}</p>
              </motion.div>

              <motion.div
                className="detail-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-md">The Solution</h2>
                <p>{project.solution}</p>
              </motion.div>

              <motion.div
                className="detail-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-md">Technologies Used</h2>
                <div className="tech-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="detail-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="heading-md">Results</h2>
                <ul className="results-list">
                  {project.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Image Gallery */}
          <motion.div
            className="image-gallery section-padding"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md text-center">Project Gallery</h2>
            <div className="gallery-grid">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={image} alt={`${project.title} - Image ${index + 1}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Next Project */}
          <motion.div
            className="next-project section-padding"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="next-project-content">
              <h3 className="heading-sm">Next Project</h3>
              <Link to="/case-study/2" className="next-project-link">
                Interactive 3D Website →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudy;
