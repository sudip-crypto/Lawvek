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
      title: 'Lower cost for routine documents',
      description: 'Pay only for the expertise each contract actually requires.',
    },
    {
      icon: ShieldCheck,
      title: 'Expert-backed review',
      description: 'AI analysis verified by qualified legal professionals.',
    },
    {
      icon: UserCog,
      title: 'Attorney verification when needed',
      description: 'US-licensed attorney sign-off available for high-stakes documents.',
    },
    {
      icon: FileText,
      title: 'Clear redlines in Word format',
      description: 'Receive actionable feedback you can implement immediately.',
    },
    {
      icon: ClipboardList,
      title: 'Audit trail and accountability',
      description: 'Full documentation of every review step and decision.',
    },
  ];

  return (
    <section 
      className="bg-[#F9F9F9] py-24 md:py-32"
      data-testid="benefits-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#475569]/70 mb-6 block">
            Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-tight text-[#1A1A1A]">
            What you get
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white border border-[#E2E8F0] p-8 rounded-[4px] hover:border-[#94A3B8] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              data-testid={`benefit-card-${index}`}
            >
              <benefit.icon className="h-6 w-6 text-[#1E293B] mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-sans font-medium text-[#1A1A1A] mb-3">
                {benefit.title}
              </h3>
              <p className="text-base font-sans leading-relaxed text-[#475569]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
