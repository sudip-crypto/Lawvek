import { motion } from 'framer-motion';

export const TrustStrip = () => {
  const logos = [
    { name: 'TechCrunch', text: 'TechCrunch' },
    { name: 'Forbes', text: 'Forbes' },
    { name: 'Bloomberg', text: 'Bloomberg' },
    { name: 'Reuters', text: 'Reuters' },
    { name: 'Law.com', text: 'Law.com' },
  ];

  return (
    <section 
      className="bg-white border-y border-[#E2E8F0] py-8"
      data-testid="trust-strip-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium text-[#94A3B8] text-center uppercase tracking-wider mb-6">
            Featured in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className="text-xl md:text-2xl font-serif text-[#CBD5E1] hover:text-[#94A3B8] transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                data-testid={`trust-item-${index}`}
              >
                {logo.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
