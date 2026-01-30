import { motion } from 'framer-motion';
import { Zap, DollarSign, ShieldCheck, UserCog, FileText, ClipboardList } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Faster turnaround',
      description: 'Hours, not days. Get contracts reviewed on your timeline.',
    },
    {
      icon: DollarSign,
      title: 'Lower costs',
      description: 'Pay only for the expertise each contract actually requires.',
    },
    {
      icon: ShieldCheck,
      title: 'Expert-backed review',
      description: 'AI analysis verified by qualified legal professionals.',
    },
    {
      icon: UserCog,
      title: 'Attorney verification',
      description: 'US-licensed attorney sign-off for high-stakes documents.',
    },
    {
      icon: FileText,
      title: 'Clear redlines',
      description: 'Receive actionable feedback in Word format.',
    },
    {
      icon: ClipboardList,
      title: 'Full audit trail',
      description: 'Documentation of every review step and decision.',
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
          <p className="text-sm font-medium text-[#64748B] tracking-wide uppercase mb-4">
            Benefits
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#0F172A]">
            What you get
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group p-6 rounded-xl border border-[#E2E8F0] bg-[#FAFAFA] hover:border-[#CBD5E1] hover:shadow-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              data-testid={`benefit-card-${index}`}
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center mb-4 group-hover:border-[#CBD5E1] transition-colors">
                <benefit.icon className="h-5 w-5 text-[#475569]" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-[#0F172A] mb-2">
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
