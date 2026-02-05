import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const HeroSection = () => {
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
              <span className="text-[#475569]">without hourly billing.</span>
            </h1>
            
            <p className="text-lg font-sans leading-relaxed text-[#64748B] max-w-lg mb-10">
              AI-powered contract review with the right level of human legal oversight — fast, transparent, and cost-effective.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <motion.a
                href="#cta"
                className="inline-flex items-center justify-center bg-[#0F172A] text-white px-8 py-4 rounded-lg hover:bg-[#1E293B] transition-all duration-300 font-medium text-sm tracking-wide shadow-lg group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="hero-primary-cta"
              >
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm border border-[#E2E8F0] text-[#0F172A] px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 font-medium text-sm tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="hero-secondary-cta"
              >
                Watch demo
              </motion.a>
            </div>
            
            {/* Stats */}
            <div className="flex gap-10 lg:gap-12">
              {[
                { value: '3hrs', label: 'Avg. turnaround' },
                { value: '80%', label: 'Cost reduction' },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <p className="text-2xl font-semibold text-[#0F172A]">{stat.value}</p>
                  <p className="text-sm text-[#64748B] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right - Product Card */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-square max-w-md ml-auto">
              {/* Main card */}
              <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-white/50 p-8">
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-sm font-medium text-[#0F172A]">Contract Analysis Complete</span>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                      <p className="text-xs text-[#64748B] mb-1">Complexity Score</p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-[#0F172A]">Medium</p>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          <div className="w-2 h-2 rounded-full bg-[#E2E8F0]" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                      <p className="text-xs text-[#64748B] mb-1">Recommended Review</p>
                      <p className="text-lg font-semibold text-[#0F172A]">AI + Paralegal + Licensed Lawyers</p>
                    </div>
                    <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                      <p className="text-xs text-[#64748B] mb-1">Pricing</p>
                      <p className="text-lg font-semibold text-[#0F172A]">Fixed Price</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#64748B]">Turnaround</span>
                      <span className="text-sm font-semibold text-emerald-600">~4 hours</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-[#E2E8F0] px-4 py-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#0F172A]">Verified</span>
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
