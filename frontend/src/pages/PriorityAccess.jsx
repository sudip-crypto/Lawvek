import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Mail, Users, ArrowRight, Zap, TrendingDown } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const companySizes = [
    '1-10 Employees',
    '11-50 Employees',
    '51-200 Employees',
    '201-500 Employees',
    '500+ Employees'
];

const PriorityAccess = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        companySize: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Optimistic navigation for instant feedback
        navigate('/confirmation');

        try {
            await axios.post('/api/leads', {
                name: formData.companyName,
                email: formData.email,
                company_size: formData.companySize,
                type: 'priority_waitlist'
            }, { timeout: 10000 });
        } catch (err) {
            console.error("Background lead capture failed:", err.message);
            // We don't alert here to keep the experience "smooth", 
            // but in a production app you might use a toast if it critically fails.
        }
    };

    return (
        <div className="min-h-screen w-full relative overflow-hidden bg-[#FAFAF9] flex flex-col lg:flex-row">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img 
                    src="/images/priority-light-bg.png" 
                    alt="Background" 
                    className="w-full h-full object-cover grayscale-[0.5]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            </div>
            
            {/* Left Content Column */}
            <aside className="relative z-10 w-full lg:w-1/2 flex flex-col justify-between p-8 lg:p-20 bg-white/40 backdrop-blur-md border-r border-black/[0.03]">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="space-y-8 max-w-lg mt-20">
                        <h1 className="text-5xl lg:text-7xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tight">
                            Contract review <span className="italic text-[#1A1A1A]/40">without hourly billing.</span>
                        </h1>
                        <p className="text-xl text-[#1A1A1A]/60 font-light leading-relaxed">
                            AI-powered contract review with the right level of human legal oversight. Attorney-validated contract review from $250.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-2 gap-8 pt-12 border-t border-black/[0.05] mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-emerald-600">
                            <Zap className="w-4 h-4" />
                            <span className="text-2xl font-serif">10x</span>
                        </div>
                        <p className="text-xs text-[#1A1A1A]/40 uppercase tracking-widest leading-loose font-medium">
                            Faster Lifecycle
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-emerald-600">
                            <TrendingDown className="w-4 h-4" />
                            <span className="text-2xl font-serif">80%</span>
                        </div>
                        <p className="text-xs text-[#1A1A1A]/40 uppercase tracking-widest leading-loose font-medium">
                            Cost Reduction
                        </p>
                    </div>
                </motion.div>

                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -z-10 translate-x-1/2 translate-y-1/2" />
            </aside>

            {/* Right Form Column */}
            <main className="relative z-10 w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key="form-container"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full max-w-md bg-white p-10 lg:p-14 rounded-[2.5rem] border border-black/[0.04] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] relative"
                    >
                        <div className="absolute -top-12 -left-12 w-24 h-24 bg-black/[0.02] rounded-full blur-2xl" />
                        
                        <div className="space-y-2 mb-12 text-center lg:text-left">
                            <h2 className="text-2xl font-serif text-[#1A1A1A] tracking-tight">Request Priority Access</h2>
                            <p className="text-[#1A1A1A]/40 text-[13px] tracking-wide font-medium">Enter your details to join the Q2 waitlist.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-6">
                                {/* Company Name */}
                                <div className="group relative">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/30 font-bold mb-2 block transition-colors group-focus-within:text-emerald-600">
                                        Organization
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Enter company name"
                                            value={formData.companyName}
                                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                            required
                                            className="w-full bg-[#FAFAF9] border border-black/[0.06] rounded-xl py-4 px-5 text-[#1A1A1A] focus:outline-none focus:border-black/20 focus:bg-white transition-all placeholder:text-[#1A1A1A]/20 text-[15px] font-medium"
                                        />
                                        <Building2 className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A1A]/20 group-focus-within:text-[#1A1A1A]/50 transition-colors" />
                                    </div>
                                </div>

                                {/* Work Email */}
                                <div className="group relative">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/30 font-bold mb-2 block transition-colors group-focus-within:text-emerald-600">
                                        Professional Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="name@organization.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="w-full bg-[#FAFAF9] border border-black/[0.06] rounded-xl py-4 px-5 text-[#1A1A1A] focus:outline-none focus:border-black/20 focus:bg-white transition-all placeholder:text-[#1A1A1A]/20 text-[15px] font-medium"
                                        />
                                        <Mail className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A1A]/20 group-focus-within:text-[#1A1A1A]/50 transition-colors" />
                                    </div>
                                </div>

                                {/* Company Size Custom Dropdown */}
                                <div className="group relative">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/30 font-bold mb-2 block transition-colors group-focus-within:text-emerald-600">
                                        Company Scale
                                    </label>
                                    <div className="relative">
                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="w-full bg-[#FAFAF9] border border-black/[0.06] rounded-xl py-4 px-5 text-left text-[#1A1A1A] focus:outline-none focus:border-black/20 focus:bg-white transition-all flex items-center justify-between group/btn"
                                        >
                                            <span className={`text-[15px] font-medium ${formData.companySize ? "text-[#1A1A1A]" : "text-[#1A1A1A]/20"}`}>
                                                {formData.companySize || "Select scale"}
                                            </span>
                                            <motion.div
                                                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-[#1A1A1A]/20 group-hover/btn:text-[#1A1A1A]/40"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    className="absolute bottom-full left-0 w-full mb-3 bg-white border border-black/[0.06] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-50 py-1"
                                                >
                                                    {companySizes.map((size) => (
                                                        <button
                                                            key={size}
                                                            type="button"
                                                            onClick={() => {
                                                                 setFormData({ ...formData, companySize: size });
                                                                 setIsDropdownOpen(false);
                                                            }}
                                                            className="w-full px-5 py-3.5 text-left text-[#1A1A1A]/70 hover:text-black hover:bg-[#FAFAF9] transition-all text-sm font-medium border-b border-black/[0.03] last:border-0"
                                                        >
                                                            {size}
                                                        </button>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.01, backgroundColor: "#000000" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-5 px-8 bg-[#1A1A1A] text-white rounded-xl font-bold text-[15px] transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)] disabled:opacity-50 flex items-center justify-center gap-3 group"
                            >
                                <span>{isSubmitting ? 'Processing...' : 'Get priority access'}</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </form>


                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
};

export default PriorityAccess;
