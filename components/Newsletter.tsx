'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
  };

  return (
    <section className="bg-navy py-20 relative overflow-hidden">
      {/* Subtle decorative elements for the dark background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6 tracking-tight">
              Únete a nuestra <br className="md:hidden" />
              <span className="font-serif italic font-light text-white/90">Comunidad</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed">
              Mantente al día con los nuevos episodios directo a tu correo y en tus plataformas favoritas.
            </p>
          </div>

          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 text-white"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy shadow-xl">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-bold">¡Ya casi estamos!</h3>
                    <p className="text-white/50">Confirma tu suscripción en tu email.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="group relative"
                >
                  <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white/5 rounded-3xl sm:rounded-full p-1 border border-white/10 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 focus-within:border-white/30 backdrop-blur-sm gap-4 sm:gap-0">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu email..."
                      disabled={status === 'submitting'}
                      required
                      className="w-full bg-transparent px-6 py-4 text-lg text-white placeholder:text-white/30 focus:outline-none disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="bg-white text-navy px-8 py-4 rounded-2xl sm:rounded-full font-sans font-bold flex items-center justify-center gap-2 hover:bg-cream hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100"
                    >
                      <span>{status === 'submitting' ? 'Enviando...' : 'Enviar'}</span>
                      <ArrowRight className={`w-5 h-5 ${status === 'submitting' ? 'animate-pulse' : ''}`} />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
