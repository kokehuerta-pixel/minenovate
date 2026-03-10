'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [title1Ref.current, title2Ref.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex h-[100dvh] w-full flex-col justify-end overflow-hidden bg-navy pb-24 px-8 md:px-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2574&auto=format&fit=crop"
          alt="Mina a cielo abierto"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Subtle Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        
        {/* Topographic/Data Lines Overlay (Simulated with CSS/SVG) */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.1) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.1) 50px)`
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl">
        <h1
          ref={title1Ref}
          className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight opacity-0"
        >
          La Minería se Cuenta
        </h1>
        <h2
          ref={title2Ref}
          className="font-serif text-5xl md:text-7xl lg:text-8xl italic text-white mt-2 opacity-0"
        >
          Desde el Futuro
        </h2>
      </div>
    </section>
  );
}
