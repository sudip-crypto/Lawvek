import { motion } from 'framer-motion';
import { Zap, TrendingDown, ShieldCheck, Users, FileText, BarChart, Sparkles } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: '10x Faster',
      description: 'Hours, not days. Get contracts reviewed on your timeline.',
    },
    {
      icon: TrendingDown,
      title: '80% Cost Reduction',
      description: 'Pay only for the expertise each contract actually requires.',
    },
    {
      icon: ShieldCheck,
      title: '99.2% Accuracy',
      description: 'AI precision combined with human legal expertise.',
    },
    {
      icon: Users,
      title: 'Built in Risk Scoring',
      description: 'Instant visibility into legal and commercial risk exposure.',
    },
    {
      icon: FileText,
      title: 'Clear Deliverables',
      description: 'Actionable redlines and recommendations in Word format.',
    },
    {
      icon: BarChart,
      title: 'Full Visibility',
      description: 'Real-time tracking and complete audit trail.',
    },
  ];

  return (
    <section
      id="benefits"
      className="relative py-24 md:py-32 bg-[#FAFAF8]"
      data-testid="benefits-section"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="max-w-4xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-600 tracking-wider uppercase">Benefits</span>
          </motion.span>

          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#1a1a1a] mb-4">
            Why leading teams <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">choose Lawvek.</span>
          </h2>
          <p className="text-base md:text-lg text-[#666666] leading-relaxed max-w-2xl">
            Join fast moving teams that have transformed their contract workflow.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group p-6 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              data-testid={`benefit-card-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors">
                <benefit.icon className="h-5 w-5 text-[#666666] group-hover:text-emerald-600 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#666666]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
