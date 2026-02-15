import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#F9F9F9]" data-testid="landing-page">
      <Header onOpenModal={openModal} />
      <main>
        <HeroSection onOpenModal={openModal} />
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
      <EarlyAccessModal isOpen={isModalOpen} onClose={closeModal} />
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
