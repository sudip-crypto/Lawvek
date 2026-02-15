import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ArrowRight } from 'lucide-react';
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
              className="w-full max-w-md"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Main Card */}
              <div className="relative bg-[#0B1120] border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
                
                {/* Close button - clearly visible */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-20 text-slate-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800"
                  data-testid="modal-close-btn"
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>

                {!isSubmitted ? (
                  <div className="p-6 md:p-8">
                    {/* Header row with badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 text-[11px] font-semibold tracking-wide uppercase">Limited Access</span>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="mb-6 pr-8">
                      <h2 className="text-2xl font-serif text-white mb-2">
                        Request Priority Access
                      </h2>
                      <p className="text-slate-400 text-sm">
                        Join leading teams already transforming their contract workflows with AI.
                      </p>
                    </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Field */}
                        <div>
                          <label className="block text-slate-300 text-sm font-medium mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                          />
                        </div>

                        {/* Email Field */}
                        <div>
                          <label className="block text-slate-300 text-sm font-medium mb-2">
                            Work Email
                          </label>
                          <input
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                          />
                        </div>

                        {/* Company Size Dropdown */}
                        <div 
                          className="relative" 
                          ref={dropdownRef}
                        >
                          <label className="block text-slate-300 text-sm font-medium mb-2">
                            Company Size
                          </label>
                          <input type="hidden" value={formData.companySize} required />
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`w-full bg-slate-900/50 border rounded-lg px-4 py-3 text-left flex items-center justify-between transition-all cursor-pointer ${
                              isDropdownOpen 
                                ? 'border-emerald-500 ring-1 ring-emerald-500/30' 
                                : 'border-slate-700 hover:border-slate-600'
                            } ${formData.companySize ? 'text-white' : 'text-slate-500'}`}
                          >
                            <span>{formData.companySize || 'Select team size'}</span>
                            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-50 w-full bottom-full mb-1.5 bg-slate-900 border border-slate-700 rounded-lg shadow-xl overflow-hidden"
                              >
                                {companySizes.map((size, index) => (
                                  <button
                                    key={size}
                                    type="button"
                                    onClick={() => selectCompanySize(size)}
                                    className={`w-full px-4 py-2.5 text-sm text-left transition-colors flex items-center justify-between ${
                                      formData.companySize === size 
                                        ? 'bg-emerald-500/10 text-emerald-400' 
                                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                    } ${index !== companySizes.length - 1 ? 'border-b border-slate-800' : ''}`}
                                  >
                                    <span>{size}</span>
                                    {formData.companySize === size && (
                                      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                      </svg>
                                    )}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Newsletter Checkbox */}
                        <div className="flex items-start gap-3 pt-1">
                          <input
                            type="checkbox"
                            id="subscribe"
                            checked={formData.subscribe}
                            onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                            className="mt-0.5 w-4 h-4 rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
                          />
                          <label htmlFor="subscribe" className="text-slate-500 text-sm cursor-pointer">
                            Keep me updated on product news
                          </label>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-900 font-semibold py-3 rounded-lg hover:from-emerald-400 hover:to-emerald-300 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            data-testid="modal-submit-btn"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Processing...
                              </>
                            ) : (
                              <>
                                Request Access
                                <ArrowRight className="w-4 h-4" />
                              </>
                            )}
                          </motion.button>
                        </div>
                      </form>

                      {/* Footer */}
                      <p className="text-slate-600 text-xs text-center mt-5">
                        By continuing, you agree to our{' '}
                        <a href="#" className="text-slate-500 hover:text-emerald-400 underline underline-offset-2 transition-colors">Terms</a>
                        {' '}and{' '}
                        <a href="#" className="text-slate-500 hover:text-emerald-400 underline underline-offset-2 transition-colors">Privacy Policy</a>
                      </p>
                    </div>
                  ) : (
                    /* Success State */
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      
                      <h2 className="text-2xl font-serif text-white mb-2">You're on the list</h2>
                      <p className="text-slate-400 text-sm mb-6">
                        We'll reach out within 24 hours with your access details.
                      </p>
                      <button
                        onClick={handleClose}
                        className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors inline-flex items-center gap-1"
                      >
                        Done
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
