import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server } from 'lucide-react';

export const SecuritySection = () => {
  const features = [
    { icon: Shield, title: 'SOC 2 Type II', description: 'Certified compliance' },
    { icon: Lock, title: 'AES-256 Encryption', description: 'Data at rest & transit' },
    { icon: Eye, title: 'Zero Data Training', description: 'Your data stays yours' },
    { icon: Server, title: 'US Data Centers', description: 'Enterprise infrastructure' },
  ];

  return (
    <section 
      id="security"
      className="bg-[#0F172A] py-24 md:py-32"
      data-testid="security-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-emerald-400 tracking-wide uppercase mb-4">
            Security & Compliance
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">
            Enterprise-grade security.
          </h2>
          <p className="text-base text-[#94A3B8]">
            Built for legal teams that handle sensitive information every day.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-2xl border border-[#1E293B] bg-gradient-to-b from-[#1E293B]/50 to-transparent text-center hover:border-[#334155] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              data-testid={`security-feature-${index}`}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-emerald-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-[#64748B]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Compliance badges */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="text-sm font-medium text-[#64748B]">GDPR Compliant</span>
          <span className="text-[#334155]">•</span>
          <span className="text-sm font-medium text-[#64748B]">CCPA Ready</span>
          <span className="text-[#334155]">•</span>
          <span className="text-sm font-medium text-[#64748B]">HIPAA Available</span>
        </motion.div>
      </div>
    </section>
  );
};
