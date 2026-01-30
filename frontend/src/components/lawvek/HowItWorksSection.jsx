import { motion } from 'framer-motion';

export const HowItWorksSection = () => {
  const steps = [
    { 
      number: '01',
      title: 'Upload', 
      description: 'Submit your contract securely through our encrypted portal',
    },
    { 
      number: '02',
      title: 'AI Analysis', 
      description: 'Our AI instantly analyzes complexity, clauses, and risk factors',
    },
    { 
      number: '03',
      title: 'Expert Review', 
      description: 'Human verification applied based on contract complexity',
    },
    { 
      number: '04',
      title: 'Attorney Sign-off', 
      description: 'Optional US-licensed attorney certification for high-stakes deals',
    },
    { 
      number: '05',
      title: 'Delivery', 
      description: 'Receive clear redlines and recommendations in Word format',
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
          <p className="text-sm font-medium text-[#94A3B8] tracking-wide uppercase mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">
            How it works
          </h2>
          <p className="text-base text-[#94A3B8]">
            A streamlined process designed for clarity and speed
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connecting line (desktop) */}
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
                <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-[#1E293B] border border-[#334155] flex items-center justify-center mb-6 group-hover:border-[#475569] group-hover:bg-[#1E293B]/80 transition-all duration-300">
                  <span className="text-lg font-semibold text-white">{step.number}</span>
                </div>
                
                {/* Arrow connector (mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-16 w-px h-8 bg-gradient-to-b from-[#334155] to-transparent" />
                )}
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8] max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom highlight */}
        <motion.div 
          className="mt-16 pt-12 border-t border-[#1E293B] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-[#64748B]">
            You always know what you're paying for and why.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
