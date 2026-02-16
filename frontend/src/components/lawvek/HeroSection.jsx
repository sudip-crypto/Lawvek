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
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Sky/Ocean Depth Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient - deep sky blue to light */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: bgY }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#E8F4FC] via-[#F0F7FB] to-[#FAFAFA]" />
        </motion.div>
        
        {/* Atmospheric layers - soft clouds/mist effect */}
        <div className="absolute inset-0">
          {/* Top atmospheric glow */}
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#D4E8F5]/40 to-transparent" />
          
          {/* Soft radial glow in center */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-gradient-radial from-white/60 via-[#E8F4FC]/30 to-transparent blur-3xl" />
          
          {/* Horizon line subtle glow */}
          <div className="absolute bottom-1/4 left-0 right-0 h-64 bg-gradient-to-t from-[#F5E6D3]/20 via-[#FEF3C7]/10 to-transparent" />
        </div>

        {/* Floating ethereal shapes - like clouds or underwater caustics */}
        <motion.div 
          className="absolute top-20 left-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-[#B8D4E8]/20 to-transparent blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-[15%] w-80 h-80 rounded-full bg-gradient-to-bl from-[#D4E8F5]/25 to-transparent blur-3xl"
          animate={{ 
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-40 left-[20%] w-72 h-72 rounded-full bg-gradient-to-tr from-[#FEF3C7]/15 to-transparent blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div 
          className="absolute top-60 left-[40%] w-64 h-64 rounded-full bg-gradient-to-b from-white/30 to-transparent blur-2xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Subtle light rays from top */}
        <div className="absolute top-0 left-1/4 w-px h-[500px] bg-gradient-to-b from-[#B8D4E8]/30 to-transparent transform -rotate-12" />
        <div className="absolute top-0 right-1/3 w-px h-[400px] bg-gradient-to-b from-[#D4E8F5]/25 to-transparent transform rotate-6" />
        <div className="absolute top-0 left-[45%] w-px h-[450px] bg-gradient-to-b from-white/20 to-transparent" />

        {/* Bottom fade for seamless transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
      </div>

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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-amber-200/80 rounded-full shadow-sm"
            whileHover={{ scale: 1.05, borderColor: 'rgba(245, 158, 11, 0.5)' }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-sm font-medium text-amber-600 tracking-wide">
              Lawyer Assisted AI
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
          Contract review<br />
          <span className="text-[#1a1a1a]">without hourly billing.</span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl font-sans leading-relaxed text-[#555555] max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          AI-powered contract review with the right level of human legal oversight — fast, transparent, and cost-effective.
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
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-semibold text-base overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-full shadow-sm"
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
