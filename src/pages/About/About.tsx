import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, experiences } from '../../data/personalData';
import './About.css';

const About: React.FC = () => {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="about-content section-padding">
          <motion.div
            className="about-hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl">About {personalInfo.name.split(' ')[0]}</h1>
            <p className="hero-subtitle">
              {personalInfo.bio.split('\n')[0]}
            </p>
          </motion.div>

          <motion.div
            className="about-grid"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="about-text">
              <h2 className="heading-md">My Journey</h2>
              {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                alt="Profile"
              />
            </div>
          </motion.div>

          <motion.div
            className="experience-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="heading-md">Experience</h2>
            <div className="timeline">
              {experiences.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-date">{exp.startDate} - {exp.endDate}</div>
                  <div className="timeline-content">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company} • {exp.location}</h4>
                    <p>{exp.description}</p>
                    {exp.achievements.length > 0 && (
                      <ul>
                        {exp.achievements.slice(0, 2).map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
