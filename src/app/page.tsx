import Hero from '@/components/Hero';
import ChiSonoPage from './chi-sono/page';
import ServicesSection from '@/components/ServiceSection';


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesSection/>
      <ChiSonoPage/>
    </main>
  );
}
