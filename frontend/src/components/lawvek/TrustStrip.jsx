import { motion } from 'framer-motion';
import { Sparkles, Scale, Shield, Lock } from 'lucide-react';

export const TrustStrip = () => {
  const trustItems = [
    { icon: Sparkles, text: 'AI-assisted review' },
    { icon: Scale, text: 'Licensed lawyer verification' },
    { icon: Shield, text: 'Optional US attorney sign-off' },
    { icon: Lock, text: 'Enterprise-grade security' },
  ];

  return (
    <section 
      className="bg-white border-y border-[#E2E8F0] py-6 md:py-8"
      data-testid="trust-strip-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.text}
              className="flex items-center gap-3 text-[#475569]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              data-testid={`trust-item-${index}`}
            >
              <item.icon className="h-4 w-4 text-[#1E293B]" strokeWidth={1.5} />
              <span className="text-sm font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
