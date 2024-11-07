import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Benefits } from '@/components/Benefits';
import { Pricing } from '@/components/Pricing';
import { SocialProof } from '@/components/SocialProof';
import { QuickStart } from '@/components/QuickStart';
import { SecurityDetails } from '@/components/SecurityDetails';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <SocialProof />
      <QuickStart />
      <SecurityDetails />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;