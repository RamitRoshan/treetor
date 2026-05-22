import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Globe, Zap } from 'lucide-react';

const stats = [
  { icon: Leaf, value: '100%', label: 'Eco-Minded Dev' },
  { icon: Zap, value: '10x', label: 'Faster Deployments' },
  { icon: Globe, value: '99.9%', label: 'Uptime & Reliability' },
  { icon: Award, value: '15+', label: 'Digital Awards' },
];

export default function AboutUs() {
  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-brand-brown/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-leaf/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-6 text-left flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-brown/10 dark:bg-brand-brown/20 text-xs font-semibold text-brand-brown dark:text-brand-brown-light tracking-wider uppercase mb-4"
            >
              <span>Our Story</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-forest dark:text-brand-beige tracking-tight font-sans mb-6"
            >
              Synthesizing Innovation, AI, and Ecological Thinking
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-forest/75 dark:text-brand-beige/75 leading-relaxed mb-6"
            >
              Treetor combines cutting-edge AI automation, modular web structures, and performance engineering to create impactful, carbon-conscious digital experiences for businesses worldwide.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-brand-forest/70 dark:text-brand-beige/70 leading-relaxed mb-10"
            >
              We focus on building scalable solutions with creativity, performance, and user experience in mind. Like the root systems of ancient forests, our architectures are deeply connected, highly resilient, and designed to support sustainable growth.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-4 border-t border-brand-forest/5 dark:border-brand-beige/5">
              {stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-left"
                  >
                    <div className="flex items-center gap-1.5 text-brand-leaf dark:text-brand-leaf-light mb-1">
                      <StatIcon className="w-4 h-4" />
                      <span className="text-xl sm:text-2xl font-extrabold text-brand-forest dark:text-brand-beige">{stat.value}</span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-brand-forest/60 dark:text-brand-beige/60 tracking-tight block leading-tight">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side Eco-Tech Visual Graphic */}
          <div className="lg:col-span-6 relative flex justify-center items-center w-full min-h-[400px]">
            {/* Visual Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[420px] aspect-square rounded-[3.5rem] bg-gradient-to-br from-[#E2ECE5] via-brand-beige-dark/70 to-[#E8EFEA] dark:from-[#11271B] dark:via-brand-forest/95 dark:to-[#163825] p-6 shadow-premium border border-brand-leaf/10 dark:border-brand-forest-light/40 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out hover:border-rose-400/50 dark:hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] dark:hover:shadow-[0_0_35px_rgba(244,63,94,0.18)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(62,142,65,0.04),transparent_50%)]" />

              {/* Graphic Title */}
              <div className="flex items-center justify-between border-b border-brand-forest/5 dark:border-brand-beige/5 pb-4">
                <span className="text-xs font-bold text-brand-forest dark:text-brand-beige tracking-wide">Eco-Tech Framework</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-leaf animate-pulse" />
              </div>

              {/* Interactive Neural Leaf / Node Pattern in CSS */}
              <div className="flex-1 flex items-center justify-center relative py-6">
                
                {/* Simulated Growth Rings */}
                <div className="absolute w-64 h-64 border border-brand-forest/5 dark:border-brand-beige/5 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 border border-brand-leaf/10 dark:border-brand-leaf/20 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 border border-brand-brown/15 dark:border-brand-brown/25 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 border border-brand-leaf/20 dark:border-brand-leaf/30 rounded-full flex items-center justify-center" />
                    </div>
                  </div>
                </div>

                {/* Growth Connections and Branches */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
                  {/* Stem */}
                  <path d="M150,260 L150,150" stroke="#8D5A38" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Left branch */}
                  <path d="M150,200 C120,180 80,180 60,150" stroke="#8D5A38" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <circle cx="60" cy="150" r="5" fill="#3E8E41" />
                  
                  {/* Right branch */}
                  <path d="M150,180 C180,160 220,160 240,130" stroke="#8D5A38" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <circle cx="240" cy="130" r="5" fill="#A67C52" />

                  {/* Top branches */}
                  <path d="M150,150 C130,120 120,100 110,80" stroke="#8D5A38" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <circle cx="110" cy="80" r="5" fill="#3E8E41" />

                  <path d="M150,150 C170,120 180,100 190,70" stroke="#8D5A38" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <circle cx="190" cy="70" r="5" fill="#66BB6A" />
                </svg>

                {/* floating node cards */}
                <motion.div 
                  className="absolute left-2 top-10 bg-white/80 dark:bg-brand-forest-light/80 backdrop-blur-md p-3 rounded-2xl border border-brand-forest/5 dark:border-brand-beige/10 shadow-premium flex flex-col gap-1 z-10"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="text-[9px] text-brand-forest/50 dark:text-brand-beige/50 font-bold uppercase">Root Efficiency</span>
                  <span className="text-sm font-extrabold text-brand-forest dark:text-brand-beige">99.98%</span>
                </motion.div>

                <motion.div 
                  className="absolute right-4 bottom-12 bg-white/80 dark:bg-brand-forest-light/80 backdrop-blur-md p-3 rounded-2xl border border-brand-forest/5 dark:border-brand-beige/10 shadow-premium flex flex-col gap-1 z-10"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <span className="text-[9px] text-brand-leaf dark:text-brand-leaf-light font-bold uppercase">Green Score</span>
                  <span className="text-sm font-extrabold text-brand-leaf dark:text-brand-leaf-light">A+ Tier</span>
                </motion.div>

                {/* Glowing Center Core */}
                <div className="w-10 h-10 rounded-full bg-brand-forest dark:bg-brand-forest-light flex items-center justify-center z-15 shadow-premium border border-brand-leaf/30">
                  <Leaf className="w-4 h-4 text-brand-leaf-light" />
                </div>

              </div>

              {/* Bottom Info Bar */}
              <div className="w-full bg-white/40 dark:bg-brand-forest-light/40 backdrop-blur-md rounded-2xl border border-white/60 dark:border-brand-beige/10 p-4 flex items-center justify-between text-left">
                <div>
                  <span className="text-[9px] text-brand-forest/50 dark:text-brand-beige/50 font-bold uppercase tracking-wider block mb-1">
                    Next-Gen Architecture
                  </span>
                  <h4 className="text-xs font-extrabold text-brand-forest dark:text-brand-beige">
                    Modular. Clean. Future-Proof.
                  </h4>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-brand-forest dark:bg-brand-forest-light text-brand-beige text-[10px] font-bold">
                  Active System
                </div>
              </div>
              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
