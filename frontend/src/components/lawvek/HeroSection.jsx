import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { NetworkBackground } from './NetworkBackground';

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
      {/* Network Background - Only in Hero */}
      <NetworkBackground />
      {/* Premium Depth Gradient Layers - Royal & Lively */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        {/* Top atmospheric depth - soft royal blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F0FA]/40 via-transparent to-transparent" />
        
        {/* Warm golden horizon glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#FFF8E8]/50 via-[#FFFBF0]/30 to-transparent" />
        
        {/* Central focus glow - warm ivory */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px]">
          <div className="absolute inset-0 bg-gradient-radial from-white/60 via-[#FFFEF5]/30 to-transparent rounded-full blur-3xl" />
        </div>
      </motion.div>

      {/* Floating depth layers - Royal elegance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left - soft royal blue cloud */}
        <motion.div 
          className="absolute -top-20 -left-20 w-[450px] h-[350px] rounded-full bg-gradient-to-br from-[#C5D8F0]/40 via-[#D8E8FA]/20 to-transparent blur-3xl"
          animate={{ 
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Top right - golden warmth */}
        <motion.div 
          className="absolute -top-10 right-0 w-[400px] h-[320px] rounded-full bg-gradient-to-bl from-[#FFF0D4]/50 via-[#FFE8C0]/25 to-transparent blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Center floating orb - premium glow */}
        <motion.div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[380px] rounded-full bg-gradient-to-b from-white/50 via-[#FFFEF8]/25 to-transparent blur-2xl"
          animate={{ 
            scale: [1, 1.12, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Bottom golden accent */}
        <motion.div 
          className="absolute bottom-10 left-1/4 w-[400px] h-[280px] rounded-full bg-gradient-to-t from-[#FFE4A8]/35 via-[#FFF0C8]/20 to-transparent blur-3xl"
          animate={{ 
            x: [0, 35, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        
        {/* Right side royal blue accent */}
        <motion.div 
          className="absolute bottom-1/4 right-10 w-[300px] h-[250px] rounded-full bg-gradient-to-l from-[#B8D0F0]/30 via-[#D0E4FA]/15 to-transparent blur-3xl"
          animate={{ 
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Light rays - more prominent & colorful */}
        <div className="absolute top-0 left-[12%] w-[3px] h-[480px] bg-gradient-to-b from-[#A8C8E8]/55 via-[#C5DAF0]/30 to-transparent transform -rotate-12 blur-[2px]" />
        <div className="absolute top-0 left-[32%] w-[2px] h-[520px] bg-gradient-to-b from-[#FFD070]/40 via-[#FFE8A8]/20 to-transparent blur-[1px]" />
        <div className="absolute top-0 left-[52%] w-[2px] h-[400px] bg-gradient-to-b from-[#D4AF37]/35 via-[#E8C860]/15 to-transparent transform rotate-5 blur-[1px]" />
        <div className="absolute top-0 right-[22%] w-[3px] h-[450px] bg-gradient-to-b from-[#B0D0F0]/50 via-[#D0E8FA]/25 to-transparent transform rotate-10 blur-[2px]" />
        <div className="absolute top-0 right-[8%] w-[2px] h-[380px] bg-gradient-to-b from-[#FFD890]/45 to-transparent transform rotate-15 blur-[1px]" />
      </div>
      
      {/* Geometric accent shapes - Royal & Premium */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Rotating hexagonal glow - gold */}
        <motion.div
          className="absolute top-1/4 -left-16 w-[280px] h-[280px] opacity-25"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(218, 165, 32, 0.5), transparent, rgba(65, 105, 180, 0.3), transparent)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Right organic blob - royal blue */}
        <motion.div
          className="absolute top-1/3 -right-8 w-[220px] h-[220px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(65, 105, 180, 0.5) 0%, rgba(218, 165, 32, 0.3) 50%, transparent 70%)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Bottom accent ring - golden */}
        <motion.div
          className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[700px] h-[120px] opacity-15"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.6), rgba(65, 105, 180, 0.4), rgba(218, 165, 32, 0.6), transparent)',
            borderRadius: '50%',
          }}
          animate={{
            scaleX: [1, 1.15, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Sparkle dots */}
        <motion.div
          className="absolute top-[20%] left-[25%] w-3 h-3 rounded-full bg-[#FFD700]"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[35%] right-[20%] w-2 h-2 rounded-full bg-[#4169B4]"
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.3, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[15%] w-2.5 h-2.5 rounded-full bg-[#DAA520]"
          animate={{
            opacity: [0, 0.9, 0],
            scale: [0.5, 1.4, 0.5],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
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
