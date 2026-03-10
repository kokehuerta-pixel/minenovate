'use client';

import { ArrowRight, Linkedin, Youtube, Podcast, Music } from 'lucide-react';

export default function Community() {
  return (
    <section id="comunidad" className="bg-navy px-8 py-32 md:px-16 lg:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-12 font-sans text-3xl md:text-5xl font-semibold text-white leading-tight">
          Mantente al día con los nuevos episodios directo a tu correo.
        </h2>
        
        <form className="mx-auto flex max-w-2xl flex-col sm:flex-row items-center gap-4 rounded-full bg-cream p-2 shadow-xl border border-navy">
          <input
            type="email"
            placeholder="tu@correo.com"
            className="w-full bg-transparent px-6 py-4 font-sans text-navy placeholder:text-outline focus:outline-none"
            required
          />
          <button
            type="submit"
            className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-navy px-8 font-sans font-medium text-white transition-all hover:bg-navy/90"
          >
            <span>Enviar</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        <div className="mt-32 flex flex-col items-center justify-center gap-6">
          <p className="font-mono text-sm text-white/50 uppercase tracking-widest">
            Encuéntranos en:
          </p>
          <div className="flex items-center gap-8">
            <SocialIcon icon={<Music size={24} />} href="#" label="Spotify" />
            <SocialIcon icon={<Podcast size={24} />} href="#" label="Apple Podcasts" />
            <SocialIcon icon={<Youtube size={24} />} href="#" label="YouTube" />
            <SocialIcon icon={<Linkedin size={24} />} href="#" label="LinkedIn" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
    >
      {icon}
    </a>
  );
}
