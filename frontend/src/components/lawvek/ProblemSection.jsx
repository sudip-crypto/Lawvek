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

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      className="bg-[#0F172A] py-24 md:py-32"
      data-testid="problem-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header with slide-up animation */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p 
            className="text-sm font-medium text-emerald-400 tracking-wide uppercase mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Problem
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">
            Legal review is broken.
          </h2>
          <p className="text-base text-[#94A3B8]">
            The traditional model treats every contract the same — regardless of complexity, risk, or urgency.
          </p>
        </motion.div>

        {/* Problems Grid with staggered reveal */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="relative p-8 rounded-2xl border border-[#1E293B] bg-gradient-to-b from-[#1E293B]/50 to-transparent hover:border-[#334155] transition-all duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: 'rgba(239, 68, 68, 0.3)',
                transition: { duration: 0.2 } 
              }}
              data-testid={`problem-item-${index}`}
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <problem.icon className="h-5 w-5 text-[#94A3B8]" strokeWidth={1.5} />
              </motion.div>
              <motion.p 
                className="text-3xl font-semibold text-white mb-2"
                variants={statVariants}
              >
                {problem.stat}
              </motion.p>
              <h3 className="text-lg font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#94A3B8]">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
