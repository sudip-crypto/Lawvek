import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, FileText, CheckCircle2, Users } from 'lucide-react';

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
            
            {/* Premium CTA with Queue Counter */}
            <div className="mb-16">
              <motion.button
                onClick={onOpenModal}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-[#0F172A] text-white rounded-full font-medium text-[15px] tracking-[-0.01em] shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                data-testid="hero-primary-cta"
              >
                <span>Get Priority Access</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" strokeWidth={2} />
              </motion.button>
              
              {/* Queue Counter - Premium style */}
              <motion.div 
                className="mt-5 inline-flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0F172A]/5 rounded-full border border-[#E2E8F0]">
                  <Users className="w-3.5 h-3.5 text-[#0F172A]" />
                  <span className="text-sm font-semibold text-[#0F172A]">{queueCount}</span>
                  <span className="text-sm text-[#64748B]">in queue</span>
                </div>
                <span className="text-[13px] text-[#64748B]">·</span>
                <span className="text-[13px] font-medium text-[#0F172A]">
                  {spotsRemaining > 0 ? `${spotsRemaining} spots left` : 'Waitlist full'}
                </span>
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
          
          {/* Right - Premium Minimal Card */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative max-w-[380px] ml-auto">
              {/* Main card - Clean glass effect */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-white/80 overflow-hidden">
                
                {/* Header - Minimal */}
                <div className="px-8 pt-8 pb-6 border-b border-[#F1F5F9]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-widest mb-1">Starting from</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-[#0F172A] tracking-tight">$50</span>
                        <span className="text-base font-medium text-[#64748B]">/contract</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0F172A] flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Features - Ultra minimal list */}
                <div className="px-8 py-6 space-y-4">
                  {[
                    { label: 'AI-powered analysis', value: 'Instant' },
                    { label: 'Expert legal review', value: 'Included' },
                    { label: 'Turnaround time', value: '3 hours' },
                    { label: 'Revisions', value: 'Unlimited' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-[#64748B]">{item.label}</span>
                      <span className="text-sm font-semibold text-[#0F172A]">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-8 pb-8">
                  <motion.button 
                    className="w-full bg-[#0F172A] text-white py-4 rounded-2xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#1E293B] transition-colors duration-300"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              
              {/* Floating badge - simplified */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg border border-[#F1F5F9] px-4 py-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F172A]" strokeWidth={2.5} />
                  <span className="text-xs font-semibold text-[#0F172A]">SOC 2 Verified</span>
                </div>
              </motion.div>
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
