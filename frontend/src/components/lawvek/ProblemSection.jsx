import { motion } from 'framer-motion';

export const ProblemSection = () => {
  const problems = [
    {
      number: '01',
      title: 'Overpaying for routine work',
      description: 'Companies pay premium rates for contracts that don\'t require deep legal expertise.',
    },
    {
      number: '02', 
      title: 'Misallocated expertise',
      description: 'Skilled lawyers spend valuable time on low-risk documents that could be handled more efficiently.',
    },
    {
      number: '03',
      title: 'Slow turnaround times',
      description: 'Extended review cycles slow down business decisions and delay deal closures.',
    },
  ];

  return (
    <section 
      className="bg-[#0F172A] py-24 md:py-32"
      data-testid="problem-section"
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
          <p className="text-sm font-medium text-[#94A3B8] tracking-wide uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white">
            Not every contract deserves the same attention.
          </h2>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.number}
              className="relative p-8 rounded-xl border border-[#1E293B] bg-[#1E293B]/30 hover:bg-[#1E293B]/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`problem-item-${index}`}
            >
              <span className="text-xs font-mono text-[#64748B] mb-4 block">
                {problem.number}
              </span>
              <h3 className="text-lg font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#94A3B8]">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
