import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import ConsultingServices from '../components/ConsultingServices';

function Home() {
  useEffect(() => {
    NProgress.start();
    // Simulate loading; you might want to remove this for real data fetching
    const timer = setTimeout(() => {
      NProgress.done();
    }, 1000); // Adjust the delay as needed

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, []);

  // Variants for page sections to animate on scroll
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <div className="bg-slate-100 flex flex-col min-h-screen overflow-hidden">
      {/* Animated Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.div>

      {/* Animated Consulting Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }} // Triggers the animation only once
      >
        <ConsultingServices />
      </motion.div>

      {/* Animated About Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }} // Triggers the animation only once
      >
        <AboutSection />
      </motion.div>

      {/* Animated Contact Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }} // Triggers the animation only once
      >
        <ContactSection />
      </motion.div>
    </div>
  );
}

export default Home;
