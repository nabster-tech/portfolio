import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { skills } from '../../../data/personalData';
import './SkillsSection.css';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill cards
      gsap.fromTo('.skill-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
            end: 'bottom 20%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Get unique categories from skills data and add 'All'
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(skills.map(skill => skill.category)));
    return ['All', ...uniqueCategories];
  }, []);

  // Filter skills based on active category
  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') {
      return skills;
    }
    return skills.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section ref={sectionRef} className="skills-section section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">Skills &amp; Expertise</h2>
          <p className="section-description">
            A diverse skill set spanning design, development, and emerging technologies
          </p>
        </motion.div>

        <div className="skills-categories">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`category-filter ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div className="skills-grid" layout>
          {filteredSkills.map((skill) => (
            <motion.div 
              key={skill.name} 
              className="skill-card"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-category">{skill.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3 className="cta-title">Interested in working together?</h3>
            <p className="cta-description">
              Let's discuss how my skills and experience can contribute to your next project.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                <span className="button-icon">💬</span>
                Get In Touch
              </Link>
              <Link to="/about" className="cta-button secondary">
                <span className="button-icon">👨‍💻</span>
                Learn More About Me
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
