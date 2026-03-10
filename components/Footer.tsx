export default function Footer() {
  return (
    <footer className="bg-navy px-8 py-12 md:px-16 lg:px-24 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="font-outfit text-2xl font-bold tracking-tight text-white">
          Minenovate
        </div>
        
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-widest text-white/70">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Comunidad / Activa
        </div>
      </div>
    </footer>
  );
}
