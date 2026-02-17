import { motion } from 'framer-motion';
import { BarChart3, GitBranch, DollarSign } from 'lucide-react';

export const ApproachSection = () => {
  const steps = [
    {
      number: '01',
      icon: BarChart3,
      title: 'Intelligent Scoring',
      description: 'AI analyzes clauses, jurisdiction, and risk in seconds. Every contract is graded for complexity before review begins.',
    },
    {
      number: '02',
      icon: GitBranch,
      title: 'Right-Sized Review',
      description: 'Each contract is matched to the exact level of legal expertise required. AI, paralegal, or full legal team — nothing more, nothing less.',
    },
    {
      number: '03',
      icon: DollarSign,
      title: 'Predictable Pricing',
      description: 'Know your cost and turnaround before we start. Fixed pricing. Clear timelines. No hourly billing.',
    },
  ];

  return (
    <section 
      id="approach"
      className="relative py-24 md:py-32 bg-gradient-to-b from-white via-[#FAFAFA] to-[#F5F5F5]"
      data-testid="approach-section"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-emerald-600 tracking-wide uppercase mb-4">
            Our Solution
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#1a1a1a] mb-4">
            Intelligent contract review.
          </h2>
          <p className="text-base text-[#666666]">
            We match each contract with the right level of expertise — saving you time and money.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group bg-white border border-gray-200 rounded-2xl p-7 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              data-testid={`approach-step-${index}`}
            >
              {/* Header Row - Number + Title + Icon */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-sm font-medium text-emerald-500 tracking-widest flex-shrink-0">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold text-[#1a1a1a] flex-1 truncate">
                  {step.title}
                </h3>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-100 transition-all duration-300 flex-shrink-0">
                  <step.icon className="h-4 w-4 text-emerald-600" strokeWidth={1.5} />
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#666666]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
