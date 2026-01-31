import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export const ComparisonSection = () => {
  const lawvekBenefits = [
    'Fixed pricing per contract',
    'Contract reviews done in hours by experienced attorneys',
    'Work directly with your lawyer in Slack',
    'Experienced, U.S.-barred attorneys on every contract',
  ];

  const traditionalDrawbacks = [
    '$1,000-$5,000+ per contract, billed hourly with unpredictable costs',
    'Days or weeks to turn a contract',
    'Email chains, handoffs, and unclear ownership',
    'Junior-heavy staffing and slow reviews',
  ];

  return (
    <section 
      className="bg-[#0F172A] py-24 md:py-32"
      data-testid="comparison-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white">
            Lawvek vs Traditional Law Firm
          </h2>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Lawvek Card */}
          <motion.div
            className="bg-[#1E293B] rounded-2xl p-8 border border-emerald-500/30"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Lawvek
            </h3>
            <ul className="space-y-6">
              {lawvekBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-base text-[#CBD5E1] leading-relaxed">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Traditional Law Firm Card */}
          <motion.div
            className="bg-[#1E293B]/50 rounded-2xl p-8 border border-[#334155]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Traditional Law Firm
            </h3>
            <ul className="space-y-6">
              {traditionalDrawbacks.map((drawback, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-base text-[#94A3B8] leading-relaxed">
                    {drawback}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
