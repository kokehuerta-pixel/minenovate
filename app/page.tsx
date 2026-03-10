import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Episodes from '@/components/Episodes';
import Manifesto from '@/components/Manifesto';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-cream">
      <Navbar />
      <Hero />
      <Features />
      <Episodes />
      <Manifesto />
      <Community />
      <Footer />
    </main>
  );
}
