import { motion } from 'framer-motion';
import { BarChart3, GitBranch, Clock } from 'lucide-react';

export const ApproachSection = () => {
  const steps = [
    {
      number: '01',
      icon: BarChart3,
      title: 'Complexity Scoring',
      description: 'AI analyzes structure, clauses, jurisdiction, and deviations to assign a clear complexity level.',
      highlight: ['Low', 'Medium', 'High', 'Critical'],
    },
    {
      number: '02',
      icon: GitBranch,
      title: 'Right-Sized Workflow',
      description: 'Each contract gets the attention it deserves — no more, no less.',
      items: [
        'AI-only for simple contracts',
        'AI + paralegal for standard risk',
        'Lawyer verification for high-risk',
        'US attorney sign-off where required',
      ],
    },
    {
      number: '03',
      icon: Clock,
      title: 'Predictable Pricing',
      description: 'Know what you\'re paying before you start. No surprises, no hourly billing.',
      items: [
        'Fixed pricing upfront',
        'Clear turnaround times',
        'Transparent process',
      ],
    },
  ];

  return (
    <section 
      id="approach"
      className="bg-white py-24 md:py-32"
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
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#0F172A]">
            We review contracts intelligently.
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group relative bg-[#FAFAFA] border border-[#E2E8F0] rounded-xl p-8 hover:border-[#CBD5E1] hover:shadow-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`approach-step-${index}`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-[#94A3B8]">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center group-hover:border-[#CBD5E1] transition-colors">
                  <step.icon className="h-5 w-5 text-[#475569]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-relaxed text-[#64748B] mb-6">
                {step.description}
              </p>

              {/* Highlights or Items */}
              {step.highlight && (
                <div className="flex flex-wrap gap-2">
                  {step.highlight.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 bg-white border border-[#E2E8F0] text-[#475569] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {step.items && (
                <ul className="space-y-2.5">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-[#64748B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
