import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personalData';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="contact-content section-padding">
          <motion.div
            className="contact-hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl">Let's Create Together</h1>
            <p className="hero-subtitle">
              Have a project in mind? I'd love to hear about it and explore how we can
              bring your vision to life through innovative design and technology.
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="cta-button primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="contact-card">
                <h3>Get In Touch</h3>
                <p>
                  I'm always interested in new opportunities and exciting projects.
                  Whether you're a startup looking to make a mark or an established
                  company wanting to innovate, let's discuss how we can work together.
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span>{personalInfo.location}</span>
                  </div>
                </div>

                <div className="social-links">
                  <h4>Follow Me</h4>
                  <div className="social-icons">
                    <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                      <span>🔗</span>
                      LinkedIn
                    </a>
                    <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link">
                      <span>🐙</span>
                      GitHub
                    </a>
                    {personalInfo.socialLinks.dribbble && (
                      <a href={personalInfo.socialLinks.dribbble} target="_blank" rel="noopener noreferrer" className="social-link">
                        <span>🎨</span>
                        Dribbble
                      </a>
                    )}
                    {personalInfo.socialLinks.twitter && (
                      <a href={personalInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                        <span>🐦</span>
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
