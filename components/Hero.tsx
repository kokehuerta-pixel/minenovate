'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      
      tl.fromTo(
        heroImageRef.current,
        { scale: 1.1, opacity: 0, filter: 'blur(10px)' },
        {
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'expo.out',
        }
      )
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
        '-=1'
      )
      .fromTo(
        formRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        },
        '-=0.8'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-navy pt-24 pb-20 px-8 md:px-16 lg:flex lg:items-center lg:pt-32 lg:pb-24"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 scale-105 pointer-events-none">
        <Image
          src="/images/hero_bg.jpg"
          alt=""
          fill
          className="object-cover opacity-30 mix-blend-overlay blur-sm"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,255,255,0.05) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.05) 50px)`
        }}></div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Mobile-First: Image appears first on mobile, right on desktop */}
        <div 
          ref={heroImageRef}
          className="order-1 lg:order-2 relative aspect-square w-full max-w-xl mx-auto lg:max-w-none opacity-0"
        >
          {/* Professional Image with Masking */}
          <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl bg-navy/20">
            <Image
              src="/images/Gemini_Generated_Image_o6g41go6g41go6g4.png"
              alt="Minenovate Podcast Team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              priority
            />
            {/* Soft Luminosity Mask / Gradient Overlay to integrate with navy */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />
            
            {/* Border glow / Glassmorphism effect */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </div>
          
          {/* Atmospheric Glow */}
          <div className="absolute -inset-4 z-[-1] bg-white/5 blur-3xl rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/5 blur-[120px] rounded-full" />
        </div>

        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <h1
            ref={titleRef}
            className="font-sans text-5xl md:text-7xl xl:text-8xl font-bold text-white tracking-tight opacity-0 leading-[1.1]"
          >
            Las Historias que <br className="hidden xl:block" />
            <span className="font-serif italic font-light text-white/90">Transforman</span> la Minería
          </h1>
          


          <div ref={formRef} className="relative mt-12 opacity-0">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-4 text-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-navy">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold">¡Bienvenido a la comunidad!</h3>
                  <p className="text-white/60">Te hemos enviado un correo de bienvenida.</p>
                </div>
              </motion.div>
            ) : (
              <form
                className="group relative flex max-w-xl flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-0"
                onSubmit={handleSubmit}
              >
                <div className="relative flex w-full items-center overflow-hidden rounded-2xl sm:rounded-full border border-white/20 bg-white/5 p-1 backdrop-blur-xl transition-all duration-500 hover:border-white/40 hover:bg-white/10 focus-within:border-white/60 focus-within:ring-1 focus-within:ring-white/20">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email..."
                    disabled={status === 'submitting'}
                    className="w-full bg-transparent px-6 py-4 font-sans text-lg text-white placeholder:text-white/30 focus:outline-none disabled:opacity-50"
                    required
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="hidden sm:block mr-1 h-12 whitespace-nowrap rounded-full bg-white px-8 font-sans font-bold text-navy transition-all hover:bg-cream hover:scale-[1.02] active:scale-[0.98] shadow-xl disabled:opacity-50 disabled:scale-100"
                  >
                    {status === 'submitting' ? 'Enviando...' : 'Únete gratis'}
                  </button>
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="sm:hidden w-full h-14 rounded-2xl bg-white font-sans font-bold text-navy transition-all hover:bg-cream active:scale-[0.98] shadow-xl disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Únete gratis'}
                </button>
                
                {/* Subtle glow effect behind the form */}
                <div className="absolute -inset-1 z-[-1] rounded-full bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
