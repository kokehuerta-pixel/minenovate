'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        onUpdate: (self) => {
          setIsScrolled(self.direction === 1 || self.scroll() > 50);
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 z-40 flex -translate-x-1/2 items-center justify-between rounded-full px-8 py-4 transition-all duration-500 w-[90%] max-w-5xl ${
        isScrolled
          ? 'bg-white/80 text-navy backdrop-blur-md border border-outline shadow-sm'
          : 'bg-transparent text-white border border-transparent'
      }`}
    >
      <div className="font-outfit text-xl font-bold tracking-tight">
        Minenovate
      </div>
      <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
        <a href="#episodios" className="hover:opacity-70 transition-opacity">Episodios</a>
        <a href="#comunidad" className="hover:opacity-70 transition-opacity">Comunidad</a>
        <a href="#manifiesto" className="hover:opacity-70 transition-opacity">Manifiesto</a>
      </div>
      <button
        className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
          isScrolled
            ? 'bg-navy text-white hover:bg-navy/90'
            : 'bg-white text-navy hover:bg-white/90'
        }`}
      >
        Únete
      </button>
    </nav>
  );
}
