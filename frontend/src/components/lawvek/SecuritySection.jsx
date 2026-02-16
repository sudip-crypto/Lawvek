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
      className="relative py-24 md:py-32"
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
          <p className="text-sm font-medium text-emerald-600 tracking-wide uppercase mb-4">
            Security & Compliance
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#1a1a1a] mb-4">
            Enterprise-grade security.
          </h2>
          <p className="text-base text-[#666666]">
            Built for legal teams that handle sensitive information every day.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm text-center hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              data-testid={`security-feature-${index}`}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center group-hover:bg-emerald-100 transition-all duration-300">
                <feature.icon className="h-6 w-6 text-emerald-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-[#666666]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Compliance badges */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {['GDPR Compliant', 'CCPA Ready', 'HIPAA Available'].map((badge, i) => (
            <span 
              key={badge}
              className="text-sm font-medium text-[#666666] hover:text-emerald-600 transition-colors duration-300 cursor-default"
            >
              {badge}
              {i < 2 && <span className="ml-8 text-gray-300">•</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
