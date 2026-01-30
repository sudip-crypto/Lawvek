import { motion } from 'framer-motion';
import { Upload, Sparkles, UserCheck, Stamp, FileCheck } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    { icon: Upload, label: 'Upload', description: 'Submit your contract securely' },
    { icon: Sparkles, label: 'AI Review', description: 'Instant analysis and scoring' },
    { icon: UserCheck, label: 'Verification', description: 'Expert review as needed' },
    { icon: Stamp, label: 'Sign-off', description: 'Attorney certification' },
    { icon: FileCheck, label: 'Delivered', description: 'Clear redlines in Word' },
  ];

  return (
    <section 
      id="how-it-works"
      className="bg-[#FAFAFA] py-24 md:py-32 border-y border-[#E2E8F0]"
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
          <p className="text-sm font-medium text-[#64748B] tracking-wide uppercase mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#0F172A] mb-4">
            How it works
          </h2>
          <p className="text-[15px] text-[#64748B]">
            You always know what you're paying for and why.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-[#E2E8F0]" />
          
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
                {/* Icon */}
                <div className="relative z-10 mx-auto w-16 h-16 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-5 shadow-sm">
                  <step.icon className="h-6 w-6 text-[#475569]" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-base font-semibold text-[#0F172A] mb-1">
                  {step.label}
                </h3>
                <p className="text-sm text-[#64748B]">
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
