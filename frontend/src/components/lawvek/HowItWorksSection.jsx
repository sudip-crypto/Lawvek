import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    { 
      number: '01',
      title: 'Upload', 
      description: 'Securely submit your contract through our encrypted portal',
      detail: 'Drag & drop or browse',
    },
    { 
      number: '02',
      title: 'AI Analysis', 
      description: 'Our AI instantly analyzes complexity, clauses, and risk',
      detail: 'Powered by multiple LLMs',
    },
    { 
      number: '03',
      title: 'Expert Review', 
      description: 'Human oversight applied based on contract complexity',
      detail: 'Licensed attorneys',
    },
    { 
      number: '04',
      title: 'Delivery', 
      description: 'Receive clear redlines and actionable recommendations',
      detail: 'Word format ready',
    },
  ];

  return (
    <section 
      id="how-it-works"
      className="bg-[#0F172A] py-24 md:py-32"
      data-testid="how-it-works-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-emerald-400 tracking-wide uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">
            From upload to insight in hours
          </h2>
          <p className="text-base text-[#94A3B8]">
            A streamlined process designed for speed without sacrificing quality
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                data-testid={`workflow-step-${index}`}
              >
                {/* Card */}
                <div className="relative bg-[#1E293B]/50 border border-[#334155] rounded-2xl p-6 h-full hover:border-emerald-500/50 hover:bg-[#1E293B] transition-all duration-300">
                  {/* Number badge */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-[#0F172A] border-2 border-emerald-500 flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                    <span className="text-sm font-bold text-emerald-400 group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8] mb-4">
                    {step.description}
                  </p>
                  
                  {/* Detail tag */}
                  <span className="inline-flex items-center text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    {step.detail}
                  </span>
                </div>

                {/* Arrow connector (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-3 z-20 w-6 h-6 rounded-full bg-[#0F172A] border-2 border-emerald-500 items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-emerald-400" strokeWidth={2.5} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div 
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <p className="text-3xl font-semibold text-white">2-4 hrs</p>
            <p className="text-sm text-[#64748B] mt-1">Average turnaround</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-white">99.2%</p>
            <p className="text-sm text-[#64748B] mt-1">Accuracy rate</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-white">24/7</p>
            <p className="text-sm text-[#64748B] mt-1">Platform availability</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
