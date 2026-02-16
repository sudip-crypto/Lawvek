import { motion } from 'framer-motion';

export const TrustTicker = () => {
  const tickerItems = [
    { text: '90% Faster Contract Review', icon: '⚡' },
    { text: 'Licensed Attorney Verified', icon: '✓' },
    { text: 'SOC 2 Type II Compliant', icon: '🛡' },
    { text: 'Bank-Grade Encryption', icon: '🔒' },
    { text: 'Built for Indian Legal System', icon: '🇮🇳' },
    { text: 'AI-Powered Risk Detection', icon: '🤖' },
    { text: 'Zero Hallucination Guarantee', icon: '✓' },
    { text: 'Clause-Level Risk Scoring', icon: '📊' },
    { text: '50+ Contract Types Supported', icon: '📄' },
  ];

  // Duplicate items for seamless loop
  const allItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] py-4 border-y border-[#334155]/50">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />
      
      {/* Ticker content */}
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        animate={{
          x: ['0%', '-33.33%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 40,
            ease: 'linear',
          },
        }}
      >
        {allItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-2"
          >
            <span className="text-amber-400/80 text-sm">{item.icon}</span>
            <span className="text-sm font-medium tracking-wide text-slate-300/90 uppercase">
              {item.text}
            </span>
            <span className="text-amber-500/60 text-lg ml-6">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
