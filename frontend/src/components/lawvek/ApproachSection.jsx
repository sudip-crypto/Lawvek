import { motion } from 'framer-motion';
import { BarChart3, GitBranch, DollarSign } from 'lucide-react';

export const ApproachSection = () => {
  const steps = [
    {
      number: '1',
      icon: BarChart3,
      title: 'Intelligent Scoring',
      description: 'AI analyzes clauses, jurisdiction, and risk to assign complexity.',
      points: ['Low complexity', 'Medium risk', 'High priority'],
    },
    {
      number: '2',
      icon: GitBranch,
      title: 'Right-Sized Workflow',
      description: 'Each contract gets the appropriate level of expert review.',
      points: ['AI-only review', 'AI + Paralegal', 'Full legal team'],
    },
    {
      number: '3',
      icon: DollarSign,
      title: 'Predictable Pricing',
      description: 'Know exactly what you\'ll pay upfront. No hourly billing.',
      points: ['Fixed pricing', 'Clear timelines', 'No surprises'],
    },
  ];

  return (
    <section 
      id="approach"
      className="bg-[#FAFAFA] py-24 md:py-32"
      data-testid="approach-section"
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
            Our Solution
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#0F172A] mb-4">
            Intelligent contract review.
          </h2>
          <p className="text-base text-[#64748B]">
            We match each contract with the right level of expertise — saving you time and money.
          </p>
        </motion.div>

        {/* Steps Grid - Uniform compact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group bg-white border border-[#E2E8F0] rounded-2xl p-7 hover:shadow-lg hover:border-[#CBD5E1] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`approach-step-${index}`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold text-[#0F172A]">
                  {step.number}
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#0F172A] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <step.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#64748B] mb-6">
                {step.description}
              </p>

              {/* Points - Uniform 3 points each */}
              <div className="space-y-2.5 pt-5 border-t border-[#F1F5F9]">
                {step.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                    <span className="text-sm text-[#475569]">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
