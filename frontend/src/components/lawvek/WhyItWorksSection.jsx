import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const WhyItWorksSection = () => {
  const reasons = [
    {
      title: 'Fair pricing',
      description: 'Complexity-based pricing ensures you only pay for the expertise your contract actually needs.',
    },
    {
      title: 'Reduced risk over time',
      description: 'Precedents and learnings from similar contracts improve accuracy and reduce future risk.',
    },
    {
      title: 'Cost efficiency',
      description: 'As your contracts become more standardized, you pay less. Simplicity is rewarded.',
    },
  ];

  return (
    <section 
      className="bg-[#FAFAFA] py-24 md:py-32 border-y border-[#E2E8F0]"
      data-testid="why-it-works-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-[#64748B] tracking-wide uppercase mb-4">
              The Model
            </p>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#0F172A] mb-6">
              Every contract needs attention. Not the same attention.
            </h2>
            <p className="text-[15px] leading-relaxed text-[#64748B]">
              Our approach acknowledges a simple truth: treating all contracts the same wastes resources and slows everyone down.
            </p>
          </motion.div>

          {/* Right */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="flex gap-4 p-6 rounded-xl bg-white border border-[#E2E8F0]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                data-testid={`reason-${index}`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0F172A] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#0F172A] mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#64748B]">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
