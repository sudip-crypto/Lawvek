import { motion } from 'framer-motion';

export const ProblemSection = () => {
  const problems = [
    'Companies overpay for routine contracts that don\'t require deep legal expertise.',
    'Skilled lawyers spend valuable time on low-risk documents that could be handled more efficiently.',
    'Extended turnaround times slow down business decisions and deal closures.',
  ];

  return (
    <section 
      className="bg-[#1E293B] text-white py-24 md:py-32"
      data-testid="problem-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Image */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80"
                alt="Stacks of legal documents representing contract complexity"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[#1E293B]/30" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 mb-6 block">
                The Problem
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight leading-tight text-white mb-8">
                Not every contract deserves the same attention.
              </h2>
              
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    data-testid={`problem-item-${index}`}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-xs font-mono text-white/60">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg font-sans leading-relaxed text-white/80">
                      {problem}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
