import { motion } from 'framer-motion';
import { BarChart3, GitBranch, DollarSign, ArrowRight } from 'lucide-react';

export const ApproachSection = () => {
  const steps = [
    {
      number: '01',
      icon: BarChart3,
      title: 'Intelligent Scoring',
      description: 'Our AI analyzes structure, clauses, jurisdiction, and risk factors to assign a complexity score.',
      metric: '4',
      metricLabel: 'Complexity levels',
      pointers: ['Low', 'Medium', 'High', 'Critical'],
    },
    {
      number: '02',
      icon: GitBranch,
      title: 'Right-Sized Workflow',
      description: 'Each contract is routed to the appropriate level of review based on its actual needs.',
      metric: '3',
      metricLabel: 'Review tiers',
      pointers: ['AI-only review', 'AI + Paralegal', 'Full legal review'],
    },
    {
      number: '03',
      icon: DollarSign,
      title: 'Predictable Pricing',
      description: 'Know exactly what you\'ll pay before you start. No surprises, no hourly billing.',
      metric: '0',
      metricLabel: 'Hidden fees',
      pointers: ['Fixed pricing', 'Clear timelines', 'Full transparency'],
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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group relative bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:border-[#CBD5E1] hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`approach-step-${index}`}
            >
              {/* Header with number and icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-semibold text-[#94A3B8] tracking-wider">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#0F172A] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <step.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-relaxed text-[#64748B] mb-8">
                {step.description}
              </p>

              {/* Key Metric */}
              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#E2E8F0]">
                <span className="text-4xl font-bold text-[#0F172A]">{step.metric}</span>
                <span className="text-sm font-medium text-[#64748B]">{step.metricLabel}</span>
              </div>

              {/* Uniform Pointers */}
              <ul className="space-y-3">
                {step.pointers.map((pointer, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#475569]">
                    <span className="w-5 h-5 rounded-md bg-[#F1F5F9] flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3 h-3 text-[#0F172A]" />
                    </span>
                    {pointer}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
