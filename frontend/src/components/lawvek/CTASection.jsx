import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTASection = ({ onOpenModal }) => {
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-slate-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-sm font-medium text-[#94A3B8] tracking-wide uppercase mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-white mb-6">
              Ready to transform your contract workflow?
            </h2>
            <p className="text-base md:text-lg text-[#94A3B8] mb-10">
              Join the waitlist and be first to experience AI-powered legal services.
            </p>
            
            {/* Premium CTA Button - Uniform style */}
            <motion.button
              onClick={onOpenModal}
              className="group relative inline-flex items-center gap-3 bg-white text-[#0F172A] px-8 py-4 rounded-2xl font-semibold text-base overflow-hidden transition-all duration-500"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.98 }}
              data-testid="cta-upload-button"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#0F172A]/5 to-transparent" />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-3">
                <span>Get Priority Access</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#0F172A]/10 group-hover:bg-[#0F172A]/20 transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={2.5} />
                </span>
              </span>
            </motion.button>

            <p className="mt-8 text-xs text-[#64748B]">
              Limited to first 50 legal teams
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
