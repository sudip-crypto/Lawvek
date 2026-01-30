import { motion } from 'framer-motion';
import { Lock, ShieldCheck, Eye, Key } from 'lucide-react';

export const SecuritySection = () => {
  const features = [
    { icon: Lock, title: 'Confidential by default', description: 'Your data stays private' },
    { icon: ShieldCheck, title: 'Encrypted handling', description: 'End-to-end security' },
    { icon: Eye, title: 'No training without consent', description: 'You control your data' },
    { icon: Key, title: 'Access controls', description: 'Granular permissions' },
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
          <p className="text-sm font-medium text-[#94A3B8] tracking-wide uppercase mb-4">
            Security & Trust
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">
            Your documents are safe with us.
          </h2>
          <p className="text-[15px] text-[#94A3B8]">
            Enterprise-grade security for legal professionals handling sensitive information.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-xl border border-[#1E293B] bg-[#1E293B]/30 text-center hover:bg-[#1E293B]/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              data-testid={`security-feature-${index}`}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center">
                <feature.icon className="h-5 w-5 text-[#94A3B8]" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-[#64748B]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
