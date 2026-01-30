import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section 
      id="cta"
      className="bg-white py-24 md:py-32"
      data-testid="cta-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#0F172A] mb-4">
            Get your contract reviewed the right way.
          </h2>
          <p className="text-[15px] text-[#64748B] mb-10">
            Start with a single contract. See the difference intelligent review makes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              className="inline-flex items-center justify-center bg-[#0F172A] text-white px-8 py-4 rounded-lg hover:bg-[#1E293B] transition-colors duration-200 font-medium text-sm group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="cta-upload-button"
            >
              Upload a contract
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </motion.button>
            
            <motion.button
              className="inline-flex items-center justify-center bg-white border border-[#E2E8F0] text-[#0F172A] px-8 py-4 rounded-lg hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-all duration-200 font-medium text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="cta-talk-button"
            >
              Talk to us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
