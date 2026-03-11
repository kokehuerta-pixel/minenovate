'use client';

import { ArrowRight } from 'lucide-react';

const BRAND_ICONS = {
  spotify: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  ),
  apple_podcasts: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path d="M11.87 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178.488.253.888.745 1.04 1.259.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z" />
    </svg>
  ),
  amazon_music: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  youtube_music: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6zm-1.875-8.625l4.875 2.625-4.875 2.625V9.375z" />
    </svg>
  ),
};

const SOCIAL_LINKS = [
  {
    name: 'Spotify',
    platform: 'spotify' as const,
    url: 'https://open.spotify.com/show/6JuGCmg8leVvXUNtqb867Y',
    description: 'Escucha nuestros episodios en alta calidad.',
    color: 'group-hover:text-[#1DB954]',
    gradient: 'from-[#1DB954]/10 to-transparent',
    border: 'hover:border-[#1DB954]/40'
  },
  {
    name: 'Apple Podcasts',
    platform: 'apple_podcasts' as const,
    url: 'https://podcasts.apple.com/us/podcast/minenovate-historias-de-miner%C3%ADa-innovaci%C3%B3n-y-tendencias/id1691025109',
    description: 'La experiencia clásica de podcast en Apple.',
    color: 'group-hover:text-[#A05BBF]',
    gradient: 'from-[#A05BBF]/10 to-transparent',
    border: 'hover:border-[#A05BBF]/40'
  },
  {
    name: 'Amazon Music',
    platform: 'amazon_music' as const,
    url: 'https://music.amazon.com/podcasts/2953fc20-b5ab-40aa-b0b2-fb411501a159/minenovate---historias-de-miner%C3%ADa-innovaci%C3%B3n-y-tendencias',
    description: 'Disponible para miembros Prime y más.',
    color: 'group-hover:text-[#00A8E1]',
    gradient: 'from-[#00A8E1]/10 to-transparent',
    border: 'hover:border-[#00A8E1]/40'
  },
  {
    name: 'YouTube',
    platform: 'youtube' as const,
    url: 'https://www.youtube.com/@minenovate',
    description: 'Mira las entrevistas y contenido visual.',
    color: 'group-hover:text-[#FF0000]',
    gradient: 'from-[#FF0000]/10 to-transparent',
    border: 'hover:border-[#FF0000]/40'
  },
  {
    name: 'YouTube Music',
    platform: 'youtube_music' as const,
    url: 'https://music.youtube.com/playlist?list=PLP9B0bcVqKbQyfXcBW4Ckf5UJMIjERPt_',
    description: 'Tu música y podcasts en un solo lugar.',
    color: 'group-hover:text-[#FF0000]',
    gradient: 'from-[#FF0000]/10 to-transparent',
    border: 'hover:border-[#FF0000]/40'
  }
];

export default function Community() {
  return (
    <section id="comunidad" className="py-24 bg-white relative overflow-hidden">
      {/* Background Ambience - Light grid */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(28,43,57,0.02) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(28,43,57,0.02) 50px)`
      }}></div>
      
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-navy/[0.02] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-navy/[0.02] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">


        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-navy mb-6 tracking-tight">
            Escúchanos en
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-10 rounded-[2.5rem] bg-white border border-navy/[0.06] transition-all duration-500 ${link.border} hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/[0.08] overflow-hidden flex flex-col items-center text-center`}
            >
              {/* Brand Gradient Aura - now more subtle for light mode */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${link.gradient}`} />
              
              <div className={`relative z-10 mb-8 text-navy/40 transition-all duration-500 transform group-hover:scale-110 ${link.color}`}>
                {BRAND_ICONS[link.platform as keyof typeof BRAND_ICONS]}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-navy mb-3 transition-colors">
                  {link.name}
                </h3>
                <p className="text-base text-navy/50 line-clamp-2 leading-relaxed">
                  {link.description}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 text-navy/20">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
