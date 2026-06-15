import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO & Founder',
    company: 'Verdant Retail',
    feedback: 'Treetor transformed our e-commerce platform. Their web development work is clean, ultra-responsive, and optimized for speed. Our conversion rates increased by 35% within the first month. Incredible work!',
    rating: 5,
    avatarBg: 'bg-gradient-to-tr from-brand-forest to-brand-forest-light text-brand-beige',
    initial: 'SJ',
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of Automation',
    company: 'Apex Logistics',
    feedback: 'The AI Agents built by Treetor have completely revolutionized our supply chain tracking. Tasks that used to take our operators 4 hours are now handled in seconds with zero errors. Absolute lifesaver.',
    rating: 5,
    avatarBg: 'bg-gradient-to-tr from-brand-leaf to-brand-leaf-light text-brand-beige',
    initial: 'MT',
  },
  {
    name: 'Elena Rostova',
    role: 'Product Director',
    company: 'Bloom EdTech',
    feedback: 'Treetor built our cross-platform mobile application. The animations are fluid, the UX is flawless, and they delivered the project ahead of schedule. Their attention to detail and startup-focus is unmatched.',
    rating: 5,
    avatarBg: 'bg-gradient-to-tr from-brand-brown to-brand-brown-light text-brand-beige',
    initial: 'ER',
  },
  {
    name: 'David Chen',
    role: 'CTO',
    company: 'FinTech Flow',
    feedback: "Treetor's automation solutions helped us cut operational costs by 40%. The team's deep understanding of LLMs and secure backend architecture was exactly what we needed to scale rapidly.",
    rating: 5,
    avatarBg: 'bg-gradient-to-tr from-brand-leaf to-brand-brown text-brand-beige',
    initial: 'DC',
  },
  {
    name: 'Aisha Rahman',
    role: 'VP of Engineering',
    company: 'HealthSync',
    feedback: 'They delivered a highly secure, HIPAA-compliant platform ahead of schedule. The code quality is pristine, and the UI/UX is exceptionally intuitive. Highly recommended for enterprise projects.',
    rating: 5,
    avatarBg: 'bg-gradient-to-tr from-brand-brown-light to-brand-leaf text-brand-forest',
    initial: 'AR',
  },
  {
    name: 'James Wilson',
    role: 'Director of Growth',
    company: 'Elevate Marketing',
    feedback: 'Our new landing pages built by Treetor are converting at record highs. The subtle animations and lightning-fast load times provide a premium feel that our high-end clients love.',
    rating: 5,
    avatarBg: 'bg-gradient-to-tr from-brand-forest-light to-brand-brown text-brand-beige',
    initial: 'JW',
  },
  {
    name: 'Sofia Martinez',
    role: 'Co-Founder',
    company: 'EcoSmart',
    feedback: 'Working with Treetor was a game-changer. Their one-to-one consultation helped us pivot our product strategy safely, and the subsequent mobile app development was absolutely flawless.',
    rating: 5,
    avatarBg: 'bg-gradient-to-tr from-brand-leaf-light to-brand-forest text-brand-forest',
    initial: 'SM',
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    if (currentIndex > testimonials.length - visibleCount) {
      setCurrentIndex(Math.max(0, testimonials.length - visibleCount));
    }
  }, [visibleCount, currentIndex]);

  const next = () => setCurrentIndex(prev => Math.min(prev + 1, testimonials.length - visibleCount));
  const prev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  return (
    <section 
      id="testimonials" 
      className="py-24 relative overflow-hidden bg-white/40 dark:bg-brand-forest/10 border-y border-brand-forest/5 dark:border-brand-beige/5"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-leaf/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-brown/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-leaf/10 dark:bg-brand-leaf/20 text-xs font-semibold text-brand-leaf dark:text-brand-leaf-light tracking-wider uppercase mb-4"
          >
            <span>Testimonials</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-forest dark:text-brand-beige tracking-tight font-sans mb-5"
          >
            Nurturing Trust with Global Partners
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-brand-forest/70 dark:text-brand-beige/70"
          >
            Don't just take our word for it. Here is what leading startup executives and project heads say about working with Treetor.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mt-8">
          
          {/* Navigation Buttons */}
          <button 
            onClick={prev} 
            disabled={currentIndex === 0} 
            className={`absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 dark:bg-brand-forest/90 backdrop-blur-md border border-brand-forest/10 dark:border-brand-beige/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-brand-forest dark:text-brand-beige hover:text-brand-leaf dark:hover:text-brand-leaf-light hover:scale-110 transition-all duration-300 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={next} 
            disabled={currentIndex >= testimonials.length - visibleCount} 
            className={`absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 dark:bg-brand-forest/90 backdrop-blur-md border border-brand-forest/10 dark:border-brand-beige/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-brand-forest dark:text-brand-beige hover:text-brand-leaf dark:hover:text-brand-leaf-light hover:scale-110 transition-all duration-300 ${currentIndex >= testimonials.length - visibleCount ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden px-2 py-6 -mx-2">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.8 }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4 flex">
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="relative w-full h-full p-8 rounded-[2.5rem] bg-white/70 dark:bg-brand-forest-light/40 backdrop-blur-sm border border-brand-forest/5 dark:border-brand-beige/10 shadow-premium hover:shadow-[0_20px_40px_rgba(0,0,0,0.03),_0_0_30px_rgba(244,63,94,0.32)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.25),_0_0_35px_rgba(244,63,94,0.28)] hover:border-rose-500 dark:hover:border-rose-400/90 hover:scale-[1.025] transition-all duration-500 ease-out flex flex-col justify-between text-left group"
                  >
                    {/* Quote icon watermark */}
                    <div className="absolute top-6 right-6 text-brand-forest/5 dark:text-white/5 group-hover:text-brand-leaf/10 dark:group-hover:text-brand-leaf-light/15 transition-colors duration-300">
                      <Quote className="w-12 h-12 rotate-180" />
                    </div>

                    <div className="relative z-10 flex flex-col">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-brand-leaf text-brand-leaf dark:fill-brand-leaf-light dark:text-brand-leaf-light" />
                        ))}
                      </div>

                      {/* Feedback */}
                      <p className="text-sm sm:text-base text-brand-forest/80 dark:text-brand-beige/80 italic leading-relaxed mb-8">
                        "{t.feedback}"
                      </p>
                    </div>

                    {/* Author Section */}
                    <div className="relative z-10 flex items-center gap-4 border-t border-brand-forest/5 dark:border-brand-beige/5 pt-6 mt-auto">
                      {/* Custom Gradient Avatar */}
                      <div className={`w-11 h-11 rounded-full ${t.avatarBg} flex items-center justify-center font-bold text-sm tracking-wide shadow-premium shrink-0`}>
                        {t.initial}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-forest dark:text-brand-beige">{t.name}</h4>
                        <p className="text-[10px] sm:text-xs font-semibold text-brand-forest/50 dark:text-brand-beige/50">
                          {t.role}, <span className="text-brand-brown dark:text-brand-brown-light">{t.company}</span>
                        </p>
                      </div>
                    </div>

                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {Array.from({ length: Math.max(0, testimonials.length - visibleCount + 1) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'w-8 bg-brand-leaf dark:bg-brand-leaf-light' 
                    : 'w-2 bg-brand-forest/20 dark:bg-brand-beige/20 hover:bg-brand-leaf/50 dark:hover:bg-brand-leaf-light/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
