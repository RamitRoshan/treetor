import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Cpu, Sparkles, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Eco-tech Background Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-leaf/5 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-brown/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-brand-leaf-light/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e5e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(253,251,247,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(253,251,247,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 w-full">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 text-left flex flex-col items-start">
          
          {/* Tagline / Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glassmorphism dark:glassmorphism-dark text-xs font-semibold text-brand-forest-light dark:text-brand-beige/90 border border-brand-leaf/20 dark:border-brand-beige/10 mb-6 shadow-premium"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-leaf" />
            <span className="tracking-wide">Introducing Eco-Digital Ecosystems</span>
          </motion.div>

          {/* Logo prominently in Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <img 
              src={`${logo}?v=1.0.1`} 
              alt="Treetor Brand Logo" 
              className="h-24 md:h-28 w-auto object-contain dark:drop-shadow-[0_4px_16px_rgba(255,255,255,0.14)]"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-forest dark:text-brand-beige leading-[1.1] mb-6 font-sans"
          >
            Growing Digital Solutions <br />
            <span className="bg-gradient-to-r from-brand-leaf to-brand-brown bg-clip-text text-brand-leaf">
              Inspired by Nature
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-brand-forest/75 dark:text-brand-beige/75 leading-relaxed max-w-xl mb-8"
          >
            From intelligent AI agents to highly scalable web and mobile applications, Treetor helps businesses grow smarter and faster with clean code and high performance.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-brand-forest hover:bg-brand-forest-light dark:bg-brand-beige dark:hover:bg-brand-beige-dark text-brand-beige dark:text-brand-forest text-sm font-semibold rounded-full shadow-premium transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo('services')}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/50 hover:bg-white dark:bg-brand-forest-light/40 dark:hover:bg-brand-forest-light dark:text-brand-beige text-brand-forest text-sm font-semibold border border-brand-forest/10 dark:border-brand-beige/10 rounded-full shadow-premium transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Explore Services
            </button>

          </motion.div>
        </div>

        {/* Right Side Eco-Tech Visual Graphic */}
        <div className="lg:col-span-5 relative flex items-center justify-center w-full min-h-[400px]">
          {/* Main Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[400px] lg:max-w-none aspect-square rounded-[3rem] bg-gradient-to-tr from-[#E2ECE5] via-brand-beige-dark to-[#E8EFEA] dark:from-[#11271B] dark:via-brand-forest/95 dark:to-[#163825] p-6 shadow-premium border border-brand-leaf/10 dark:border-brand-forest-light/40 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out hover:border-rose-400/50 dark:hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] dark:hover:shadow-[0_0_35px_rgba(244,63,94,0.18)]"
          >
            {/* Embedded glowing green orb */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-brand-leaf/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-brand-brown/10 rounded-full blur-3xl pointer-events-none" />

            {/* Premium Eco-Tech Visual Content */}
            <div className="flex items-center justify-between border-b border-brand-forest/5 dark:border-brand-beige/5 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-forest dark:bg-brand-forest-light flex items-center justify-center shadow-premium">
                  <Leaf className="w-4 h-4 text-brand-leaf-light" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-forest dark:text-brand-beige">Treetor Engine</h4>
                  <p className="text-[10px] text-brand-forest/50 dark:text-brand-beige/50">Version 2.4.0</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-brand-leaf/10 dark:bg-brand-leaf/20 text-brand-leaf dark:text-brand-leaf-light text-[10px] font-semibold border border-brand-leaf/25 dark:border-brand-leaf-light/30">
                <Cpu className="w-3 h-3" />
                <span>Active</span>
              </div>
            </div>

            {/* Abstract Tree Connection Visual */}
            <div className="flex-1 flex flex-col justify-center items-center relative py-6">
              {/* Branch connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 200" fill="none">
                {/* Connecting paths */}
                <path d="M150,160 C150,110 90,90 90,60" stroke="#8D5A38" strokeWidth="2" strokeDasharray="3 3" opacity="0.6"/>
                <path d="M150,160 C150,110 210,90 210,60" stroke="#8D5A38" strokeWidth="2" strokeDasharray="3 3" opacity="0.6"/>
                <path d="M150,160 C150,100 150,90 150,50" stroke="#8D5A38" strokeWidth="2" />
                
                {/* Pulse wave */}
                <circle cx="150" cy="160" r="6" fill="#3E8E41" opacity="0.8">
                  <animate attributeName="r" values="4;12;4" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* Floating Leaf Nodes */}
              <div className="grid grid-cols-3 gap-12 w-full justify-items-center relative z-10">
                
                {/* Left Node: Web App */}
                <motion.div
                  className="flex flex-col items-center gap-2 p-3 bg-white/70 dark:bg-brand-forest-light/80 backdrop-blur-md rounded-2xl border border-brand-forest/5 dark:border-brand-beige/10 shadow-premium text-center w-24 h-24 justify-center"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-beige-dark dark:bg-brand-forest flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-brown dark:text-brand-brown-light">Web</span>
                  </div>
                  <span className="text-[10px] font-bold text-brand-forest dark:text-brand-beige">99.8% Eff.</span>
                </motion.div>

                {/* Center Node: AI Agent */}
                <motion.div
                  className="flex flex-col items-center gap-2 p-3 bg-brand-forest dark:bg-brand-forest-light/90 rounded-2xl border border-brand-leaf/25 shadow-premium text-center w-24 h-24 justify-center -translate-y-6"
                  animate={{ y: [-24, -30, -24] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-forest-light dark:bg-brand-forest flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-brand-leaf-light" />
                  </div>
                  <span className="text-[10px] font-bold text-brand-beige">AI Agent</span>
                </motion.div>

                {/* Right Node: Mobile */}
                <motion.div
                  className="flex flex-col items-center gap-2 p-3 bg-white/70 dark:bg-brand-forest-light/80 backdrop-blur-md rounded-2xl border border-brand-forest/5 dark:border-brand-beige/10 shadow-premium text-center w-24 h-24 justify-center"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-beige-dark dark:bg-brand-forest flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-leaf">App</span>
                  </div>
                  <span className="text-[10px] font-bold text-brand-forest dark:text-brand-beige">iOS & And.</span>
                </motion.div>

              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="grid grid-cols-2 gap-4 border-t border-brand-forest/5 dark:border-brand-beige/5 pt-4">
              <div className="text-left bg-white/40 dark:bg-brand-forest-light/40 p-2.5 rounded-xl border border-white/60 dark:border-brand-beige/10">
                <span className="text-[9px] text-brand-forest/50 dark:text-brand-beige/50 uppercase tracking-wider block">Bio-Growth Rate</span>
                <span className="text-sm font-extrabold text-brand-forest dark:text-brand-beige">+142.5%</span>
              </div>
              <div className="text-left bg-white/40 dark:bg-brand-forest-light/40 p-2.5 rounded-xl border border-white/60 dark:border-brand-beige/10">
                <span className="text-[9px] text-brand-forest/50 dark:text-brand-beige/50 uppercase tracking-wider block">System Health</span>
                <span className="text-sm font-extrabold text-brand-leaf dark:text-brand-leaf-light">Stable</span>
              </div>
            </div>

          </motion.div>

          {/* Floating Small Badge 1 */}
          <motion.div
            className="absolute -top-4 -left-4 md:-left-8 bg-gradient-to-br from-brand-leaf to-brand-leaf-light/90 dark:from-brand-leaf/80 dark:to-brand-leaf-light/80 backdrop-blur-md p-3.5 rounded-2xl border border-brand-leaf-light/35 dark:border-brand-leaf-light/20 shadow-[0_10px_25px_rgba(62,142,65,0.25)] flex items-center gap-2.5 z-20 group transition-all duration-300 ease-out hover:scale-105 hover:from-brand-forest hover:to-brand-forest-light hover:border-brand-leaf/40 hover:shadow-[0_15px_35px_rgba(19,46,32,0.35)] cursor-pointer"
            animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-brand-leaf group-hover:text-white group-hover:scale-110">
              <Leaf className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-[9px] text-white/80 font-bold uppercase tracking-wider transition-colors duration-300 group-hover:text-brand-beige/70">Carbon Offset</p>
              <h5 className="text-xs font-extrabold text-white transition-colors duration-300 group-hover:text-brand-beige">42.8 Tons</h5>
            </div>
          </motion.div>

          {/* Floating Small Badge 2 */}
          <motion.div
            className="absolute -bottom-4 right-2 md:-right-8 bg-brand-forest dark:bg-brand-forest-light text-brand-beige p-3.5 rounded-2xl border border-brand-leaf/20 dark:border-brand-beige/10 shadow-premium flex items-center gap-2.5 z-20"
            animate={{ y: [0, -6, 0], x: [0, -3, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-7 h-7 rounded-lg bg-brand-forest-light flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-brand-leaf-light" />
            </div>
            <div className="text-left">
              <p className="text-[9px] text-brand-beige/50 font-bold uppercase tracking-wider">Growth Powered</p>
              <h5 className="text-xs font-extrabold text-brand-beige">Eco-AI Engine</h5>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
