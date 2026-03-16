import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import PriorityAccess from "@/pages/PriorityAccess";
import Confirmation from "@/pages/Confirmation";
import {
  Header,
  HeroSection,
  TrustTicker,
  WhyLawvekSection,
  ApproachSection,
  HowItWorksSection,
  BenefitsSection,
  IntegrationsSection,
  FAQSection,
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
    <div className="min-h-screen bg-[#FAFAF8]" data-testid="landing-page">
      <Header onOpenModal={openModal} />
      <main className="relative">
        <HeroSection onOpenModal={openModal} />
        <TrustTicker />
        <WhyLawvekSection />
        <ApproachSection />
        <HowItWorksSection />
        <BenefitsSection />
        <IntegrationsSection />
        <FAQSection />
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
          <Route path="/priority-access" element={<PriorityAccess />} />
          <Route path="/priorityaccess" element={<PriorityAccess />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
