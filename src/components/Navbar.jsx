import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'About Us', href: 'about' },
  { name: 'Testimonials', href: 'testimonials' },
  { name: 'Contact Us', href: 'contact' },
  { name: 'Careers', href: 'careers' }

];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.href));
      const scrollPosition = window.scrollY + 200; // offset

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    if (location.pathname === '/') {
      e.preventDefault();
      setIsOpen(false);
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // height of sticky navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'backdrop-blur-md bg-brand-beige/85 dark:bg-brand-forest/85 border-b border-brand-beige-dark/50 dark:border-brand-forest-light/50 py-3 shadow-premium'
          : 'bg-transparent py-5'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <img
              src={`${logo}?v=1.0.1`}
              alt="Treetor Logo"
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.18)]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href === 'careers' ? '/careers' : `/#${link.href}`}
                onClick={link.href === 'careers' ? undefined : (e) => handleNavClick(e, link.href)}
                target={link.href === 'careers' ? '_blank' : undefined}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none ${activeSection === link.href && location.pathname === '/'
                  ? 'text-brand-leaf font-semibold'
                  : 'text-brand-forest/70 dark:text-brand-beige/70 hover:text-brand-forest dark:hover:text-brand-beige'
                  }`}
              >
                {link.name}
                {activeSection === link.href && location.pathname === '/' && (
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-leaf rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full border border-brand-forest/15 dark:border-brand-beige/15 text-brand-forest dark:text-brand-beige hover:bg-brand-forest/5 dark:hover:bg-white/5 transition-colors duration-300 focus:outline-none cursor-pointer flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ y: -10, rotate: -45, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  exit={{ y: 10, rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? (
                    <Sun className="w-5.5 h-5.5 text-brand-leaf-light" />
                  ) : (
                    <Moon className="w-5.5 h-5.5 text-brand-leaf" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Contact Button */}
            <Link
              to="/#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-brand-forest hover:bg-brand-forest-light dark:bg-brand-beige dark:hover:bg-brand-beige-dark text-brand-beige dark:text-brand-forest text-xs font-semibold uppercase tracking-wider rounded-full shadow-premium transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Actions (Theme Toggle + Menu Trigger) */}
          <div className="flex md:hidden items-center gap-3">
            {/* Theme Toggle Button (Mobile) */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-brand-forest/15 dark:border-brand-beige/15 text-brand-forest dark:text-brand-beige hover:bg-brand-forest/5 dark:hover:bg-white/5 transition-colors duration-200 focus:outline-none cursor-pointer"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  initial={{ y: -10, rotate: -45, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  exit={{ y: 10, rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-brand-leaf-light" />
                  ) : (
                    <Moon className="w-5 h-5 text-brand-leaf" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-forest dark:text-brand-beige hover:bg-brand-beige-dark/50 dark:hover:bg-brand-forest-light/50 rounded-full transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden border-b border-brand-beige-dark/50 dark:border-brand-forest-light/50 bg-brand-beige/95 dark:bg-brand-forest/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href === 'careers' ? '/careers' : `/#${link.href}`}
                    onClick={link.href === 'careers' ? () => setIsOpen(false) : (e) => handleNavClick(e, link.href)}
                    target={link.href === 'careers' ? '_blank' : undefined}
                    className={`text-lg font-medium py-1 transition-colors duration-200 ${activeSection === link.href && location.pathname === '/'
                      ? 'text-brand-leaf font-bold pl-2 border-l-2 border-brand-leaf'
                      : 'text-brand-forest/80 dark:text-brand-beige/80 hover:text-brand-forest dark:hover:text-brand-beige'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="mt-2 inline-flex items-center justify-center gap-2 w-full py-3.5 bg-brand-forest hover:bg-brand-forest-light dark:bg-brand-beige dark:hover:bg-brand-beige-dark text-brand-beige dark:text-brand-forest text-sm font-semibold uppercase tracking-wider rounded-full shadow-premium transition-all duration-300"
                >
                  Get In Touch
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
