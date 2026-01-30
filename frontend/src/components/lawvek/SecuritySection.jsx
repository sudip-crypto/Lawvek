import { motion } from 'framer-motion';
import { Lock, ShieldCheck, Eye, Key } from 'lucide-react';

export const SecuritySection = () => {
  const securityFeatures = [
    { icon: Lock, text: 'Confidential by default' },
    { icon: ShieldCheck, text: 'Encrypted document handling' },
    { icon: Eye, text: 'No training on customer data without consent' },
    { icon: Key, text: 'Clear access controls' },
  ];

  return (
    <section 
      id="security"
      className="bg-[#F1F5F9] py-24 md:py-32"
      data-testid="security-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#475569]/70 mb-6 block">
            Security & Trust
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-tight text-[#1A1A1A] mb-8">
            Your documents are safe with us.
          </h2>
          
          <p className="text-base md:text-lg font-sans leading-relaxed text-[#475569] mb-12">
            Enterprise-grade security designed for legal professionals who handle sensitive information every day.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.text}
              className="bg-white border border-[#E2E8F0] p-6 rounded-[4px] text-center hover:border-[#94A3B8] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              data-testid={`security-feature-${index}`}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#F9F9F9] flex items-center justify-center">
                <feature.icon className="h-5 w-5 text-[#1E293B]" strokeWidth={1.5} />
              </div>
              <p className="text-sm font-medium text-[#1A1A1A]">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
