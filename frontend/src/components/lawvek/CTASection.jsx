import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTASection = ({ onOpenModal }) => {
  return (
    <section 
      id="cta"
      className="bg-[#0A0F1A] py-24 md:py-32"
      data-testid="cta-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-12 md:p-16 text-center border border-[#334155]"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Animated background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <motion.div 
              className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"
              animate={{ 
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"
              animate={{ 
                x: [0, -30, 0],
                y: [0, 20, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.p 
              className="text-sm font-medium text-amber-400 tracking-wide uppercase mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get Started
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ready to transform your contract workflow?
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-white/60 mb-10"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Join the waitlist and be first to experience AI-powered legal services.
            </motion.p>
            
            {/* Premium CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.button
                onClick={onOpenModal}
                className="group relative inline-flex items-center gap-3 bg-white text-[#0F172A] px-8 py-4 rounded-full font-semibold text-base overflow-hidden transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 0 60px rgba(255,255,255,0.25)',
                }}
                whileTap={{ scale: 0.98 }}
                data-testid="cta-upload-button"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#0F172A]/5 to-transparent" />
                
                <span className="relative z-10">Get Priority Access</span>
                <motion.span
                  className="relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </motion.span>
              </motion.button>
            </motion.div>

            <motion.p 
              className="mt-8 text-xs text-white/40"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Limited to first 50 legal teams
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
