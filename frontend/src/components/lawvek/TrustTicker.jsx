import { motion } from 'framer-motion';

export const TrustTicker = () => {
  const tickerItems = [
    '90% Faster Reviews',
    'Attorney Verified',
    'SOC 2 Compliant',
    'Bank-Grade Security',
    'AI Risk Detection',
    'Zero Hallucinations',
    'Enterprise Ready',
    '50+ Contract Types',
  ];

  // Duplicate for seamless loop
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <div className="relative w-full overflow-hidden py-6 bg-gradient-to-r from-[#FDFCFA] via-[#F9F7F4] to-[#FDFCFA]">
      {/* Top golden accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
      
      {/* Gradient overlays for premium fade */}
      <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#FDFCFA] via-[#FDFCFA]/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#FDFCFA] via-[#FDFCFA]/80 to-transparent z-10" />
      
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
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {allItems.map((item, index) => (
          <div key={index} className="flex items-center gap-8 px-8">
            <span className="text-[14px] font-semibold tracking-[0.15em] text-[#2d2d2d]/80 uppercase">
              {item}
            </span>
            <span className="text-[#d4af37] text-sm font-light">|</span>
          </div>
        ))}
      </motion.div>
      
      {/* Bottom golden accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
    </div>
  );
};
