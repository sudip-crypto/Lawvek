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
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-sm font-medium text-emerald-400 tracking-wide uppercase mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-white mb-6">
              Ready to transform your contract workflow?
            </h2>
            <p className="text-base md:text-lg text-[#94A3B8] mb-10">
              Start your free trial today. No credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                className="inline-flex items-center justify-center bg-white text-[#0F172A] px-8 py-4 rounded-xl hover:bg-[#F8FAFC] transition-colors duration-200 font-semibold text-sm group shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="cta-upload-button"
              >
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </motion.button>
              
              <motion.button
                className="inline-flex items-center justify-center bg-transparent border border-[#334155] text-white px-8 py-4 rounded-xl hover:bg-[#1E293B] hover:border-[#475569] transition-all duration-200 font-medium text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="cta-talk-button"
              >
                Schedule demo
              </motion.button>
            </div>

            <p className="mt-8 text-xs text-[#64748B]">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
