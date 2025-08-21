import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './WorkSection.css';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
}

const WorkSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Mock project data - in a real app, this would come from an API or CMS
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
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for project cards
      gsap.fromTo('.project-card',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.work-grid',
            start: 'top 80%',
            end: 'bottom 20%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="work-section section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">Featured Work</h2>
          <p className="section-description">
            Explore my latest projects spanning UX design, AR/VR experiences, 
            and interactive 3D animations
          </p>
        </motion.div>

        <div className="work-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/case-study/${project.id}`}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-year">{project.year}</span>
                  <div className="project-tags">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <motion.div
          className="work-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link to="/play" className="cta-button primary">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
