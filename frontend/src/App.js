import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  Footer,
} from "@/components/lawvek";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9]" data-testid="landing-page">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ApproachSection />
        <HowItWorksSection />
        <BenefitsSection />
        <IntegrationsSection />
        <ComparisonSection />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
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
