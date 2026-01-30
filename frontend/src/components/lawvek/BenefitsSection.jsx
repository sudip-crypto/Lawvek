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
      className="bg-white py-24 md:py-32"
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
          <p className="text-sm font-medium text-emerald-600 tracking-wide uppercase mb-4">
            Benefits
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#0F172A] mb-4">
            Why leading teams choose Lawvek
          </h2>
          <p className="text-base text-[#64748B]">
            Join 500+ legal teams that have transformed their contract workflow.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group p-6 rounded-2xl border border-[#E2E8F0] bg-[#FAFAFA] hover:bg-white hover:border-[#CBD5E1] hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              data-testid={`benefit-card-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                <benefit.icon className="h-5 w-5 text-[#475569] group-hover:text-emerald-600 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#64748B]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
