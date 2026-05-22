import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Monitor, Smartphone, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Agents',
    description: 'Intelligent AI-powered automation solutions for businesses. We design custom LLM-powered agents that streamline operations, handle customer success, and optimize decision-making workflows.',
    features: ['Custom Workflow Automation', 'Autonomous Decision Making', 'NLP & LLM Integrations'],
    color: 'from-brand-leaf/10 to-brand-leaf/2 dark:from-brand-leaf/15 dark:to-brand-leaf/5',
    iconBg: 'bg-brand-leaf/10 text-brand-leaf dark:bg-brand-leaf/20 dark:text-brand-leaf-light',
    hoverBorder: 'hover:border-brand-leaf/40',
    buttonText: 'Discuss Project'
  },
  {
    icon: Monitor,
    title: 'Website Development',
    description: 'Modern, responsive, and scalable websites for startups and businesses. We build visually stunning, SEO-optimized web experiences with fast loading speeds and robust architectures.',
    features: ['Next.js & React Frameworks', 'SEO & Performance Optimized', 'Custom UI/UX & Interactivity'],
    color: 'from-brand-brown/10 to-brand-brown/2 dark:from-brand-brown/15 dark:to-brand-brown/5',
    iconBg: 'bg-brand-brown/10 text-brand-brown dark:bg-brand-brown/20 dark:text-brand-brown-light',
    hoverBorder: 'hover:border-brand-brown/40',
    buttonText: 'Discuss Project'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'High-performance Android and iOS applications with seamless user experiences. We develop feature-rich mobile apps that drive engagement and scale with your user base.',
    features: ['Cross-Platform (React Native)', 'Smooth Transitions & UX', 'Offline Capabilities & APIs'],
    color: 'from-brand-leaf-light/15 to-brand-leaf-light/2 dark:from-brand-leaf-light/25 dark:to-brand-leaf-light/5',
    iconBg: 'bg-brand-leaf-light/20 text-brand-forest-light dark:bg-brand-leaf-light/30 dark:text-brand-beige',
    hoverBorder: 'hover:border-brand-leaf-light/40',
    buttonText: 'Discuss Project'
  },
  {
    icon: Calendar,
    title: 'One-to-One Consultation',
    description: 'Get direct expert guidance for your business ideas, AI solutions, websites, or mobile applications through personalized one-to-one consultation sessions tailored to your goals.',
    features: ['Personalized Strategy Sessions', 'Business & Tech Guidance', 'AI Solution Consultation', 'Product Planning & Scaling'],
    color: 'from-brand-brown/15 to-brand-brown/5 dark:from-brand-brown/25 dark:to-brand-brown/10',
    iconBg: 'bg-brand-brown/10 text-brand-brown dark:bg-brand-brown/20 dark:text-brand-brown-light',
    hoverBorder: 'hover:border-brand-brown/40',
    buttonText: 'Book Consultation'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function Services() {
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
      id="services" 
      className="py-24 relative overflow-hidden bg-white/40 dark:bg-brand-forest/10"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-leaf/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-brown/5 rounded-full blur-[90px] pointer-events-none" />

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
            <span>What We Do</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-forest dark:text-brand-beige tracking-tight font-sans mb-5"
          >
            Digital Ecosystems Engineered <br />for Scalable Growth
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-brand-forest/70 dark:text-brand-beige/70"
          >
            We combine high-performance software engineering with clean design systems to create digital solutions that nurture business acceleration.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative flex flex-col justify-between p-8 rounded-[2rem] bg-gradient-to-br from-[#E6EFEA] via-[#FDFBF7] to-[#E2ECE5] dark:from-[#143222] dark:via-[#11271B] dark:to-[#173926] backdrop-blur-sm border border-brand-leaf/10 dark:border-brand-forest-light/40 shadow-premium hover:shadow-[0_20px_40px_rgba(0,0,0,0.03),_0_0_30px_rgba(244,63,94,0.32)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.25),_0_0_35px_rgba(244,63,94,0.28)] hover:border-rose-500 dark:hover:border-rose-400/90 hover:scale-[1.025] transition-all duration-500 ease-out overflow-hidden group`}
              >
                {/* Background Gradient Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 text-left">
                  {/* Icon Wrapper */}
                  <div className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 shadow-premium transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-forest dark:text-brand-beige mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-brand-forest/70 dark:text-brand-beige/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs font-semibold text-brand-forest/80 dark:text-brand-beige/80">
                        <CheckCircle className="w-4 h-4 text-brand-leaf dark:text-brand-leaf-light shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="relative z-10 pt-4 border-t border-brand-forest/5 dark:border-brand-beige/5 flex items-center justify-between text-left">
                  <button
                    onClick={() => handleScrollTo('contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-forest dark:text-brand-beige hover:text-brand-leaf dark:hover:text-brand-leaf-light transition-colors duration-200"
                  >
                    {service.buttonText || 'Discuss Project'}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
