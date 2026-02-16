import { motion } from 'framer-motion';
import { Zap, Shield, Lock, Flag, Bot, CheckCircle, BarChart3, FileText } from 'lucide-react';

export const TrustTicker = () => {
  const tickerItems = [
    { text: '90% Faster Contract Review', Icon: Zap },
    { text: 'Licensed Attorney Verified', Icon: CheckCircle },
    { text: 'SOC 2 Type II Compliant', Icon: Shield },
    { text: 'Bank-Grade Encryption', Icon: Lock },
    { text: 'Built for Indian Legal System', Icon: Flag },
    { text: 'AI-Powered Risk Detection', Icon: Bot },
    { text: 'Zero Hallucination Guarantee', Icon: CheckCircle },
    { text: 'Clause-Level Risk Scoring', Icon: BarChart3 },
    { text: '50+ Contract Types Supported', Icon: FileText },
  ];

  // Duplicate items for seamless loop
  const allItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#0A0F1A] via-[#111827] to-[#0A0F1A] py-5 border-y border-amber-500/10">
      {/* Subtle glow line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0A0F1A] via-[#0A0F1A]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0A0F1A] via-[#0A0F1A]/80 to-transparent z-10 pointer-events-none" />
      
      {/* Ticker content */}
      <motion.div
        className="flex items-center gap-16 whitespace-nowrap"
        animate={{
          x: ['0%', '-33.33%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 45,
            ease: 'linear',
          },
        }}
      >
        {allItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <item.Icon className="w-4 h-4 text-amber-400/70" strokeWidth={1.5} />
            <span className="text-[13px] font-medium tracking-wider text-slate-300/80 uppercase">
              {item.text}
            </span>
            <span className="text-amber-500/40 text-sm ml-8">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
