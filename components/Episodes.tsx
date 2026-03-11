'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import gsap from 'gsap';
import Image from 'next/image';

const episodes = [
  {
    number: '51',
    title: 'Sonami: Impulsando la Minería',
    description: 'Liderazgo, desafíos y oportunidades',
    image: '/images/episode-51.png',
    link: 'https://open.spotify.com/episode/3hd7DnUVY5c8wgANicK53Z?si=6k4Ghm0VTD-aqqZMkj3oKg',
  },
  {
    number: '50',
    title: 'El futuro de la Minería Chilena',
    description: 'Litio, inversión y sostenibilidad',
    image: '/images/episode-50.png',
    link: 'https://open.spotify.com/episode/7ezWLLjcpgdxEJOcCilvGG?si=8zwKw3vOQ8-tUWRI6APp5w',
  },
  {
    number: '44',
    title: 'Permisología, Inversión y Futuro',
    description: 'Claves para una minería sostenible',
    image: '/images/episode-44-new.png',
    link: 'https://open.spotify.com/episode/2RxOC8Jenj4QtS0bvC00bT?si=QHfuPkAFQ5elXrf99KASAg',
  },
  {
    number: '07',
    title: 'El litio y los Minerales Estratégicos',
    description: 'Explorando el Contexto Minero y la Importancia de los Minerales Críticos',
    image: '/images/episode-07-new.png',
    link: 'https://open.spotify.com/episode/1sylhKNnj9ssfkwFvMbd1h?si=VzR_YXHWT72jJojF-qau9w',
  },
];

export default function Episodes() {
  return (
    <section id="episodios" className="bg-cream px-8 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-4xl md:text-6xl font-sans font-bold text-navy tracking-tight">
          Episodios más <br className="md:hidden" />
          <span className="font-serif italic font-light text-navy/80">escuchados</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.number} episode={episode} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EpisodeCard({ episode }: { episode: { number: string; title: string; description: string; image: string; link: string } }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 0.6,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      });
    }
  };

  return (
    <a
      href={episode.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col md:flex-row overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] bg-navy transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    >
      {/* Background Gradient for Premium Feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      {/* Episode Image - Updated Ratio for Desktop (md:w-[40%]) */}
      <div className="relative aspect-square md:aspect-auto md:w-[40%] overflow-hidden">
        <div ref={imageRef} className="h-full w-full">
          <Image
            src={episode.image}
            alt={episode.title}
            fill
            className="object-cover opacity-85 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
        
        {/* Play Icon Badge */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 flex h-12 w-12 items-center justify-center rounded-full bg-navy/60 text-white backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-navy group-hover:border-transparent">
          <Play size={20} fill="currentColor" />
        </div>
      </div>

      {/* Episode Info - Enhanced Typography */}
      <div className="flex flex-1 flex-col justify-between p-8 md:p-10 lg:p-12">
        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-[10px] md:text-xs font-bold text-white/80 tracking-widest uppercase">
              Episodio {episode.number}
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
          <h3 className="mb-4 font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight transition-colors duration-300 group-hover:text-white/90">
            {episode.title}
          </h3>
          <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed line-clamp-2 md:line-clamp-3">
            {episode.description}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-3 font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/90 transition-all duration-500">
          <span className="relative">
            Reproducir
            <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
          </span>
          <span className="text-xl leading-none transition-transform duration-500 group-hover:translate-x-2">›</span>
        </div>
      </div>
    </a>
  );
}
