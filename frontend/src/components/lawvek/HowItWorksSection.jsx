import { motion } from 'framer-motion';
import { Upload, Sparkles, UserCheck, Stamp, FileCheck } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    { icon: Upload, label: 'Upload contract', description: 'Submit your document securely' },
    { icon: Sparkles, label: 'AI review', description: 'Instant analysis and scoring' },
    { icon: UserCheck, label: 'Human verification', description: 'Expert review as needed' },
    { icon: Stamp, label: 'Attorney sign-off', description: 'Optional legal certification' },
    { icon: FileCheck, label: 'Delivered with redlines', description: 'Clear markup in Word format' },
  ];

  return (
    <section 
      id="how-it-works"
      className="bg-white border-y border-[#E2E8F0] py-24 md:py-32"
      data-testid="how-it-works-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#475569]/70 mb-6 block">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-tight text-[#1A1A1A] mb-6">
            How it works
          </h2>
          <p className="text-base md:text-lg font-sans leading-relaxed text-[#475569]">
            You always know what you're paying for and why.
          </p>
        </motion.div>

        {/* Flow */}
        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-[#E2E8F0]" />
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                data-testid={`workflow-step-${index}`}
              >
                {/* Icon Circle */}
                <div className="relative z-10 mx-auto w-24 h-24 rounded-full bg-[#F9F9F9] border border-[#E2E8F0] flex items-center justify-center mb-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <step.icon className="h-8 w-8 text-[#1E293B]" strokeWidth={1.5} />
                </div>
                
                {/* Arrow (mobile only) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 -translate-x-1/2 -bottom-4 w-px h-8 bg-[#E2E8F0]" />
                )}
                
                {/* Label */}
                <h3 className="text-lg font-sans font-medium text-[#1A1A1A] mb-2">
                  {step.label}
                </h3>
                <p className="text-sm font-sans text-[#475569]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
