import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTASection = ({ onOpenModal }) => {
  return (
    <section
      id="cta"
      className="relative py-24 md:py-32"
      data-testid="cta-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6 mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Get Started</span>
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-white mb-4">
              Ready to transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">your workflow?</span>
            </h2>
            <p className="text-base md:text-lg text-white/60 mb-8 leading-relaxed max-w-2xl mx-auto">
              Join the waitlist and be first to experience the future of attorney-led contract review.
            </p>

            {/* CTA Button */}
            <motion.button
              onClick={onOpenModal}
              className="group relative inline-flex items-center gap-3 bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-semibold text-base overflow-hidden transition-all duration-500"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.98 }}
              data-testid="cta-upload-button"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#1a1a1a]/5 to-transparent" />
              <span className="relative z-10">Talk to Us</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={2} />
            </motion.button>

            <p className="mt-8 text-xs text-white/40">
              Limited to first 50 legal teams
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
