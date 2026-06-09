import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyCarousel from './components/CompanyCarousel';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="relative min-h-screen bg-brand-beige text-brand-forest dark:bg-brand-forest dark:text-brand-beige transition-colors duration-500 overflow-x-hidden selection:bg-brand-leaf/20 selection:text-brand-forest">
      {/* Sticky Navigation Bar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <Hero />

      {/* Company Carousel */}
      <CompanyCarousel />

      {/* Services Section */}
      <Services />

      {/* About Us Section */}
      <AboutUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Us Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
