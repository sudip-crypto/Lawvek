import { motion } from 'framer-motion';

export const HowItWorksSection = () => {
  const steps = [
    { 
      number: '01',
      title: 'Upload', 
      description: 'Securely submit your contract',
    },
    { 
      number: '02',
      title: 'AI Analysis', 
      description: 'Instant complexity scoring',
    },
    { 
      number: '03',
      title: 'Expert Review', 
      description: 'Right-sized human oversight',
    },
    { 
      number: '04',
      title: 'Attorney Sign-off', 
      description: 'Optional legal certification',
    },
    { 
      number: '05',
      title: 'Delivery', 
      description: 'Clear redlines in hours',
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
          <p className="text-sm font-medium text-emerald-400 tracking-wide uppercase mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">
            Simple. Fast. Transparent.
          </h2>
          <p className="text-base text-[#94A3B8]">
            From upload to delivery in hours, not days.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#334155] to-transparent" />
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`workflow-step-${index}`}
              >
                {/* Number circle */}
                <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-[#334155] flex items-center justify-center mb-6 group-hover:border-emerald-500/50 transition-all duration-300">
                  <span className="text-lg font-semibold text-white">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-[#64748B] mb-6">
            Average turnaround: 2-4 hours for standard contracts
          </p>
        </motion.div>
      </div>
    </section>
  );
};
