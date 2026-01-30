import { motion } from 'framer-motion';
import { BarChart3, GitBranch, Clock } from 'lucide-react';

export const ApproachSection = () => {
  const steps = [
    {
      number: '01',
      icon: BarChart3,
      title: 'Complexity Scoring',
      description: 'AI analyzes structure, clauses, jurisdiction, and deviations. Assigns a clear complexity level.',
      tags: ['Low', 'Medium', 'High', 'Critical'],
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
      title: 'Predictable Pricing & Speed',
      description: 'Know what you\'re paying before you start. No surprises.',
      items: [
        'Fixed pricing upfront',
        'Clear turnaround times',
        'No hourly billing',
      ],
    },
  ];

  return (
    <section 
      id="approach"
      className="bg-[#F9F9F9] py-24 md:py-32"
      data-testid="approach-section"
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
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-tight text-[#1A1A1A]">
            We review contracts intelligently.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`approach-step-${index}`}
            >
              {/* Card */}
              <div className="bg-white border border-[#E2E8F0] p-8 rounded-[4px] hover:border-[#94A3B8] transition-colors duration-300 h-full">
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#475569]/50">
                    {step.number}
                  </span>
                  <step.icon className="h-5 w-5 text-[#1E293B]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-sans font-medium tracking-tight text-[#1A1A1A] mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base font-sans leading-relaxed text-[#475569] mb-6">
                  {step.description}
                </p>

                {/* Tags or Items */}
                {step.tags && (
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1.5 bg-[#F1F5F9] text-[#475569] rounded-[2px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {step.items && (
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#475569]">
                        <span className="w-1 h-1 rounded-full bg-[#1E293B] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-8 lg:w-12 h-px bg-[#E2E8F0]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
