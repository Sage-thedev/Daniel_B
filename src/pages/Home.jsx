import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import ConsultingServices from '../components/ConsultingServices';

function Home() {
  useEffect(() => {
    NProgress.start();
    // Simulating loading; you might want to remove this for real data fetching
    const timer = setTimeout(() => {
      NProgress.done();
    }, 1000); // Adjust the delay as needed

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, []);

  return (
    <div className="bg-slate-100 flex flex-col min-h-screen overflow-x-hidden">
      <HeroSection />
      <ConsultingServices />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default Home;
