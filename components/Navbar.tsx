'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navLinks = [
    { name: 'Episodios', href: '#episodios' },
    { name: 'Comunidad', href: '#comunidad' },
    { name: 'Manifiesto', href: '#manifiesto' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-6 left-1/2 z-50 flex -translate-x-1/2 items-center justify-between rounded-full px-8 py-4 transition-all duration-500 w-[90%] max-w-5xl ${
          isScrolled || isMenuOpen
            ? 'bg-white/90 text-navy backdrop-blur-md border border-navy/10 shadow-lg'
            : 'bg-transparent text-white border border-transparent'
        }`}
      >
        <div className="font-outfit text-xl font-bold tracking-tight">
          Minenovate
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:opacity-70 transition-opacity">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          className={`hidden md:block rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
            isScrolled
              ? 'bg-navy text-white hover:bg-navy/90'
              : 'bg-white text-navy hover:bg-white/90'
          }`}
        >
          Únete
        </button>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 -mr-2 text-navy"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-navy' : 'text-white'} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white p-6 md:hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, #1C2B39 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, #1C2B39 50px)`
            }} />

            <div className="relative z-10 flex flex-col items-center gap-12 w-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-outfit text-4xl font-bold text-navy hover:text-navy/60 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 w-full max-w-xs bg-navy text-white rounded-full py-6 text-xl font-bold shadow-2xl shadow-navy/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Únete gratis
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
