import { motion } from 'framer-motion';
import { FileText, Bot, User, UserCheck, CheckCircle, Paperclip } from 'lucide-react';
import { useState, useEffect } from 'react';

export const HowItWorksSection = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 6);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="how-it-works"
      className="bg-[#0F172A] py-24 md:py-32 overflow-hidden"
      data-testid="how-it-works-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-emerald-400 tracking-wide uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">
            From Slack to signed — in hours
          </h2>
          <p className="text-base text-[#94A3B8]">
            Watch how your contract flows through our intelligent review pipeline
          </p>
        </motion.div>

        {/* Main Animation Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Slack Chat Animation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Slack Window */}
            <div className="bg-[#1A1D21] rounded-xl border border-[#333] shadow-2xl overflow-hidden">
              {/* Slack Header */}
              <div className="bg-[#1A1D21] border-b border-[#333] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-white font-medium text-sm"># contracts</span>
                </div>
              </div>

              {/* Chat Area */}
              <div className="p-4 min-h-[380px] flex flex-col">
                {/* User Message */}
                <motion.div 
                  className="flex gap-3 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">JD</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-semibold text-sm">John Doe</span>
                      <span className="text-[#616061] text-xs">10:32 AM</span>
                    </div>
                    <div className="text-[#D1D2D3] text-sm leading-relaxed">
                      <span className="bg-[#1264A3] text-white px-1 rounded">@Lawvek</span> Please review this NDA
                    </div>
                    {/* File Attachment */}
                    <motion.div 
                      className="mt-2 bg-[#222529] border border-[#333] rounded-lg p-3 max-w-[280px] flex items-center gap-3"
                      animate={step === 0 ? { 
                        boxShadow: ['0 0 0 rgba(16, 185, 129, 0)', '0 0 20px rgba(16, 185, 129, 0.3)', '0 0 0 rgba(16, 185, 129, 0)']
                      } : {}}
                      transition={{ duration: 1.5, repeat: step === 0 ? Infinity : 0 }}
                    >
                      <div className="w-10 h-10 bg-[#2B579A] rounded flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">Vendor_NDA_2024.docx</p>
                        <p className="text-[#616061] text-xs">245 KB</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Lawvek Bot Response */}
                <motion.div 
                  className="flex gap-3 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-serif italic">L</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-semibold text-sm">Lawvek</span>
                      <span className="bg-emerald-500/20 text-emerald-400 text-xs px-1.5 py-0.5 rounded">APP</span>
                      <span className="text-[#616061] text-xs">10:32 AM</span>
                    </div>
                    <div className="text-[#D1D2D3] text-sm leading-relaxed">
                      Got it! Analyzing your contract now...
                    </div>
                    {/* Progress indicator */}
                    <motion.div 
                      className="mt-2 bg-[#222529] border border-[#333] rounded-lg p-3 max-w-[320px]"
                      animate={step >= 1 && step <= 3 ? { 
                        borderColor: ['#333', '#10B981', '#333']
                      } : {}}
                      transition={{ duration: 2, repeat: step >= 1 && step <= 3 ? Infinity : 0 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-emerald-400"
                          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <span className="text-[#D1D2D3] text-sm">
                          {step === 1 && "AI analyzing document..."}
                          {step === 2 && "Paralegal reviewing..."}
                          {step === 3 && "Senior attorney sign-off..."}
                          {step >= 4 && "Review complete"}
                        </span>
                      </div>
                      <div className="w-full bg-[#333] rounded-full h-1.5">
                        <motion.div 
                          className="bg-emerald-500 h-1.5 rounded-full"
                          animate={{ width: `${Math.min((step) * 25, 100)}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Final Response */}
                <motion.div 
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-serif italic">L</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white font-semibold text-sm">Lawvek</span>
                      <span className="bg-emerald-500/20 text-emerald-400 text-xs px-1.5 py-0.5 rounded">APP</span>
                      <span className="text-[#616061] text-xs">10:35 AM</span>
                    </div>
                    <div className="text-[#D1D2D3] text-sm leading-relaxed mb-2">
                      ✅ Review complete! Here's your contract with redlines:
                    </div>
                    {/* Reviewed File */}
                    <motion.div 
                      className="bg-[#222529] border border-emerald-500/30 rounded-lg p-3 max-w-[280px] flex items-center gap-3"
                      animate={step >= 4 ? { 
                        boxShadow: ['0 0 0 rgba(16, 185, 129, 0)', '0 0 15px rgba(16, 185, 129, 0.2)', '0 0 0 rgba(16, 185, 129, 0)']
                      } : {}}
                      transition={{ duration: 2, repeat: step >= 4 ? Infinity : 0 }}
                    >
                      <div className="w-10 h-10 bg-emerald-600 rounded flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">Vendor_NDA_Reviewed.docx</p>
                        <p className="text-emerald-400 text-xs">Ready for signature</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Pipeline Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              {/* Pipeline Steps */}
              {[
                { 
                  id: 1, 
                  title: 'AI Analysis', 
                  desc: 'Instant complexity scoring & clause detection',
                  icon: Bot,
                  time: '~30 sec'
                },
                { 
                  id: 2, 
                  title: 'Licensed Attorney', 
                  desc: 'Expert sign-off on high-risk clauses',
                  icon: UserCheck,
                  time: '~2 hours'
                },
                { 
                  id: 3, 
                  title: 'Delivered', 
                  desc: 'Redlined contract ready in your chat',
                  icon: CheckCircle,
                  time: 'Total: ~3 hrs'
                },
              ].map((stage, index) => (
                <motion.div
                  key={stage.id}
                  className={`relative flex items-center gap-4 p-4 rounded-xl border transition-all duration-500 ${
                    step >= stage.id 
                      ? 'bg-[#1E293B] border-emerald-500/50' 
                      : 'bg-[#1E293B]/30 border-[#334155]'
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {/* Connector Line */}
                  {index < 2 && (
                    <div className="absolute left-7 top-full w-0.5 h-4 bg-[#334155] z-0">
                      <motion.div 
                        className="w-full bg-emerald-500"
                        animate={{ height: step > stage.id ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    step >= stage.id 
                      ? 'bg-emerald-500' 
                      : 'bg-[#334155]'
                  }`}>
                    <stage.icon className={`w-5 h-5 ${step >= stage.id ? 'text-white' : 'text-[#64748B]'}`} strokeWidth={1.5} />
                    
                    {/* Active pulse */}
                    {step === stage.id && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-emerald-500"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-semibold transition-colors duration-500 ${
                        step >= stage.id ? 'text-white' : 'text-[#64748B]'
                      }`}>
                        {stage.title}
                      </h4>
                      <span className={`text-xs font-mono transition-colors duration-500 ${
                        step >= stage.id ? 'text-emerald-400' : 'text-[#475569]'
                      }`}>
                        {stage.time}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 transition-colors duration-500 ${
                      step >= stage.id ? 'text-[#94A3B8]' : 'text-[#475569]'
                    }`}>
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Stats */}
            <motion.div 
              className="mt-8 grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { value: '3hrs', label: 'Avg. time' },
                { value: '99.2%', label: 'Accuracy' },
                { value: '24/7', label: 'Availability' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 bg-[#1E293B]/50 rounded-lg border border-[#334155]">
                  <p className="text-xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs text-[#64748B] mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
