import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export const HeroSection = ({ onOpenModal, queueCount = 37 }) => {
  const spotsRemaining = 50 - queueCount;
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Content - Centered */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32"
        style={{ y: textY, opacity }}
      >
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-50 border border-amber-200 rounded-full"
            whileHover={{ scale: 1.05, borderColor: 'rgba(245, 158, 11, 0.5)' }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-sm font-medium text-amber-600 tracking-wide">
              Lawyer in the Loop
            </span>
          </motion.span>
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-[-0.02em] leading-[1.05] text-[#1a1a1a] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          90% AI Speed.<br />
          <span className="text-[#1a1a1a]">100% Human</span><br />
          <span className="text-[#1a1a1a]">Assurance.</span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl font-sans leading-relaxed text-[#666666] max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          The first autonomous contract review platform with a "human-in-the-loop" guarantee. AI handles the grunt work. Licensed attorneys verify the critical 10%.
        </motion.p>
        
        {/* CTA Button - Dark pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-8"
        >
          <motion.button
            onClick={onOpenModal}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-semibold text-base overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.02, 
            }}
            whileTap={{ scale: 0.98 }}
            data-testid="hero-primary-cta"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <span className="relative z-10">Get Priority Access</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={2} />
          </motion.button>
        </motion.div>
        
        {/* Spots Left - Amber indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full"
            animate={{ 
              borderColor: ['rgba(245, 158, 11, 0.3)', 'rgba(245, 158, 11, 0.6)', 'rgba(245, 158, 11, 0.3)']
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-sm font-semibold text-amber-700">{spotsRemaining} spots left</span>
          </motion.span>
        </motion.div>
        
      </motion.div>
    </section>
  );
};
