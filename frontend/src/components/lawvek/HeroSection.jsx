import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Check } from 'lucide-react';

export const HeroSection = ({ onOpenModal, queueCount = 37 }) => {
  const spotsRemaining = 50 - queueCount;
  
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Premium architectural background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/95 to-[#FAFAFA]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
          
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#E2E8F0] rounded-full mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-[#475569] tracking-wide">
                Lawyer Assisted AI
              </span>
            </div>
            
            <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-serif tracking-[-0.02em] leading-[1.1] text-[#0F172A] mb-6">
              Contract review{' '}
              <span className="text-[#1E293B]">without hourly billing.</span>
            </h1>
            
            <p className="text-lg font-sans leading-relaxed text-[#64748B] max-w-lg mb-10">
              AI-powered contract review with the right level of human legal oversight — fast, transparent, and cost-effective.
            </p>
            
            {/* Premium CTA with Urgency Indicator */}
            <div className="mb-16">
              <motion.button
                onClick={onOpenModal}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-[#0F172A] text-white rounded-full font-medium text-[15px] overflow-hidden transition-all duration-500"
                whileHover={{ scale: 1.02, boxShadow: '0 15px 35px rgba(15,23,42,0.2)' }}
                whileTap={{ scale: 0.98 }}
                data-testid="hero-primary-cta"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                {/* Button content */}
                <span className="relative z-10">Get Priority Access</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={2} />
              </motion.button>
              
              {/* Urgency Spots Left - Premium styling */}
              <motion.div 
                className="mt-6 flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span className="text-sm font-bold text-amber-700">{spotsRemaining} spots left</span>
                </div>
                <span className="text-sm text-[#64748B]">Limited early access</span>
              </motion.div>
            </div>
            
            {/* Stats - Enterprise Grade with Visual Impact */}
            <div className="flex gap-0">
              {[
                { value: '3', unit: 'hrs', label: 'Avg. turnaround', sublabel: 'Industry avg: 72hrs' },
                { value: '80', unit: '%', label: 'Cost reduction', sublabel: 'vs traditional firms' },
                { value: '90', unit: '%', label: 'TAT reduction', sublabel: 'Faster delivery' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  className={`relative flex-1 px-6 py-5 ${i !== 2 ? 'border-r border-[#E2E8F0]' : ''} ${i === 0 ? 'pl-0' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                >
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">{stat.value}</span>
                    <span className="text-xl lg:text-2xl font-bold text-[#0F172A]">{stat.unit}</span>
                  </div>
                  <p className="text-sm font-medium text-[#334155] mt-2">{stat.label}</p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">{stat.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right - Clean Trust Indicators */}
          <motion.div
            className="relative hidden lg:flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-5">
              {[
                'Licensed attorney oversight',
                'SOC 2 Type II certified',
                'Bank-grade encryption',
                'GDPR & CCPA compliant',
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#0F172A]/5 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#0F172A]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] text-[#475569]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.a
          href="#approach"
          className="flex flex-col items-center gap-2 text-[#64748B] hover:text-[#0F172A] transition-colors"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium tracking-wide">Scroll</span>
          <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
        </motion.a>
      </motion.div>
    </section>
  );
};
