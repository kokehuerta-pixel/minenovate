'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import gsap from 'gsap';

const episodes = [
  {
    number: '07',
    title: 'El litio y los Minerales Estratégicos',
    duration: '45:20',
  },
  {
    number: '50',
    title: 'El futuro de la Minería Chilena',
    duration: '52:15',
  },
  {
    number: '44',
    title: 'Permisología, Inversión y Futuro',
    duration: '48:30',
  },
];

export default function Episodes() {
  return (
    <section id="episodios" className="bg-cream px-8 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 font-serif text-4xl md:text-5xl lg:text-6xl text-navy">
          Episodios más escuchados
        </h2>
        <div className="flex flex-col gap-6">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.number} episode={episode} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EpisodeCard({ episode }: { episode: { number: string; title: string; duration: string } }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const playBtnRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !playBtnRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Only apply magnetic effect if mouse is close to the button area (right side)
    if (x > rect.width - 150) {
      gsap.to(playBtnRef.current, {
        x: (x - (rect.width - 80)) * 0.4,
        y: (y - rect.height / 2) * 0.4,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(playBtnRef.current, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (playBtnRef.current) {
      gsap.to(playBtnRef.current, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (playBtnRef.current) {
      gsap.to(playBtnRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-[2rem] p-8 transition-colors duration-500 ${
        isHovered ? 'bg-[#25394C]' : 'bg-navy'
      }`}
    >
      <div className="flex items-center gap-8">
        <div className="font-mono text-sm font-medium text-white/50 tracking-widest">
          EPISODIO {episode.number}
        </div>
        <h3 className="font-sans text-xl md:text-2xl font-semibold text-white">
          {episode.title}
        </h3>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:block font-mono text-sm text-white/40">
          {episode.duration}
        </div>
        <div
          ref={playBtnRef}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy shadow-lg transition-transform"
        >
          <Play size={20} className="ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
