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
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Premium Depth Gradient Layers - Semi-transparent to show particles */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        {/* Sky gradient overlay - top atmospheric depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F1F8]/50 via-transparent to-transparent" />
        
        {/* Horizon warmth - bottom warm glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-[#FDF8F3]/40 via-[#FEF7ED]/20 to-transparent" />
        
        {/* Central radial glow - focus area - more subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px]">
          <div className="absolute inset-0 bg-gradient-radial from-white/35 via-white/10 to-transparent rounded-full blur-3xl" />
        </div>
      </motion.div>

      {/* Floating depth layers - more subtle ethereal clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left cloud - subtle */}
        <motion.div 
          className="absolute -top-20 -left-20 w-[400px] h-[300px] rounded-full bg-gradient-to-br from-[#D6E6F2]/25 via-[#E8F1F8]/10 to-transparent blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Top right cloud - subtle */}
        <motion.div 
          className="absolute -top-10 right-0 w-[350px] h-[280px] rounded-full bg-gradient-to-bl from-[#E0EBF5]/20 via-[#EDF3F9]/10 to-transparent blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Center floating orb - subtle */}
        <motion.div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full bg-gradient-to-b from-white/25 via-[#F5F9FC]/10 to-transparent blur-2xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Bottom warm glow - subtle */}
        <motion.div 
          className="absolute bottom-20 left-1/3 w-[350px] h-[250px] rounded-full bg-gradient-to-t from-[#FEF3C7]/15 via-[#FDF6E3]/10 to-transparent blur-3xl"
          animate={{ 
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />

        {/* Light rays - more prominent beams from top */}
        <div className="absolute top-0 left-[15%] w-[3px] h-[450px] bg-gradient-to-b from-[#B8D4E8]/50 via-[#D6E6F2]/25 to-transparent transform -rotate-12 blur-[2px]" />
        <div className="absolute top-0 left-[35%] w-[2px] h-[500px] bg-gradient-to-b from-[#C8DFF0]/45 via-[#E0ECF5]/15 to-transparent blur-[1px]" />
        <div className="absolute top-0 left-[55%] w-[2px] h-[380px] bg-gradient-to-b from-[#D4A574]/30 via-[#E8C9A0]/10 to-transparent transform rotate-3 blur-[1px]" />
        <div className="absolute top-0 right-[25%] w-[3px] h-[420px] bg-gradient-to-b from-[#C5DAE9]/45 via-[#E3EEF7]/20 to-transparent transform rotate-8 blur-[2px]" />
        <div className="absolute top-0 right-[10%] w-[2px] h-[350px] bg-gradient-to-b from-[#E8F1F8]/50 to-transparent transform rotate-15 blur-[1px]" />
      </div>
      
      {/* Additional depth: Geometric accent shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large hexagonal glow - left side depth */}
        <motion.div
          className="absolute top-1/4 -left-20 w-[300px] h-[300px] opacity-20"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(212, 175, 55, 0.3), transparent, rgba(50, 60, 80, 0.2), transparent)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Right side depth element */}
        <motion.div
          className="absolute top-1/3 -right-10 w-[200px] h-[200px] opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, rgba(50, 60, 80, 0.2) 50%, transparent 70%)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          }}
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Bottom accent ring */}
        <motion.div
          className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[100px] opacity-10"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(50, 60, 80, 0.5), rgba(212, 175, 55, 0.3), rgba(50, 60, 80, 0.5), transparent)',
            borderRadius: '50%',
          }}
          animate={{
            scaleX: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Bottom fade for seamless transition to ticker */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent pointer-events-none" />

      {/* Content - Centered with protective backdrop */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32"
        style={{ y: textY, opacity }}
      >
        {/* Subtle protective backdrop for readability */}
        <div className="absolute inset-0 -mx-12 -my-8 bg-gradient-radial from-white/70 via-white/40 to-transparent rounded-3xl blur-xl pointer-events-none" />
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-full shadow-sm shadow-amber-100/50"
            whileHover={{ scale: 1.05, borderColor: 'rgba(245, 158, 11, 0.5)' }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-medium text-amber-600 tracking-wide">
              Lawyer Assisted AI
            </span>
          </motion.span>
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          className="relative text-5xl sm:text-6xl lg:text-7xl font-serif tracking-[-0.02em] leading-[1.05] text-[#1a1a1a] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Contract review<br />
          <span className="text-[#1a1a1a]">without hourly billing.</span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="relative text-lg md:text-xl font-sans leading-relaxed text-[#555555] max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          AI-powered contract review with the right level of human legal oversight — fast, transparent, and cost-effective.
        </motion.p>
        
        {/* CTA Button - Dark pill with enhanced backdrop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mb-8"
        >
          {/* CTA backdrop glow */}
          <div className="absolute inset-0 -inset-x-8 -inset-y-4 bg-white/60 rounded-full blur-2xl pointer-events-none" />
          <motion.button
            onClick={onOpenModal}
            className="relative group inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-semibold text-base overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl"
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm border border-amber-200 rounded-full shadow-sm"
            animate={{ 
              borderColor: ['rgba(245, 158, 11, 0.3)', 'rgba(245, 158, 11, 0.6)', 'rgba(245, 158, 11, 0.3)']
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
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
