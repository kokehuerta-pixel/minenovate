import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

import Episodes from '@/components/Episodes';
import Manifesto from '@/components/Manifesto';
import Community from '@/components/Community';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-cream">
      <Navbar />
      <Hero />
      <Episodes />
      <Manifesto />

      <Community />
      <Newsletter />
      <Footer />
    </main>
  );
}
