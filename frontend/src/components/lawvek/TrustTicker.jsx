import { motion } from 'framer-motion';

export const TrustTicker = () => {
  const tickerItems = [
    '90% Faster Contract Review',
    'Licensed Attorney Verified',
    'SOC 2 Type II Compliant',
    'Bank-Grade Encryption',
    'Built for Indian Legal System',
    'AI-Powered Risk Detection',
    'Zero Hallucination Guarantee',
    'Clause-Level Risk Scoring',
    '50+ Contract Types Supported',
  ];

  // Duplicate for seamless loop
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <div className="relative w-full overflow-hidden bg-[#0F172A] py-3.5">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-10" />
      
      {/* Ticker content - Fast smooth scroll */}
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {allItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-[13px] font-medium tracking-[0.15em] text-white/70 uppercase px-8">
              {item}
            </span>
            <span className="text-amber-400/50 text-xs">◆</span>
          </div>
        ))}
      </motion.div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
    </div>
  );
};
