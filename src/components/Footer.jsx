import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const quickLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'About Us', href: 'about' },
  { name: 'Testimonials', href: 'testimonials' },
  { name: 'Contact Us', href: 'contact' },
  { name: 'Careers', href: 'careers' },
];

export default function Footer() {
  const whatsappNumber = '9583192823';
  const whatsappText = encodeURIComponent('Hello Treetor Team, I would like to discuss my project requirements.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const handleNavClick = (e, id) => {
    e.preventDefault();
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
  };

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Marquee Section */}
      <section className="w-full bg-transparent py-6 sm:py-8 overflow-hidden relative group">
        {/* Fade edges */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-brand-beige dark:from-brand-forest to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-brand-beige dark:from-brand-forest to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-marquee w-max">
          {/* Duplicate content to create a seamless infinite loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5">
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black uppercase tracking-tighter text-brand-forest dark:text-brand-beige">
                CALL FOR PROJECT
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-brand-leaf opacity-80">
                •
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black uppercase tracking-tighter text-brand-forest dark:text-brand-beige">
                +91 (958) 31 9-2823
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-brand-leaf opacity-80">
                •
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black uppercase tracking-tighter text-brand-forest dark:text-brand-beige">
                CALL FOR PROJECT
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-brand-leaf opacity-80">
                •
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black uppercase tracking-tighter text-brand-forest dark:text-brand-beige">
                +91 (958) 31 9-2823
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-brand-leaf opacity-80">
                •
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-white dark:bg-brand-forest/50 pt-20 pb-10 overflow-hidden">
        {/* Decorative gradient line at the top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-leaf/50 to-transparent opacity-50" />

        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-12 mb-20">

            {/* Column 1: Company Information & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:max-w-md flex flex-col"
            >
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="mb-6 inline-block">
                <img src={`${logo}?v=1.0.1`} alt="Treetor Logo" className="h-14 w-auto object-contain dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.18)]" />
              </a>
              <p className="text-brand-forest/70 dark:text-brand-beige/70 text-sm leading-relaxed mb-8 pr-4">
                Treetor helps businesses grow through AI Agents, Website Development, Mobile Applications, and Digital Innovation.
              </p>

              {/* Newsletter */}
              <div className="mt-auto">
                <h4 className="text-xs font-extrabold text-brand-forest dark:text-brand-beige uppercase tracking-wider mb-3">
                  Stay Updated
                </h4>
                <form className="relative flex items-center max-w-[320px]" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-brand-beige dark:bg-brand-forest/50 border border-brand-forest/10 dark:border-brand-beige/10 rounded-full py-3 pl-5 pr-12 text-sm text-brand-forest dark:text-brand-beige placeholder:text-brand-forest/40 dark:placeholder:text-brand-beige/40 focus:outline-none focus:border-brand-leaf/50 focus:ring-1 focus:ring-brand-leaf/20 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 p-2 bg-brand-forest dark:bg-brand-beige text-brand-beige dark:text-brand-forest rounded-full hover:bg-brand-forest-light dark:hover:bg-brand-beige-dark transition-colors duration-300 shadow-premium"
                    aria-label="Subscribe"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full sm:w-auto"
            >
              <h4 className="text-sm font-extrabold text-brand-forest dark:text-brand-beige uppercase tracking-wider mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href === 'careers' ? '/careers' : `/#${link.href}`}
                      onClick={link.href === 'careers' ? undefined : (e) => handleNavClick(e, link.href)}
                      target={link.href === 'careers' ? '_blank' : undefined}
                      className="text-brand-forest/70 dark:text-brand-beige/70 text-sm hover:text-brand-leaf dark:hover:text-brand-leaf-light transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full sm:w-auto lg:max-w-xs"
            >
              <h4 className="text-sm font-extrabold text-brand-forest dark:text-brand-beige uppercase tracking-wider mb-6">
                Contact Info
              </h4>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-leaf shrink-0 mt-0.5" />
                  <p className="text-brand-forest/70 dark:text-brand-beige/70 text-sm leading-relaxed">
                    Corp. Office: 102, 1st Floor, Richi Homes,<br />
                    Prashanti Vihar, KIIT,<br />
                    Bhubaneswar - 751024
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-leaf shrink-0" />
                  <a href="mailto:care.treetor@gmail.com" className="text-brand-forest/70 dark:text-brand-beige/70 text-sm hover:text-brand-leaf dark:hover:text-brand-leaf-light transition-colors duration-200">
                    care.treetor@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Column 4: Connect With Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full sm:w-auto lg:max-w-[200px]"
            >
              <h4 className="text-sm font-extrabold text-brand-forest dark:text-brand-beige uppercase tracking-wider mb-6">
                Connect With Us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/treetorin/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-beige dark:bg-brand-forest/50 border border-brand-forest/10 dark:border-brand-beige/10 flex items-center justify-center text-brand-forest dark:text-brand-beige hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] hover:border-[#0A66C2] dark:hover:border-[#0A66C2] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-beige dark:bg-brand-forest/50 border border-brand-forest/10 dark:border-brand-beige/10 flex items-center justify-center text-brand-forest dark:text-brand-beige hover:bg-[#25D366] hover:text-white dark:hover:bg-[#25D366] hover:border-[#25D366] dark:hover:border-[#25D366] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.386 9.806-9.788.002-2.618-1.01-5.078-2.852-6.92C16.386 2.05 13.94 1.039 11.99 1.039 6.593 1.039 2.191 5.43 2.188 10.832c-.001 1.5.399 3.01 1.157 4.354l-.985 3.597 3.693-.97zM17.06 14.37c-.27-.135-1.597-.788-1.845-.878-.247-.09-.427-.135-.607.135-.18.27-.697.878-.855 1.058-.158.18-.315.202-.585.067-.27-.135-1.138-.42-2.167-1.34-1.03-.92-1.724-2.053-1.927-2.39-.202-.338-.023-.52.148-.688.153-.15.337-.394.507-.59.17-.197.225-.338.338-.563.112-.225.056-.422-.028-.59-.084-.168-.607-1.463-.833-2.003-.22-.53-.443-.457-.607-.465-.158-.008-.338-.01-.518-.01-.18 0-.472.067-.72.338-.247.27-.945.923-.945 2.25s.967 2.61 1.103 2.79c.135.18 1.902 2.904 4.607 4.072.643.278 1.144.444 1.536.568.646.206 1.233.177 1.697.108.518-.077 1.598-.653 1.822-1.283.225-.63.225-1.17.158-1.283-.067-.113-.248-.18-.517-.315z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-brand-forest/10 dark:border-brand-beige/10 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-brand-forest/60 dark:text-brand-beige/60 text-sm font-medium">
              © 2026 Treetor. All Rights Reserved.
            </p>
            <p className="text-brand-forest/60 dark:text-brand-beige/60 text-sm font-medium flex items-center gap-1.5">
              Building smarter digital solutions with <span className="text-brand-leaf font-bold">AI</span>.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
