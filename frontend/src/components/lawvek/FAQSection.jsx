import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className="text-lg md:text-xl font-semibold text-[#1a1a1a] group-hover:text-amber-600 transition-colors duration-300 pr-8">
                    {question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-amber-50 transition-colors duration-300">
                    {isOpen ? (
                        <Minus className="w-4 h-4 text-amber-600" />
                    ) : (
                        <Plus className="w-4 h-4 text-gray-500 group-hover:text-amber-600" />
                    )}
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className="pb-8 text-[#555555] text-base md:text-lg leading-relaxed space-y-4">
                            {typeof answer === 'string' ? (
                                <p>{answer}</p>
                            ) : (
                                answer
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How is Lawvek different from a traditional law firm?",
            answer: (
                <div className="space-y-4">
                    <p>Traditional law firms bill by the hour and often take days or weeks to review standard contracts.</p>
                    <p>Lawvek is designed for fast-moving companies. Using AI-powered workflows combined with experienced US attorneys, we review contracts within 4 hours at a fixed price of $250.</p>
                    <p>You get law-firm quality without hourly billing or slow turnaround.</p>
                </div>
            ),
        },
        {
            question: "Is my contract reviewed by a real lawyer?",
            answer: (
                <div className="space-y-4">
                    <p>Yes. Every contract reviewed through Lawvek is reviewed and approved by a licensed US attorney before you rely on it.</p>
                    <p>Our lawyers use AI tools to speed up analysis, but the final legal judgment always comes from an experienced human attorney bound by confidentiality and attorney-client privilege.</p>
                </div>
            ),
        },
        {
            question: "What types of contracts can Lawvek review?",
            answer: (
                <div className="space-y-4">
                    <p>Lawvek focuses on standard commercial agreements that companies deal with every day, such as:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-5">
                        <li>MSAs (Master Service Agreements)</li>
                        <li>NDAs</li>
                        <li>Vendor agreements</li>
                        <li>DPAs</li>
                        <li>Terms of Service</li>
                        <li>EULAs</li>
                        <li>Partnership or SaaS agreements</li>
                    </ul>
                    <p>If you're unsure whether we can review a contract, simply send it to us and we’ll let you know.</p>
                </div>
            ),
        },
        {
            question: "How does Lawvek fit into my workflow?",
            answer: (
                <div className="space-y-4">
                    <p>Lawvek becomes part of your daily workflow by combining intelligent automation with experienced legal oversight to deliver carefully redlined contracts, clear risk insights, and practical legal guidance.</p>
                    <p>You can simply type @Lawvek in your email, Slack, or any supported communication channel to summarize a contract, request a review, or trigger legal actions—without leaving the tools your team already use.</p>
                </div>
            ),
        },
        {
            question: "Do I need a long-term commitment or retainer?",
            answer: (
                <div className="space-y-4">
                    <p>No. Lawvek works on a pay-per-contract model.</p>
                    <p>You can start with a single contract review — no retainer, no minimum commitment, and no hourly billing. Many companies begin with one contract and expand once they experience the speed and quality.</p>
                </div>
            ),
        },
    ];

    return (
        <section
            id="faq"
            className="relative py-16 md:py-20 bg-white overflow-hidden"
            data-testid="faq-section"
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-amber-50/50 to-transparent -z-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-50/50 to-transparent -z-10 blur-3xl" />

            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4"
                    >
                        <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                        <span className="text-xs font-semibold text-amber-600 tracking-wider uppercase">FAQ</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-serif tracking-tight text-[#1a1a1a] mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-[#666666] max-w-2xl mx-auto"
                    >
                        Everything you need to know about how Lawvek works.
                    </motion.p>
                </div>

                {/* FAQ List */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-3xl p-2 md:p-6"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </motion.div>

                {/* Bottom Support Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <p className="text-[#666666]">
                        Still have questions?{" "}
                        <a href="#cta" className="text-amber-600 font-semibold hover:underline">
                            Contact our team
                        </a>{" "}
                        for personal assistance.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
