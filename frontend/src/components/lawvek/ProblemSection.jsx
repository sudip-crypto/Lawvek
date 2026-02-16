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
      className="relative py-24 md:py-32 bg-[#0A0F1A]"
      data-testid="problem-section"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0A0F1A] to-[#0A0F1A]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-sm font-medium text-red-400 tracking-wide uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">
            Legal review is broken.
          </h2>
          <p className="text-base text-slate-400">
            The traditional model treats every contract the same — regardless of complexity, risk, or urgency.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              data-testid={`problem-item-${index}`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-6">
                <problem.icon className="h-5 w-5 text-slate-400" strokeWidth={1.5} />
              </div>
              <p className="text-3xl font-semibold text-white mb-2">{problem.stat}</p>
              <h3 className="text-lg font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-400">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
