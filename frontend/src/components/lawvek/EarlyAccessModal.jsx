import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Shield, Zap, Users, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export const EarlyAccessModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companySize: '',
    subscribe: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', companySize: '', subscribe: true });
    setIsDropdownOpen(false);
    onClose();
  };

  const selectCompanySize = (size) => {
    setFormData({ ...formData, companySize: size });
    setIsDropdownOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Premium backdrop with gradient */}
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-black/80 via-slate-900/80 to-black/80 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          
          {/* Modal Container */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Main Card with subtle gradient border */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition duration-500" />
                
                <div className="relative bg-gradient-to-b from-[#0C1220] to-[#0A0F1A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                  
                  {/* Close button - premium floating style */}
                  <motion.button
                    onClick={handleClose}
                    className="absolute top-5 right-5 z-20 text-slate-500 hover:text-white transition-all duration-300 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid="modal-close-btn"
                  >
                    <X className="w-4 h-4" strokeWidth={2} />
                  </motion.button>

                  {!isSubmitted ? (
                    <div className="p-8 md:p-10">
                      {/* Premium Badge */}
                      <motion.div 
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 text-xs font-medium tracking-wide uppercase">Limited Access</span>
                      </motion.div>

                      {/* Header */}
                      <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-3 leading-tight">
                          Request Priority Access
                        </h2>
                        <p className="text-slate-400 text-base leading-relaxed">
                          Join leading legal teams already transforming their contract workflows with AI.
                        </p>
                      </motion.div>

                      {/* Trust Indicators */}
                      <motion.div 
                        className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-white/5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <Shield className="w-4 h-4 text-emerald-500" />
                          <span>SOC 2 Compliant</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <Zap className="w-4 h-4 text-amber-500" />
                          <span>24hr Onboarding</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <Users className="w-4 h-4 text-cyan-500" />
                          <span>500+ Teams</span>
                        </div>
                      </motion.div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name Field */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 }}
                        >
                          <label className="block text-slate-300 text-sm font-medium mb-2.5">
                            Full Name
                          </label>
                          <input
                            type="text"
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white/[0.05] transition-all duration-300"
                          />
                        </motion.div>

                        {/* Email Field */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <label className="block text-slate-300 text-sm font-medium mb-2.5">
                            Work Email
                          </label>
                          <input
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white/[0.05] transition-all duration-300"
                          />
                        </motion.div>

                        {/* Company Size Dropdown */}
                        <motion.div 
                          className="relative" 
                          ref={dropdownRef}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.35 }}
                        >
                          <label className="block text-slate-300 text-sm font-medium mb-2.5">
                            Company Size
                          </label>
                          <input type="hidden" value={formData.companySize} required />
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3.5 text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                              isDropdownOpen 
                                ? 'border-emerald-500/50 ring-2 ring-emerald-500/20 bg-white/[0.05]' 
                                : 'border-white/10 hover:border-white/20'
                            } ${formData.companySize ? 'text-white' : 'text-slate-600'}`}
                          >
                            <span>{formData.companySize || 'Select team size'}</span>
                            <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="absolute z-50 w-full mt-2 bg-[#0C1220] border border-white/10 rounded-xl shadow-2xl overflow-hidden max-h-52 overflow-y-auto scrollbar-thin"
                              >
                                {companySizes.map((size, index) => (
                                  <button
                                    key={size}
                                    type="button"
                                    onClick={() => selectCompanySize(size)}
                                    className={`w-full px-4 py-3 text-left transition-all duration-200 flex items-center justify-between ${
                                      formData.companySize === size 
                                        ? 'bg-emerald-500/10 text-emerald-400' 
                                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                    } ${index !== companySizes.length - 1 ? 'border-b border-white/5' : ''}`}
                                  >
                                    <span>{size}</span>
                                    {formData.companySize === size && (
                                      <motion.svg 
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-4 h-4 text-emerald-400" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                      </motion.svg>
                                    )}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>

                        {/* Newsletter Checkbox */}
                        <motion.div 
                          className="flex items-start gap-3 pt-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="relative">
                            <input
                              type="checkbox"
                              id="subscribe"
                              checked={formData.subscribe}
                              onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                              className="peer sr-only"
                            />
                            <label 
                              htmlFor="subscribe"
                              className="w-5 h-5 rounded-md border border-white/20 bg-white/5 flex items-center justify-center cursor-pointer transition-all duration-200 peer-checked:bg-emerald-500 peer-checked:border-emerald-500"
                            >
                              <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </label>
                          </div>
                          <label htmlFor="subscribe" className="text-slate-500 text-sm cursor-pointer leading-relaxed">
                            Keep me updated on product news and exclusive offers
                          </label>
                        </motion.div>

                        {/* Submit Button - Premium gradient */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.45 }}
                          className="pt-3"
                        >
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="relative w-full group overflow-hidden rounded-xl font-semibold py-4 transition-all duration-300 disabled:cursor-not-allowed"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            data-testid="modal-submit-btn"
                          >
                            {/* Button gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-500 transition-all duration-300 group-hover:opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Button content */}
                            <span className="relative flex items-center justify-center gap-2 text-slate-900 font-semibold">
                              {isSubmitting ? (
                                <>
                                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                  </svg>
                                  Processing...
                                </>
                              ) : (
                                <>
                                  Request Access
                                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </>
                              )}
                            </span>
                          </motion.button>
                        </motion.div>
                      </form>

                      {/* Footer */}
                      <motion.p 
                        className="text-slate-600 text-xs text-center mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        By continuing, you agree to our{' '}
                        <a href="#" className="text-slate-500 hover:text-emerald-400 underline underline-offset-2 transition-colors">Terms</a>
                        {' '}and{' '}
                        <a href="#" className="text-slate-500 hover:text-emerald-400 underline underline-offset-2 transition-colors">Privacy Policy</a>
                      </motion.p>
                    </div>
                  ) : (
                    /* Success State - Premium */
                    <motion.div 
                      className="p-10 text-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Success animation */}
                      <motion.div 
                        className="relative w-20 h-20 mx-auto mb-8"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.6, delay: 0.1 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full animate-pulse" />
                        <div className="absolute inset-2 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.svg 
                            className="w-10 h-10 text-emerald-400" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <motion.path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2.5} 
                              d="M5 13l4 4L19 7"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            />
                          </motion.svg>
                        </div>
                      </motion.div>
                      
                      <motion.h2 
                        className="text-2xl md:text-3xl font-serif text-white mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        You're on the list
                      </motion.h2>
                      <motion.p 
                        className="text-slate-400 text-base mb-8 max-w-xs mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        We'll reach out within 24 hours with your exclusive access details.
                      </motion.p>
                      <motion.button
                        onClick={handleClose}
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ x: 3 }}
                      >
                        Done
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
