import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Header,
  HeroSection,
  ProblemSection,
  ApproachSection,
  HowItWorksSection,
  BenefitsSection,
  IntegrationsSection,
  ComparisonSection,
  SecuritySection,
  CTASection,
  EarlyAccessModal,
  Footer,
} from "@/components/lawvek";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Queue counter state - persisted in localStorage
  const [queueCount, setQueueCount] = useState(() => {
    const saved = localStorage.getItem('lawvek_queue_count');
    return saved ? parseInt(saved, 10) : 37; // Start at 37 for social proof
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Function to increment queue when form is submitted
  const incrementQueue = () => {
    const newCount = queueCount + 1;
    setQueueCount(newCount);
    localStorage.setItem('lawvek_queue_count', newCount.toString());
  };

  return (
    <div className="min-h-screen bg-[#0A0F1A]" data-testid="landing-page">
      <Header onOpenModal={openModal} />
      <main>
        <HeroSection onOpenModal={openModal} queueCount={queueCount} />
        <ProblemSection />
        <ApproachSection />
        <HowItWorksSection />
        <BenefitsSection />
        <IntegrationsSection />
        <ComparisonSection />
        <SecuritySection />
        <CTASection onOpenModal={openModal} />
      </main>
      <Footer />
      <EarlyAccessModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onSuccess={incrementQueue}
        queueCount={queueCount}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
