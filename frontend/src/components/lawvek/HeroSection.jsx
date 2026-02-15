import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection = ({ onOpenModal, queueCount = 37 }) => {
  const spotsRemaining = 50 - queueCount;
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Premium architectural background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0A0F1A]/85" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <span className="text-sm font-medium text-amber-400 tracking-wide">
              Lawyer Assisted AI
            </span>
          </span>
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-[-0.02em] leading-[1.05] text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Contract review<br />
          <span className="text-white/90">without hourly billing.</span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl font-sans leading-relaxed text-white/60 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AI-powered contract review with the right level of human legal oversight — fast, transparent, and cost-effective.
        </motion.p>
        
        {/* CTA Button - White pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <motion.button
            onClick={onOpenModal}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0F172A] rounded-full font-semibold text-base overflow-hidden transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            whileHover={{ scale: 1.02, boxShadow: '0 0 60px rgba(255,255,255,0.25)' }}
            whileTap={{ scale: 0.98 }}
            data-testid="hero-primary-cta"
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#0F172A]/5 to-transparent" />
            
            <span className="relative z-10">Get Priority Access</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={2} />
          </motion.button>
        </motion.div>
        
        {/* Spots Left - Amber badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="text-sm font-semibold text-amber-400">{spotsRemaining} spots left</span>
          </span>
        </motion.div>
        
      </div>
    </section>
  );
};
