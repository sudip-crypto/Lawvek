import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      icon: DollarSign,
      stat: '$350/hr',
      title: 'Overpaying for routine work',
      description: 'Companies pay premium rates for contracts that don\'t require deep legal expertise.',
    },
    {
      icon: Clock,
      stat: '5-7 days',
      title: 'Slow turnaround times',
      description: 'Traditional review cycles delay critical business decisions and deal closures.',
    },
    {
      icon: TrendingUp,
      stat: '40%',
      title: 'Misallocated expertise',
      description: 'Senior lawyers spend nearly half their time on low-risk, routine documents.',
    },
  ];

  return (
    <section 
      className="relative py-24 md:py-32"
      data-testid="problem-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-sm font-medium text-red-500 tracking-wide uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#1a1a1a] mb-4">
            Legal review is broken.
          </h2>
          <p className="text-base text-[#666666]">
            The traditional model treats every contract the same — regardless of complexity, risk, or urgency.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="relative p-8 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              data-testid={`problem-item-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-6">
                <problem.icon className="h-5 w-5 text-[#666666]" strokeWidth={1.5} />
              </div>
              <p className="text-3xl font-semibold text-[#1a1a1a] mb-2">{problem.stat}</p>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                {problem.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#666666]">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
