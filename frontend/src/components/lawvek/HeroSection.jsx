import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, FileText, Shield, Clock, Zap, CheckCircle2, BarChart3, Users, DollarSign, Sparkles } from 'lucide-react';

export const HeroSection = ({ onOpenModal }) => {
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
            
            {/* Premium CTA */}
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
              
              {/* Subtle trust note */}
              <p className="mt-5 text-[13px] text-[#94A3B8] tracking-wide">
                No credit card required
              </p>
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
          
          {/* Right - Premium Product Card */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative max-w-[420px] ml-auto">
              {/* Main card */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-white/60 overflow-hidden">
                
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">NDA_Agreement_v2.pdf</p>
                        <p className="text-white/60 text-xs">Uploaded 2 mins ago</p>
                      </div>
                    </div>
                    <motion.div 
                      className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-medium"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Analysis Complete
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  
                  {/* Complexity Score with Progress */}
                  <div className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl border border-[#E2E8F0]/80 p-4 hover:shadow-md transition-shadow duration-300 cursor-default">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-[#64748B] uppercase tracking-wide">Complexity Score</p>
                          <p className="text-lg font-bold text-[#0F172A]">Medium</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">Level 2/3</span>
                    </div>
                    {/* Progress bar */}
                    <div className="flex gap-1.5">
                      <motion.div 
                        className="h-1.5 flex-1 rounded-full bg-emerald-500"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                      <motion.div 
                        className="h-1.5 flex-1 rounded-full bg-amber-500"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                      />
                      <div className="h-1.5 flex-1 rounded-full bg-[#E2E8F0]" />
                    </div>
                  </div>

                  {/* Review Team */}
                  <div className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl border border-[#E2E8F0]/80 p-4 hover:shadow-md transition-shadow duration-300 cursor-default">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                        <Users className="w-4 h-4 text-violet-600" />
                      </div>
                      <p className="text-xs font-medium text-[#64748B] uppercase tracking-wide">Recommended Review Team</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 bg-[#0F172A] text-white text-xs font-medium px-3 py-1.5 rounded-full">
                        <Sparkles className="w-3 h-3" />
                        AI Analysis
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-violet-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                        <Users className="w-3 h-3" />
                        Paralegal
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                        <Shield className="w-3 h-3" />
                        Licensed Lawyer
                      </span>
                    </div>
                  </div>

                  {/* Pricing & Turnaround Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl border border-[#E2E8F0]/80 p-4 hover:shadow-md transition-shadow duration-300 cursor-default">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <p className="text-xs font-medium text-[#64748B] uppercase tracking-wide">Pricing</p>
                      </div>
                      <p className="text-lg font-bold text-[#0F172A]">$249</p>
                      <p className="text-xs text-emerald-600 font-medium">Fixed • No surprises</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl border border-[#E2E8F0]/80 p-4 hover:shadow-md transition-shadow duration-300 cursor-default">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                        </div>
                        <p className="text-xs font-medium text-[#64748B] uppercase tracking-wide">Turnaround</p>
                      </div>
                      <p className="text-lg font-bold text-[#0F172A]">~4 hours</p>
                      <p className="text-xs text-blue-600 font-medium">Express delivery</p>
                    </div>
                  </div>

                </div>

                {/* Footer CTA */}
                <div className="px-6 pb-6">
                  <motion.button 
                    className="w-full bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Zap className="w-4 h-4" />
                    Start Review Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              
              {/* Floating Verified Badge */}
              <motion.div 
                className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-lg border border-[#E2E8F0] px-4 py-2.5"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#0F172A]">Verified</span>
                    <p className="text-[10px] text-[#64748B]">SOC 2 Compliant</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Activity Badge */}
              <motion.div 
                className="absolute -bottom-2 -left-3 bg-white rounded-2xl shadow-lg border border-[#E2E8F0] px-4 py-2.5"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">JD</div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-violet-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">SK</div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">+3</div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#0F172A]">12 reviews</span>
                    <p className="text-[10px] text-[#64748B]">completed today</p>
                  </div>
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
