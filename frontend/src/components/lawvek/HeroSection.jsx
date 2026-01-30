import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Premium architectural background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - from left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F9F9] via-[#F9F9F9]/95 to-[#F9F9F9]/40" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 pt-32 md:pt-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#475569]/80 mb-8 px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-[#E2E8F0]">
              AI-Powered Contract Review
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight leading-[1.08] text-[#1A1A1A] mb-8">
              Contracts reviewed based on complexity, not guesswork.
            </h1>
            
            <p className="text-lg md:text-xl font-sans leading-relaxed text-[#475569] max-w-2xl mb-12">
              AI-powered contract review with the right level of human legal oversight — fast, transparent, and cost-effective.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#cta"
                className="inline-flex items-center justify-center bg-[#1E293B] text-white px-10 py-4 rounded-[2px] hover:bg-[#0F172A] transition-all duration-300 font-medium text-sm tracking-wide shadow-[0_4px_12px_rgba(30,41,59,0.25)] hover:shadow-[0_6px_20px_rgba(30,41,59,0.35)] group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-testid="hero-primary-cta"
              >
                Upload a contract
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm border border-[#E2E8F0] text-[#1E293B] px-10 py-4 rounded-[2px] hover:bg-white transition-all duration-300 font-medium text-sm tracking-wide"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-testid="hero-secondary-cta"
              >
                See how it works
              </motion.a>
            </div>
          </motion.div>
          
          {/* Stats or Trust indicators */}
          <motion.div 
            className="mt-16 pt-8 border-t border-[#E2E8F0]/50 flex flex-wrap gap-8 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <p className="text-3xl font-serif text-[#1E293B]">2hrs</p>
              <p className="text-sm text-[#475569] mt-1">Avg. turnaround</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-[#1E293B]">60%</p>
              <p className="text-sm text-[#475569] mt-1">Cost savings</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-[#1E293B]">99.2%</p>
              <p className="text-sm text-[#475569] mt-1">Accuracy rate</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-[#1E293B]/20 flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-2 bg-[#1E293B]/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
