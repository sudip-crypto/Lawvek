import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section 
      id="cta"
      className="bg-[#F9F9F9] py-24 md:py-32 border-t border-[#E2E8F0]"
      data-testid="cta-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-tight text-[#1A1A1A] mb-6">
            Get your contract reviewed the right way.
          </h2>
          
          <p className="text-base md:text-lg font-sans leading-relaxed text-[#475569] mb-10">
            Start with a single contract. See the difference intelligent review makes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              className="inline-flex items-center justify-center bg-[#1E293B] text-white px-10 py-4 rounded-[2px] hover:bg-[#0F172A] transition-colors duration-300 font-medium text-sm tracking-wide btn-press group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="cta-upload-button"
            >
              Upload a contract
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </motion.button>
            
            <motion.button
              className="inline-flex items-center justify-center bg-transparent border border-[#E2E8F0] text-[#1E293B] px-10 py-4 rounded-[2px] hover:bg-[#F1F5F9] transition-colors duration-300 font-medium text-sm tracking-wide"
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
