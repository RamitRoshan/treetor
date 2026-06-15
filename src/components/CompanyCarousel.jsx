import React from 'react';

const companies = [
  { name: 'Jigyasu', isImage: true, src: '/jigyasu.png', alt: 'Jigyasu logo', imgClass: 'h-10 md:h-12 hover:scale-105' },
  { name: 'BookMyNandi', isImage: true, src: '/nandi1.png', alt: 'BookMyNandi logo', imgClass: 'h-10 md:h-12 hover:scale-105' },
  { name: 'Gomaxindustries', isImage: true, src: '/gomax.png', alt: 'Gomaxindustries logo', imgClass: 'h-10 md:h-12 hover:scale-105' },
  { name: 'AuriaEngineering', isImage: true, src: '/AuriaEngineering.png', alt: 'AuriaEngineering logo', imgClass: 'h-10 md:h-12 scale-[3] md:scale-[3.5] hover:scale-[3.1] md:hover:scale-[3.6]' },
  { name: 'MultiplyingBricks', className: 'font-extrabold tracking-tighter text-xl font-sans' },
  { name: 'Folkstrot', isImage: true, src: '/folkstrot1.png', alt: 'Folkstrot logo', imgClass: 'h-10 md:h-12 scale-[3] md:scale-[3.5] hover:scale-[3.1] md:hover:scale-[3.6]' },
  { name: 'Oshopodha', className: 'font-semibold tracking-tight text-lg md:text-xl font-sans' },
  { name: 'NewsDerby', className: 'font-semibold tracking-wide text-base md:text-lg italic font-sans' },
  { name: 'Allied web design & software', className: 'font-light tracking-wide text-xs md:text-sm uppercase font-sans' }
];

export default function CompanyCarousel() {
  // Duplicate list once to ensure seamless infinite scroll wrap
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="relative w-full py-6 bg-transparent overflow-hidden">
      {/* Edge Fade Overlays (Seamless full-width blend) */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-brand-beige via-brand-beige/25 to-transparent dark:from-brand-forest dark:via-brand-forest/25 pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-brand-beige via-brand-beige/25 to-transparent dark:from-brand-forest dark:via-brand-forest/25 pointer-events-none z-10" />

      {/* Scrolling Marquee Wrapper */}
      <div className="relative flex items-center w-full">
        <div className="flex items-center gap-6 md:gap-10 py-1.5 animate-marquee hover:[animation-play-state:paused]">
          {duplicatedCompanies.map((company, index) => (
            <React.Fragment key={index}>
              {company.isImage ? (
                <img 
                  src={company.src} 
                  alt={company.alt}
                  className={`w-auto object-contain hover:opacity-100 transition-all duration-300 cursor-default select-none dark:hover:drop-shadow-[0_0_8px_rgba(102,187,106,0.35)] hover:drop-shadow-[0_0_8px_rgba(62,142,65,0.25)] ${company.imgClass}`}
                />
              ) : (
                <span className={`text-brand-forest/45 hover:text-brand-leaf dark:text-brand-beige/40 dark:hover:text-brand-leaf-light hover:scale-105 transition-all duration-300 cursor-default select-none whitespace-nowrap dark:hover:drop-shadow-[0_0_8px_rgba(102,187,106,0.35)] hover:drop-shadow-[0_0_8px_rgba(62,142,65,0.25)] ${company.className}`}>
                  {company.name}
                </span>
              )}
              <span className="text-brand-leaf/30 dark:text-brand-leaf-light/35 text-xs select-none mx-2 md:mx-4">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
