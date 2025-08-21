import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Components
import HeroSection from './components/HeroSection';
import WorkSection from './components/WorkSection';
import SkillsSection from './components/SkillsSection';
import Scene3D from '../../components/Scene3D/Scene3D';

import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      gsap.utils.toArray<HTMLElement>('.animate-on-scroll').forEach((element) => {
        gsap.fromTo(element, 
          {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
            }
          }
        );
      });

      // Parallax effect for background elements
      gsap.utils.toArray<HTMLElement>('.parallax-bg').forEach((element) => {
        gsap.to(element, {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background 3D Scene */}
      <motion.div 
        className="background-3d"
        style={{ y: backgroundY }}
      >
        <Scene3D />
      </motion.div>

      {/* Hero Section */}
      <HeroSection />

      {/* Work Section */}
      <section id="work" className="animate-on-scroll">
        <WorkSection />
      </section>

      {/* Skills Section */}
      <section className="animate-on-scroll">
        <SkillsSection />
      </section>

      {/* Parallax decorative elements */}
      <div className="parallax-bg decoration-1" />
      <div className="parallax-bg decoration-2" />
    </motion.div>
  );
};

export default Home;
