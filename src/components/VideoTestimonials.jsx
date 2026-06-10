import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  { id: 1, username: '@rajneeshupreti', src: '/videos/video1.mp4' },
  { id: 2, username: '@mazedarfinance', src: '/videos/video2.mp4' },
  { id: 3, username: '@abhy.advisory', src: '/videos/video3.mp4' },
  { id: 4, username: '@rahul.careers', src: '/videos/video4.mp4' },
];

export default function VideoTestimonials() {
  const videoRefs = useRef([]);

  // Ensure only one video plays at a time
  const handlePlay = (currentIndex) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex && !video.paused) {
        video.pause();
      }
    });
  };

  // Setup Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target;
            // Load video source if not already loaded
            if (video.dataset.src && !video.src) {
              video.src = video.dataset.src;
              video.load();
            }
            observer.unobserve(video);
          }
        });
      },
      {
        rootMargin: '100px 0px', // Pre-load slightly before entering viewport
        threshold: 0.1,
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <section className="relative w-full py-24 bg-brand-beige dark:bg-brand-forest overflow-hidden transition-colors duration-500">
      {/* Background ambient glows (subtle) */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-brand-leaf/20 dark:bg-brand-leaf/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-brand-forest-light/20 dark:bg-brand-leaf-light/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-brand-forest/5 dark:bg-brand-leaf/10 border border-brand-forest/10 dark:border-brand-leaf/20">
            <span className="text-xs font-bold tracking-widest text-brand-forest dark:text-brand-leaf uppercase">
              Client Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-forest dark:text-brand-beige tracking-tight mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-leaf to-brand-forest-light dark:from-brand-leaf-light dark:to-brand-leaf">Clients Say</span>
          </h2>
          <p className="text-lg text-brand-forest/70 dark:text-brand-beige/70 max-w-2xl mx-auto font-light">
            Real results from founders and teams building websites, mobile apps, and AI-powered solutions with us.
          </p>
        </div>

        {/* Video Cards Carousel */}
        {/* Hide scrollbar with tailwind classes (can also be done in index.css) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pt-6 pb-12 px-4 hide-scrollbar justify-start">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="snap-center shrink-0 w-[260px] md:w-[270px] lg:w-[280px] aspect-[9/16] relative group rounded-[2rem] overflow-hidden bg-brand-beige-light/50 dark:bg-brand-forest-light/30 backdrop-blur-md border border-brand-forest/10 dark:border-white/10 shadow-premium transition-all duration-500 hover:scale-[1.025] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05),_0_0_40px_rgba(244,63,94,0.45)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),_0_0_45px_rgba(244,63,94,0.5)] hover:border-rose-500 dark:hover:border-rose-400"
            >
              {/* Overlay Username Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                  <span className="text-xs font-semibold text-white tracking-wide">
                    {testimonial.username}
                  </span>
                </div>
              </div>

              {/* Video Element */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                data-src={testimonial.src}
                className="w-full h-full object-cover rounded-[2rem]"
                controls
                playsInline
                preload="none"
                onPlay={() => handlePlay(index)}
              >
                Your browser does not support the video tag.
              </video>

              {/* Neon inner border ring to ensure visibility over video */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-rose-500/80 dark:group-hover:border-rose-400/90 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
