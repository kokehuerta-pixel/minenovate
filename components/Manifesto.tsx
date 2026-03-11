'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main reveal timeline - scrubbed for fluidity
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'top 20%',
          scrub: 1, // Smooth lag for a premium feel
        },
      });

      tl.fromTo(
        imageContainerRef.current,
        { clipPath: 'inset(40% 10% 40% 10%)', opacity: 0, scale: 0.9, filter: 'blur(10px)' },
        { 
          clipPath: 'inset(0% 0% 0% 0%)', 
          opacity: 1, 
          scale: 1, 
          filter: 'blur(0px)',
          duration: 2,
          ease: 'power2.inOut' 
        }
      )
      .fromTo(
        text1Ref.current,
        { opacity: 0, y: 50, x: -20 },
        { opacity: 0.6, y: 0, x: 0, duration: 1, ease: 'power3.out' },
        '-=1.5'
      )
      .fromTo(
        text2Ref.current,
        { opacity: 0, y: 70, x: 20 },
        { opacity: 1, y: 0, x: 0, duration: 1.2, ease: 'power3.out' },
        '-=1.2'
      );

      // Coordinated Parallax
      gsap.to(imageRef.current, {
        yPercent: 20,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Subtle atmospheric movement
      gsap.to(containerRef.current?.querySelector('.blur-full') || [], {
        x: '20%',
        y: '20%',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifiesto"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-navy text-white"
    >
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-8 py-32 md:grid-cols-2 md:px-16 lg:px-24 lg:gap-24">
        
        {/* Responsive Image Container */}
        <div 
          ref={imageContainerRef}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl md:aspect-auto md:h-[70vh] opacity-0"
        >
          <div ref={imageRef} className="relative h-full w-full">
            <Image
              src="/images/hero_main.jpg"
              alt="Minería Innovadora"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Professional Overlays */}
          <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          <div className="absolute inset-0 rounded-3xl border border-white/10" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-center">
          <div className="mb-8 h-px w-20 bg-white/30" />
          
          <h2
            ref={text1Ref}
            className="mb-8 font-sans text-3xl font-medium leading-tight text-white/80 md:text-4xl lg:text-5xl"
          >
            La industria mide el presente <br />
            <span className="italic font-light text-white/60">en toneladas.</span>
          </h2>
          
          <h2
            ref={text2Ref}
            className="font-serif text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            Nosotros calibramos el futuro <br />
            <span className="italic text-outline block mt-4">en innovación.</span>
          </h2>
          
          
        </div>
      </div>

      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
        <div className="blur-full absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px]" />
      </div>
    </section>
  );
}
