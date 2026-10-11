import React, { useState, useEffect } from "react";
import { useScroll, useTransform, motion, useReducedMotion } from "framer-motion";

export const ScrollAnimatedBuilding = ({
  containerRef,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll progress of the hero artwork section
  // Animation advances across the hero scroll range and settles when user scrolls down towards the About section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Requirement C: Reduce starting rotation from 20 to exactly 10 degrees, settling to 0 degrees
  const rotate = useTransform(scrollYProgress, [0, 0.45], shouldReduceMotion ? [0, 0] : [10, 0]);

  // Requirement D: Scale adjustment (desktop approx 1.05 to 1, mobile responsive)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.45],
    shouldReduceMotion ? [1, 1] : (isMobile ? [1.02, 1] : [1.05, 1])
  );

  // Requirement D & Animation detail: Vertical translation explicitly applied to the building
  // Starts with slight offset and translates upward into resting baseline as user scrolls
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.45],
    shouldReduceMotion ? [0, 0] : (isMobile ? [20, 0] : [40, 0])
  );

  return (
    <div className="hero-building-container" style={{ perspective: "1000px" }}>
      {/* Initial load entrance: rises smoothly into view */}
      <motion.div
        className="hero-building-motion-wrapper"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.85,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          rotateX: rotate,
          scale: scale,
          y: translateY,
          transformOrigin: "bottom center",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src="/building-crop.png"
          alt="University School of Automation and Robotics Campus Dome Architecture"
          className="hero-building-image"
          draggable="false"
        />
      </motion.div>
    </div>
  );
};

export default ScrollAnimatedBuilding;
