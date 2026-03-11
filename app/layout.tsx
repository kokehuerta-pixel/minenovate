import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Outfit, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Minenovate | Podcast & Comunidad de Innovación Minera',
  description: 'Explorando las historias, tecnologías y el futuro que transforman la minería global a través de conversaciones con líderes de la industria.',
  keywords: ['minería', 'innovación', 'podcast', 'tecnología', 'Chile', 'sostenibilidad', 'futuro'],
  authors: [{ name: 'Minenovate Team' }],
  creator: 'Minenovate',
  publisher: 'Minenovate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Minenovate | Podcast & Comunidad',
    description: 'Explorando las historias y tecnologías que transforman la minería global.',
    url: 'https://minenovate.cl',
    siteName: 'Minenovate',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Minenovate Podcast',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minenovate | Podcast & Comunidad',
    description: 'Historias y tecnologías que transforman la minería global.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} ${outfit.variable} ${cormorantGaramond.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#F8F8F8] text-[#1C2B39] antialiased selection:bg-[#1C2B39] selection:text-white" suppressHydrationWarning>
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.05] mix-blend-overlay">
          <svg className="h-full w-full">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}
