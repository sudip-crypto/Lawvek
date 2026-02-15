import { motion } from 'framer-motion';
import { BarChart3, GitBranch, DollarSign } from 'lucide-react';

export const ApproachSection = () => {
  const steps = [
    {
      number: '01',
      icon: BarChart3,
      title: 'Intelligent Scoring',
      description: 'AI analyzes clauses, jurisdiction, and risk to assign complexity.',
      points: ['Low complexity', 'Medium risk', 'High priority'],
    },
    {
      number: '02',
      icon: GitBranch,
      title: 'Right-Sized Workflow',
      description: 'Each contract gets the appropriate level of expert review.',
      points: ['AI-only review', 'AI + Paralegal', 'Full legal team'],
    },
    {
      number: '03',
      icon: DollarSign,
      title: 'Predictable Pricing',
      description: 'Know exactly what you\'ll pay upfront. No hourly billing surprises.',
      points: ['Fixed pricing', 'Clear timelines', 'No surprises'],
    },
  ];

  return (
    <section 
      id="approach"
      className="bg-[#0A0F1A] py-24 md:py-32"
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
          <p className="text-sm font-medium text-amber-400 tracking-wide uppercase mb-4">
            Our Solution
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">
            Intelligent contract review.
          </h2>
          <p className="text-base text-white/60">
            We match each contract with the right level of expertise — saving you time and money.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group bg-[#1E293B]/50 border border-[#334155] rounded-2xl p-7 hover:border-[#475569] hover:bg-[#1E293B] transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              data-testid={`approach-step-${index}`}
            >
              {/* Top Section - Fixed Height for alignment */}
              <div className="h-[160px] flex flex-col">
                {/* Header Row - Number + Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-white/40 tracking-widest">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <step.icon className="h-5 w-5 text-amber-400" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </div>

              {/* Divider - Always at same position */}
              <div className="border-t border-[#334155] my-5" />

              {/* Points - Bottom section */}
              <div className="space-y-3">
                {step.points.map((point, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <span className="text-sm text-white/50">{point}</span>
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
