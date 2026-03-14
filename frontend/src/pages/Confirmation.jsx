import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Confirmation = () => {
    return (
        <div className="min-h-screen w-full relative overflow-hidden bg-[#FAFAF9] flex flex-col items-center justify-center p-6 lg:p-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <img 
                    src="/images/priority-light-bg.png" 
                    alt="Background" 
                    className="w-full h-full object-cover grayscale-[0.5]"
                />
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
            </div>

            <main className="relative z-10 w-full max-w-lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full text-center py-16 px-10 bg-white rounded-[2.5rem] border border-black/[0.04] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
                >
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-emerald-100 shadow-[0_0_40px_rgba(16,185,129,0.05)]"
                    >
                        <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                    </motion.div>
                    
                    <h1 className="text-4xl lg:text-5xl font-serif text-[#1A1A1A] mb-6 tracking-tight">Priority Reserved</h1>
                    
                    <p className="text-[#1A1A1A]/50 mb-12 text-base leading-relaxed max-w-sm mx-auto font-medium">
                        Our attorneys are currently researching your organization's infrastructure. We will reach out once your priority status is finalized.
                    </p>
                </motion.div>
            </main>
        </div>
    );
};

export default Confirmation;
