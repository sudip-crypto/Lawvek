import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';

export const WhyLawvekSection = () => {
    const comparisonData = [
        {
            feature: 'Cost',
            traditional: '$1,000-$5,000+ per contract, billed hourly with unpredictable costs',
            lawvek: 'Fixed pricing per contract at $250',
        },
        {
            feature: 'Speed',
            traditional: 'Days or weeks to turn a contract',
            lawvek: 'Contract reviews delivered within 3 hours',
        },
        {
            feature: 'Process',
            traditional: 'Email chains, handoffs, and unclear ownership',
            lawvek: 'Integrate to your present workflow',
        },
        {
            feature: 'Quality',
            traditional: 'Junior-heavy staffing and slow reviews',
            lawvek: 'Experienced, U.S.-barred attorneys on every contract',
        },
    ];

    return (
        <section
            id="why-lawvek"
            className="relative bg-[#0a1628] py-24 md:py-32 overflow-hidden"
            data-testid="why-lawvek-section"
        >
            {/* Premium background effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient mesh */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.08] via-transparent to-transparent blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.06] via-transparent to-transparent blur-3xl rounded-full" />

                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Top glow line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div
                    className="mb-12 max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <motion.span
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Why Lawvek</span>
                    </motion.span>

                    <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-4">
                        Built for Speed. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Not Billable Hours.</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
                        See how Lawvek pairs advanced AI with real legal experts — and why it outperforms the traditional law firm model.
                    </p>
                </motion.div>

                {/* Comparison Table */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Table container with glass effect */}
                    <div className="relative rounded-2xl overflow-hidden">
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-700/50 via-slate-800/50 to-emerald-900/30 p-px">
                            <div className="absolute inset-px rounded-2xl bg-[#0f1a2e]" />
                        </div>

                        {/* Table content */}
                        <div className="relative overflow-x-auto">
                            {/* Header row */}
                            <div className="grid grid-cols-[140px_1fr_1fr] md:grid-cols-[180px_1fr_1fr] min-w-[600px] bg-gradient-to-r from-slate-800/80 via-slate-800/60 to-slate-800/80 backdrop-blur-sm">
                                <div className="p-5 md:p-6">
                                    <span className="text-sm font-bold text-slate-500 tracking-wider uppercase">Feature</span>
                                </div>
                                <div className="p-5 md:p-6 border-l border-slate-700/50">
                                    <span className="text-sm font-bold text-slate-500 tracking-wider uppercase">Traditional Firm</span>
                                </div>
                                <div className="p-5 md:p-6 border-l border-emerald-500/40 bg-gradient-to-br from-emerald-600/30 via-emerald-500/20 to-[#0f1a2e] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-emerald-500/5 animate-pulse" />
                                    <span className="relative text-lg md:text-2xl font-serif font-medium text-white tracking-widest uppercase">Lawvek</span>
                                </div>
                            </div>

                            {/* Data rows */}
                            <div className="min-w-[600px] divide-y divide-slate-700/30">
                                {comparisonData.map((row, index) => (
                                    <motion.div
                                        key={row.feature}
                                        className="grid grid-cols-[140px_1fr_1fr] md:grid-cols-[180px_1fr_1fr] group transition-colors duration-300 hover:bg-slate-800/30"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.1 * index }}
                                    >
                                        {/* Feature name */}
                                        <div className="p-5 md:p-6 flex items-center">
                                            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wide">{row.feature}</span>
                                        </div>

                                        {/* Traditional - negative */}
                                        <div className="p-5 md:p-6 border-l border-slate-700/30 flex items-start gap-3">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
                                                <X className="w-3 h-3 text-red-400/80" strokeWidth={2.5} />
                                            </div>
                                            <span className="text-sm text-slate-500 leading-relaxed">{row.traditional}</span>
                                        </div>

                                        {/* Lawvek - positive */}
                                        <div className="relative p-5 md:p-6 border-l border-emerald-500/20 bg-gradient-to-r from-emerald-500/[0.08] to-transparent flex items-start gap-3">
                                            {/* Animated glow on hover */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                            <div className="relative flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                                                <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
                                            </div>
                                            <span className="relative text-sm text-emerald-300 leading-relaxed font-medium">{row.lawvek}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom accent glow */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent blur-2xl" />
                </motion.div>

                {/* Bottom CTA hint */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="text-sm text-slate-500">
                        Join forward-thinking legal teams making the switch
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
