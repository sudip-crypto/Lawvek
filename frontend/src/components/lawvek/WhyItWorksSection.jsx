import { motion } from 'framer-motion';

export const WhyItWorksSection = () => {
  const reasons = [
    {
      title: 'Fair pricing',
      description: 'Complexity-based pricing ensures you only pay for the expertise your contract actually needs.',
    },
    {
      title: 'Reduced risk over time',
      description: 'Precedents and learnings from similar contracts reduce risk and improve accuracy.',
    },
    {
      title: 'Cost efficiency',
      description: 'As your contracts become more standardized, you pay less. Simplicity should be rewarded.',
    },
  ];

  return (
    <section 
      className="bg-white border-y border-[#E2E8F0] py-24 md:py-32"
      data-testid="why-it-works-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#475569]/70 mb-6 block">
                The Model
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-tight text-[#1A1A1A] mb-8">
                Every contract needs attention. Not the same attention.
              </h2>
              
              <p className="text-base md:text-lg font-sans leading-relaxed text-[#475569]">
                Our approach acknowledges a simple truth: treating all contracts the same wastes resources and slows everyone down. Smart allocation benefits everyone.
              </p>
            </motion.div>
          </div>

          {/* Right - Reasons */}
          <div className="lg:col-span-6">
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  className="border-l-2 border-[#E2E8F0] pl-6 hover:border-[#1E293B] transition-colors duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  data-testid={`reason-${index}`}
                >
                  <h3 className="text-lg font-sans font-medium text-[#1A1A1A] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-base font-sans leading-relaxed text-[#475569]">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
