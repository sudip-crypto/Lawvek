import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const WhyItWorksSection = () => {
  const testimonial = {
    quote: "Lawvek reduced our contract review costs by 60% while improving turnaround from days to hours. It's transformed how we handle vendor agreements.",
    author: "Sarah Chen",
    role: "General Counsel",
    company: "Series B Fintech",
  };

  const stats = [
    { value: '500+', label: 'Legal teams' },
    { value: '50,000+', label: 'Contracts reviewed' },
    { value: '$2.4M+', label: 'Saved for clients' },
    { value: '4.9/5', label: 'Client satisfaction' },
  ];

  return (
    <section 
      className="bg-[#0A0F1A] py-24 md:py-32 border-y border-[#1E293B]"
      data-testid="why-it-works-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-amber-400 tracking-wide uppercase mb-4">
            Results
          </p>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white">
            Every contract needs attention. But not the same expertise.
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-semibold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-[#94A3B8]">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="max-w-3xl mx-auto bg-[#1E293B]/50 rounded-2xl border border-[#334155] p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Quote className="w-10 h-10 text-amber-500/30 mb-6" strokeWidth={1} />
          <blockquote className="text-xl md:text-2xl font-serif text-white leading-relaxed mb-8">
            "{testimonial.quote}"
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[#0F172A] font-semibold">
              {testimonial.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p className="text-sm text-[#94A3B8]">{testimonial.role}, {testimonial.company}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
