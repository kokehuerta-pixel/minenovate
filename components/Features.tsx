'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Terminal, Calendar, Layers } from 'lucide-react';

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="bg-cream px-8 py-32 md:px-16 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <DiagnosticDeck />
          <LiveTelemetry />
          <AgendaProtocol />
        </div>
      </div>
    </section>
  );
}

function DiagnosticDeck() {
  const cards = ['Historias de Impacto', 'Nuevas Tecnologías', 'Casos de Éxito'];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="relative flex h-80 flex-col items-center justify-center overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-sm border border-outline/50">
      <div className="absolute top-8 left-8 flex items-center gap-2 text-navy/50 font-mono text-xs uppercase tracking-wider">
        <Layers size={14} />
        <span>Baraja Diagnóstica</span>
      </div>
      <div className="relative h-32 w-full max-w-[200px]">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const offset = (index - activeIndex + cards.length) % cards.length;
          
          let y = 0;
          let scale = 1;
          let opacity = 1;
          let zIndex = 10 - offset;

          if (offset === 0) {
            y = 0;
            scale = 1;
            opacity = 1;
          } else if (offset === 1) {
            y = 16;
            scale = 0.95;
            opacity = 0.7;
          } else {
            y = 32;
            scale = 0.9;
            opacity = 0.4;
          }

          return (
            <div
              key={card}
              className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-2xl border border-outline bg-white p-4 text-center shadow-sm transition-all duration-700 ease-in-out"
              style={{
                transform: `translateY(${y}px) scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              <span className="font-sans font-semibold text-navy">{card}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LiveTelemetry() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrases = ['Analizando Minerales Estratégicos...', 'Conectando Profesionales...', 'Procesando Datos de Campo...'];
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setText(
          currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <div className="relative flex h-80 flex-col overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-sm border border-outline/50">
      <div className="absolute top-8 left-8 flex items-center gap-2 text-navy/50 font-mono text-xs uppercase tracking-wider">
        <Terminal size={14} />
        <span>Telemetría en Vivo</span>
      </div>
      <div className="mt-auto mb-auto font-mono text-sm text-navy">
        <div className="flex flex-col gap-2">
          <span className="text-navy/40">&gt; system.init()</span>
          <span className="text-navy/40">&gt; connection.establish()</span>
          <div className="flex items-center">
            <span className="text-navy">&gt; {text}</span>
            <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-navy"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgendaProtocol() {
  const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  const [activeDay, setActiveDay] = useState(3); // Start on Thursday ('J')

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDay((prev) => (prev + 1) % 7);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-80 flex-col overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-sm border border-outline/50">
      <div className="absolute top-8 left-8 flex items-center gap-2 text-navy/50 font-mono text-xs uppercase tracking-wider">
        <Calendar size={14} />
        <span>Agenda / Protocolo</span>
      </div>
      <div className="mt-auto mb-auto w-full">
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <div
              key={index}
              className={`flex aspect-square items-center justify-center rounded-xl border text-sm font-medium transition-all duration-500 ${
                activeDay === index
                  ? 'border-navy bg-navy text-white shadow-md scale-110'
                  : 'border-outline bg-transparent text-navy/40'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center font-mono text-xs text-navy/60">
          {activeDay === 3 ? 'NUEVO EPISODIO DISPONIBLE' : 'ESCUCHANDO ARCHIVO'}
        </div>
      </div>
    </div>
  );
}
