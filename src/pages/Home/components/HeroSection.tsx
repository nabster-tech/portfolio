import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { heroStats } from "../../../data/personalData";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    // More sophisticated scroll detection for bidirectional behavior
    const handleScroll = () => {
      const heroSection = heroRef.current;
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      // const viewportHeight = window.innerHeight;

      // Show indicator if hero section is more than 60% visible
      // Hide if hero section is mostly out of view (less than 40% visible)
      const visibilityThreshold = 0.4;
      const heroVisibilityRatio = Math.max(
        0,
        Math.min(1, heroRect.bottom / heroSection.offsetHeight)
      );

      const shouldShowIndicator = heroVisibilityRatio > visibilityThreshold;

      if (shouldShowIndicator !== isHeroVisible) {
        setIsHeroVisible(shouldShowIndicator);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    const ctx = gsap.context(() => {
      // GSAP animations for text reveal
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        ".hero-title-word",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        }
      )
        .fromTo(
          ".hero-subtitle",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // Mouse move parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;

        gsap.to(".hero-floating-element", {
          x: xPercent * 30,
          y: yPercent * 30,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Hero content parallax animation
      gsap.to(".hero-content", {
        y: -50,
        opacity: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, [isHeroVisible]);

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      ref={heroRef}
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-container">
        <div className="hero-content">
          <motion.div className="hero-title-container">
            <h1 ref={titleRef} className="hero-title">
              <span className="hero-title-word">Creative</span>
              <span className="hero-title-word">UX Designer</span>
              <span className="hero-title-word text-gradient">& Developer</span>
            </h1>
          </motion.div>

          <motion.p ref={subtitleRef} className="hero-subtitle">
            Crafting immersive digital experiences through innovative design,
            <br />
            AR/VR technologies, and cutting-edge 3D animations.
          </motion.p>

          <motion.div className="hero-cta">
            <button onClick={scrollToWork} className="cta-button primary">
              View My Work
            </button>
            <Link to="/contact" className="cta-button secondary">
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="stat">
              <span className="stat-number">{heroStats.projects}</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">{heroStats.experience}</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">{heroStats.clients}</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <div className="hero-floating-elements">
          <div className="hero-floating-element element-1" />
          <div className="hero-floating-element element-2" />
          <div className="hero-floating-element element-3" />
        </div>

        {/* Scroll indicator - show/hide based on hero section visibility */}
        <AnimatePresence>
          {isHeroVisible && (
            <motion.div
              key="scroll-indicator"
              ref={scrollIndicatorRef}
              className="scroll-indicator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                delay: isHeroVisible ? 2 : 0,
                duration: 0.8,
                exit: { duration: 0.5 },
              }}
            >
              <div className="scroll-mouse">
                <div className="scroll-wheel" />
              </div>
              <span>Scroll to explore</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default HeroSection;
