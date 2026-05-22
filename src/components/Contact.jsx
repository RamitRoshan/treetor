import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, HelpCircle, Check } from 'lucide-react';
// import { ArrowRight, Send, HelpCircle, Check } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

 
  const whatsappNumber = '9583192823'; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Treetor,%20I%20would%20like%20to%20discuss%20a%20project!`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
        setMessage('');
      }, 3000);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-brand-beige-dark/30 dark:bg-brand-forest/10"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-brand-leaf/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-brown/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-forest/10 dark:bg-brand-forest/30 text-xs font-semibold text-brand-forest dark:text-brand-beige tracking-wider uppercase mb-4"
          >
            <span>Connect With Us</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-forest dark:text-brand-beige tracking-tight font-sans mb-5"
          >
            Let’s Grow Together
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-brand-forest/70 dark:text-brand-beige/70"
          >
            Have a project in mind or want to explore our eco-tech solutions? Reach out to us. We’re ready to bring your vision to life.
          </motion.p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Short Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-[3rem] bg-white dark:bg-brand-forest-light/30 border border-brand-forest/5 dark:border-brand-beige/10 shadow-premium flex flex-col justify-between"
          >
            <div className="text-left w-full">
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-forest dark:text-brand-beige mb-2">
                Drop us a message
              </h3>
              <p className="text-sm text-brand-forest/60 dark:text-brand-beige/60 mb-8">
                Fill out the quick form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-extrabold text-brand-forest/70 dark:text-brand-beige/70 uppercase tracking-wider mb-2 text-left">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hello@company.com"
                    className="w-full px-5 py-3.5 bg-brand-beige dark:bg-brand-forest/50 border border-brand-forest/10 dark:border-brand-beige/10 rounded-2xl text-brand-forest dark:text-brand-beige placeholder:text-brand-forest/40 dark:placeholder:text-brand-beige/40 focus:outline-none focus:border-brand-leaf/50 focus:ring-1 focus:ring-brand-leaf/20 transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-extrabold text-brand-forest/70 dark:text-brand-beige/70 uppercase tracking-wider mb-2 text-left">
                    Project Details / Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project requirements or what you are building..."
                    className="w-full px-5 py-3.5 bg-brand-beige dark:bg-brand-forest/50 border border-brand-forest/10 dark:border-brand-beige/10 rounded-2xl text-brand-forest dark:text-brand-beige placeholder:text-brand-forest/40 dark:placeholder:text-brand-beige/40 focus:outline-none focus:border-brand-leaf/50 focus:ring-1 focus:ring-brand-leaf/20 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-forest hover:bg-brand-forest-light dark:bg-brand-beige dark:hover:bg-brand-beige-dark text-brand-beige dark:text-brand-forest text-sm font-semibold rounded-2xl shadow-premium transition-all duration-300 hover:shadow-premium-hover"
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-4 h-4 text-brand-leaf-light" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side: Premium WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-[3rem] bg-gradient-to-br from-[#1E3E2B] to-[#12271B] border border-brand-leaf/25 dark:border-brand-beige/10 shadow-premium text-white flex flex-col justify-between relative overflow-hidden"
          >
            {/* Green gradient glow */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-brand-leaf/10 rounded-full blur-2xl pointer-events-none" />

            <div className="text-left relative z-10 w-full">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 shadow-premium">
                <HelpCircle className="w-6 h-6 text-brand-leaf-light" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2">
                Need a quick response?
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-8">
                Skip the form and chat with our solutions engineer directly on WhatsApp for real-time support.
              </p>

              {/* Display Number */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider block mb-1">
                    Direct Line
                  </span>
                  <h4 className="text-lg font-bold tracking-wide text-brand-leaf-light">
                    +91 (958) 319-2823
                  </h4>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-[10px] font-bold">
                  Online
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <div className="relative z-10 w-full mt-auto">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold rounded-2xl shadow-premium transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:-translate-y-0.5"
              >
                {/* Custom SVG WhatsApp Icon */}
                <svg 
                  className="w-5 h-5 fill-current shrink-0" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.386 9.806-9.788.002-2.618-1.01-5.078-2.852-6.92C16.386 2.05 13.94 1.039 11.99 1.039 6.593 1.039 2.191 5.43 2.188 10.832c-.001 1.5.399 3.01 1.157 4.354l-.985 3.597 3.693-.97zM17.06 14.37c-.27-.135-1.597-.788-1.845-.878-.247-.09-.427-.135-.607.135-.18.27-.697.878-.855 1.058-.158.18-.315.202-.585.067-.27-.135-1.138-.42-2.167-1.34-1.03-.92-1.724-2.053-1.927-2.39-.202-.338-.023-.52.148-.688.153-.15.337-.394.507-.59.17-.197.225-.338.338-.563.112-.225.056-.422-.028-.59-.084-.168-.607-1.463-.833-2.003-.22-.53-.443-.457-.607-.465-.158-.008-.338-.01-.518-.01-.18 0-.472.067-.72.338-.247.27-.945.923-.945 2.25s.967 2.61 1.103 2.79c.135.18 1.902 2.904 4.607 4.072.643.278 1.144.444 1.536.568.646.206 1.233.177 1.697.108.518-.077 1.598-.653 1.822-1.283.225-.63.225-1.17.158-1.283-.067-.113-.248-.18-.517-.315z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
