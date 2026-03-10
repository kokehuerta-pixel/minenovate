'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        text1Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 0.5, y: 0, duration: 1, ease: 'power3.out' }
      ).fromTo(
        text2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.5'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifiesto"
      ref={containerRef}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-navy px-8 py-32 md:px-16 lg:px-24"
    >
      {/* Organic Texture Parallax (Simulated with CSS) */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <div
          className="h-[200%] w-full bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center"
          style={{
            transform: 'translateY(-20%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2
          ref={text1Ref}
          className="mb-12 font-sans text-3xl md:text-5xl font-medium text-white/50 leading-tight"
        >
          Lo normal es preguntar: <br />
          <span className="italic">¿cuántas toneladas extraemos?</span>
        </h2>
        <h2
          ref={text2Ref}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          Nosotros preguntamos: <br />
          <span className="italic text-outline">¿cómo innovamos en la historia de la minería?</span>
        </h2>
      </div>
    </section>
  );
}
