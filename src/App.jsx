import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import PropertyGrid from './components/PropertyGrid';
import EMICalculator from './components/EMICalculator';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [searchFilters, setSearchFilters] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (filters) => {
    setSearchFilters(filters);
    const propertiesEl = document.getElementById('properties');
    if (propertiesEl) propertiesEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar 
        onSearch={handleSearch} 
        activeSearchFilters={searchFilters}
        onClearSearch={() => setSearchFilters(null)}
      />
      <main>
        <HeroSection onSearch={handleSearch} />
        <StatsSection />
        <AboutSection />
        <PropertyGrid searchFilters={searchFilters} />
        <ServicesSection />
        <EMICalculator />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      {showScrollTop && (
        <button
          type="button"
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
      <FloatingWhatsApp />
    </>
  );
}
