import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { BonusSection } from './components/BonusSection';
import { ProofSection } from './components/ProofSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BonusSection />
        <ProofSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;