import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center bg-[#F9F9F9] pt-20 md:pt-0"
      data-testid="hero-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#475569]/70 mb-6 block">
                AI-Powered Contract Review
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] text-[#1A1A1A] mb-6">
                Contracts reviewed based on complexity, not guesswork.
              </h1>
              
              <p className="text-base md:text-lg font-sans leading-relaxed text-[#475569] max-w-xl mb-10">
                AI-powered contract review with the right level of human legal oversight — fast, transparent, and cost-effective.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center bg-[#1E293B] text-white px-8 py-4 rounded-[2px] hover:bg-[#0F172A] transition-colors duration-300 font-medium text-sm tracking-wide btn-press group"
                  data-testid="hero-primary-cta"
                >
                  Upload a contract
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center bg-transparent border border-[#E2E8F0] text-[#1E293B] px-8 py-4 rounded-[2px] hover:bg-[#F1F5F9] transition-colors duration-300 font-medium text-sm tracking-wide"
                  data-testid="hero-secondary-cta"
                >
                  See how it works
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Right Image */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden bg-white border border-[#E2E8F0] shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modern minimalist office architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
