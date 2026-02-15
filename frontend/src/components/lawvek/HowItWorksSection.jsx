import { motion } from 'framer-motion';
import { FileText, Bot, User, UserCheck, CheckCircle, Hash, ChevronDown, Plus, Smile, AtSign, Paperclip, Send, MoreVertical } from 'lucide-react';
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
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-[#E2E8F0]">
              {/* Slack Top Bar */}
              <div className="bg-[#350D36] px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-[#522653] rounded-md px-16 py-1">
                    <span className="text-white/70 text-xs">Acme Corp</span>
                  </div>
                </div>
                <div className="w-16" />
              </div>

              {/* Slack Main Area */}
              <div className="flex h-[420px]">
                {/* Sidebar */}
                <div className="w-[220px] bg-[#3F0E40] flex flex-col">
                  {/* Workspace */}
                  <div className="p-3 border-b border-[#522653]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-lg">Acme Corp</span>
                        <ChevronDown className="w-4 h-4 text-white/70" />
                      </div>
                    </div>
                  </div>

                  {/* Channels */}
                  <div className="flex-1 overflow-hidden py-3">
                    <div className="px-3 mb-2">
                      <div className="flex items-center justify-between text-white/70 text-sm">
                        <span className="font-medium">Channels</span>
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="space-y-0.5 px-1">
                      <div className="flex items-center gap-2 px-2 py-1 text-white/70 text-sm hover:bg-[#522653] rounded cursor-pointer">
                        <Hash className="w-4 h-4" />
                        <span>general</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 text-white/70 text-sm hover:bg-[#522653] rounded cursor-pointer">
                        <Hash className="w-4 h-4" />
                        <span>random</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 bg-[#1164A3] text-white text-sm rounded cursor-pointer">
                        <Hash className="w-4 h-4" />
                        <span className="font-medium">contracts</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 text-white/70 text-sm hover:bg-[#522653] rounded cursor-pointer">
                        <Hash className="w-4 h-4" />
                        <span>legal-team</span>
                      </div>
                    </div>

                    <div className="px-3 mt-4 mb-2">
                      <div className="flex items-center justify-between text-white/70 text-sm">
                        <span className="font-medium">Apps</span>
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="space-y-0.5 px-1">
                      <div className="flex items-center gap-2 px-2 py-1 text-white/70 text-sm hover:bg-[#522653] rounded cursor-pointer">
                        <div className="w-5 h-5 rounded bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                          <span className="text-white text-xs font-serif italic">L</span>
                        </div>
                        <span>Lawvek</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-400 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-white">
                  {/* Channel Header */}
                  <div className="px-4 py-3 border-b border-[#E2E8F0] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Hash className="w-5 h-5 text-[#1D1C1D]" />
                      <span className="text-[#1D1C1D] font-bold text-lg">contracts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MoreVertical className="w-5 h-5 text-[#616061]" />
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {/* User Message */}
                    <motion.div 
                      className="flex gap-2 group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#E8912D] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">JD</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[#1D1C1D] font-bold text-[15px]">John Doe</span>
                          <span className="text-[#616061] text-xs">10:32 AM</span>
                        </div>
                        <div className="text-[#1D1C1D] text-[15px] mt-0.5">
                          <span className="bg-[#E8F5FA] text-[#1264A3] rounded px-0.5 font-medium cursor-pointer hover:bg-[#CCE4F1]">@Lawvek</span> Please review this NDA
                        </div>
                        {/* File Attachment */}
                        <motion.div 
                          className="mt-2 border border-[#DDDDDD] rounded-lg overflow-hidden max-w-[300px] hover:border-[#1264A3] transition-colors cursor-pointer"
                          animate={step === 0 ? { 
                            borderColor: ['#DDDDDD', '#10B981', '#DDDDDD']
                          } : {}}
                          transition={{ duration: 1.5, repeat: step === 0 ? Infinity : 0 }}
                        >
                          <div className="flex items-center gap-3 p-3 bg-[#F8F8F8]">
                            <div className="w-9 h-9 bg-[#185ABD] rounded flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs font-bold">W</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[#1D1C1D] text-sm font-medium truncate">Vendor_NDA_2024.docx</p>
                              <p className="text-[#616061] text-xs">Word Document</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Lawvek Bot Response */}
                    <motion.div 
                      className="flex gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-serif italic font-bold">L</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[#1D1C1D] font-bold text-[15px]">Lawvek</span>
                          <span className="bg-[#ECDEEC] text-[#4A154B] text-[10px] px-1 py-0.5 rounded font-bold">APP</span>
                          <span className="text-[#616061] text-xs">10:32 AM</span>
                        </div>
                        <div className="text-[#1D1C1D] text-[15px] mt-0.5">
                          📋 Got it! Analyzing your contract...
                        </div>
                        {/* Progress Card */}
                        <motion.div 
                          className="mt-2 border border-[#DDDDDD] rounded-lg overflow-hidden max-w-[320px]"
                          animate={step >= 1 && step <= 3 ? { 
                            borderColor: ['#DDDDDD', '#10B981', '#DDDDDD']
                          } : {}}
                          transition={{ duration: 2, repeat: step >= 1 && step <= 3 ? Infinity : 0 }}
                        >
                          <div className="p-3 bg-white border-l-4 border-l-emerald-500">
                            <div className="flex items-center gap-2 mb-2">
                              <motion.div 
                                className="w-2 h-2 rounded-full bg-emerald-500"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                              />
                              <span className="text-[#1D1C1D] text-sm font-medium">
                                {step === 1 && "AI analyzing document..."}
                                {step === 2 && "Paralegal reviewing..."}
                                {step === 3 && "Senior attorney sign-off..."}
                                {step >= 4 && "Review complete!"}
                              </span>
                            </div>
                            <div className="w-full bg-[#E8E8E8] rounded-full h-1.5">
                              <motion.div 
                                className="bg-emerald-500 h-1.5 rounded-full"
                                animate={{ width: `${Math.min((step) * 25, 100)}%` }}
                                transition={{ duration: 0.5 }}
                              />
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-[#616061]">
                              <span>Progress</span>
                              <span>{Math.min((step) * 25, 100)}%</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Final Response */}
                    <motion.div 
                      className="flex gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-serif italic font-bold">L</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[#1D1C1D] font-bold text-[15px]">Lawvek</span>
                          <span className="bg-[#ECDEEC] text-[#4A154B] text-[10px] px-1 py-0.5 rounded font-bold">APP</span>
                          <span className="text-[#616061] text-xs">10:35 AM</span>
                        </div>
                        <div className="text-[#1D1C1D] text-[15px] mt-0.5">
                          ✅ Review complete! Here's your contract with redlines:
                        </div>
                        {/* Reviewed File */}
                        <motion.div 
                          className="mt-2 border border-emerald-500 rounded-lg overflow-hidden max-w-[300px] cursor-pointer"
                          animate={step >= 4 ? { 
                            boxShadow: ['0 0 0 rgba(16, 185, 129, 0)', '0 0 10px rgba(16, 185, 129, 0.3)', '0 0 0 rgba(16, 185, 129, 0)']
                          } : {}}
                          transition={{ duration: 2, repeat: step >= 4 ? Infinity : 0 }}
                        >
                          <div className="flex items-center gap-3 p-3 bg-emerald-50">
                            <div className="w-9 h-9 bg-emerald-500 rounded flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[#1D1C1D] text-sm font-medium truncate">Vendor_NDA_Reviewed.docx</p>
                              <p className="text-emerald-600 text-xs font-medium">Ready for signature</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-[#E2E8F0]">
                    <div className="border border-[#DDDDDD] rounded-lg bg-white">
                      <div className="flex items-center gap-1 px-3 py-2 border-b border-[#E8E8E8]">
                        <button className="p-1 hover:bg-[#F8F8F8] rounded text-[#616061]">
                          <span className="font-bold text-sm">B</span>
                        </button>
                        <button className="p-1 hover:bg-[#F8F8F8] rounded text-[#616061]">
                          <span className="italic text-sm">I</span>
                        </button>
                        <button className="p-1 hover:bg-[#F8F8F8] rounded text-[#616061]">
                          <span className="line-through text-sm">S</span>
                        </button>
                        <div className="w-px h-4 bg-[#DDDDDD] mx-1" />
                        <button className="p-1 hover:bg-[#F8F8F8] rounded text-[#616061]">
                          <Paperclip className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="px-3 py-2">
                        <span className="text-[#616061] text-sm">Message #contracts</span>
                      </div>
                      <div className="flex items-center justify-between px-3 py-2 border-t border-[#E8E8E8]">
                        <div className="flex items-center gap-1">
                          <button className="p-1 hover:bg-[#F8F8F8] rounded text-[#616061]">
                            <Plus className="w-5 h-5" />
                          </button>
                          <button className="p-1 hover:bg-[#F8F8F8] rounded text-[#616061]">
                            <Smile className="w-5 h-5" />
                          </button>
                          <button className="p-1 hover:bg-[#F8F8F8] rounded text-[#616061]">
                            <AtSign className="w-5 h-5" />
                          </button>
                        </div>
                        <button className="p-1.5 bg-[#007A5A] hover:bg-[#148567] rounded text-white">
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
                  title: 'Paralegal Review', 
                  desc: 'Initial review & standard issue flagging',
                  icon: User,
                  time: '~1 hour'
                },
                { 
                  id: 3, 
                  title: 'Senior Attorney', 
                  desc: 'Expert sign-off on high-risk clauses',
                  icon: UserCheck,
                  time: '~2 hours'
                },
                { 
                  id: 4, 
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
                  {index < 3 && (
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
