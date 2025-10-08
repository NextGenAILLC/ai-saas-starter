import HeroSection from './components/HeroSection'
import FAQSection from './components/FAQSection'
import { PricingTable } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4">
        <PricingTable />
      </div>
      <FAQSection />
    </div>
  );
}
