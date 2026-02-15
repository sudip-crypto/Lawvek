import { motion } from 'framer-motion';
import { Zap, TrendingDown, ShieldCheck, Users, FileText, BarChart } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: '10x Faster',
      description: 'Hours, not days. Get contracts reviewed on your timeline.',
    },
    {
      icon: TrendingDown,
      title: '60% Cost Reduction',
      description: 'Pay only for the expertise each contract actually requires.',
    },
    {
      icon: ShieldCheck,
      title: '99.2% Accuracy',
      description: 'AI precision combined with human legal expertise.',
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: '500+ licensed attorneys available for complex reviews.',
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
      className="bg-[#0F172A] py-24 md:py-32"
      data-testid="benefits-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-emerald-400 tracking-wide uppercase mb-4">
            Benefits
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">
            Why leading teams choose Lawvek
          </h2>
          <p className="text-base text-[#94A3B8]">
            Join 500+ legal teams that have transformed their contract workflow.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group p-6 rounded-2xl border border-[#1E293B] bg-gradient-to-b from-[#1E293B]/50 to-transparent hover:border-[#334155] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              data-testid={`benefit-card-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                <benefit.icon className="h-5 w-5 text-[#94A3B8] group-hover:text-emerald-400 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#94A3B8]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
