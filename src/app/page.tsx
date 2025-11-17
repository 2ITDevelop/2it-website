import Hero from '@/components/Hero';
import ChiSonoPage from './chi-sono/page';
import ServicesSection from '@/components/ServiceSection';
import PortfolioPage from './portfolio/page';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PortfolioPage />
      <ChiSonoPage />
      <ServicesSection />
    </main>
  );
}
