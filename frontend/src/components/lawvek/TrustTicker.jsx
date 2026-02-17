import { motion } from 'framer-motion';

export const TrustTicker = () => {
  const tickerItems = [
    '90% Faster Contract Review',
    'Licensed Attorney Verified',
    'SOC 2 Type II Compliant',
    'Bank-Grade Encryption',
    'AI-Powered Risk Detection',
    'Zero Hallucination Guarantee',
    'Clause-Level Risk Scoring',
    '50+ Contract Types Supported',
    'Enterprise Ready',
  ];

  // Duplicate for seamless loop
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <div className="relative w-full overflow-hidden py-5">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#FFFEFA] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#FFFEFA] to-transparent z-10" />
      
      {/* Ticker content */}
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {allItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-[12px] font-medium tracking-[0.2em] text-[#52525b]/70 uppercase px-10">
              {item}
            </span>
            <span className="text-[#d4af37]/60 text-[8px]">✦</span>
          </div>
        ))}
      </motion.div>
      
      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
    </div>
  );
};
