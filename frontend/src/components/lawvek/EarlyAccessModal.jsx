import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export const EarlyAccessModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companySize: '',
    subscribe: false,
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

  // Close dropdown when clicking outside
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', companySize: '', subscribe: false });
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
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          
          {/* Modal */}
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
              transition={{ duration: 0.2 }}
            >
            <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl shadow-2xl overflow-hidden relative">
              {!isSubmitted ? (
                <div className="p-8">
                  {/* Header with inline close button */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-serif text-white mb-2">
                        Request priority access
                      </h2>
                      <p className="text-[#94A3B8] text-sm">
                        Secure Your Spot and Be First to Access AI-Powered Legal Services.
                      </p>
                    </div>
                    {/* Close button - inline with heading */}
                    <button
                      onClick={handleClose}
                      className="flex-shrink-0 text-[#64748B] hover:text-white transition-all duration-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1E293B] hover:rotate-90 mt-1"
                      data-testid="modal-close-btn"
                    >
                      <X className="w-5 h-5" strokeWidth={2.5} />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full bg-[#1E293B] border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Company Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-[#1E293B] border border-[#334155] rounded-lg px-4 py-3 text-white placeholder-[#64748B] focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>

                    {/* Company Size - Custom styled dropdown */}
                    <div className="relative" ref={dropdownRef}>
                      <label className="block text-white text-sm font-medium mb-2">
                        Company Size
                      </label>
                      {/* Hidden input for form validation */}
                      <input 
                        type="hidden" 
                        value={formData.companySize} 
                        required 
                      />
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full bg-[#1E293B] border rounded-lg px-4 py-3 text-left flex items-center justify-between transition-colors cursor-pointer ${
                          isDropdownOpen ? 'border-emerald-500 ring-1 ring-emerald-500' : 'border-[#334155]'
                        } ${formData.companySize ? 'text-white' : 'text-[#64748B]'}`}
                      >
                        <span>{formData.companySize || 'Select company size'}</span>
                        <ChevronDown className={`w-5 h-5 text-[#64748B] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Custom dropdown menu - scrollable */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute z-50 w-full mt-2 bg-[#1E293B] border border-[#334155] rounded-lg shadow-xl overflow-y-auto max-h-48 scrollbar-thin scrollbar-thumb-[#334155] scrollbar-track-transparent"
                          >
                            {companySizes.map((size, index) => (
                              <button
                                key={size}
                                type="button"
                                onClick={() => selectCompanySize(size)}
                                className={`w-full px-4 py-3 text-left text-white hover:bg-[#334155] transition-colors flex items-center justify-between ${
                                  formData.companySize === size ? 'bg-[#334155]' : ''
                                } ${index !== companySizes.length - 1 ? 'border-b border-[#334155]/50' : ''}`}
                              >
                                <span>{size}</span>
                                {formData.companySize === size && (
                                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Subscribe checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="subscribe"
                        checked={formData.subscribe}
                        onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                        className="mt-1 w-4 h-4 bg-[#1E293B] border border-[#334155] rounded text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
                      />
                      <label htmlFor="subscribe" className="text-[#94A3B8] text-sm cursor-pointer">
                        Send me product updates and news about Lawvek
                      </label>
                    </div>

                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F8FAFC] text-[#0F172A] font-semibold py-3.5 rounded-lg hover:bg-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      data-testid="modal-submit-btn"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get Priority Access'}
                    </motion.button>
                  </form>

                  {/* Footer */}
                  <p className="text-[#64748B] text-xs text-center mt-6">
                    By signing up, you agree to our{' '}
                    <a href="#" className="text-[#94A3B8] hover:text-white underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-[#94A3B8] hover:text-white underline">Privacy Policy</a>.
                  </p>
                </div>
              ) : (
                /* Success state */
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-serif text-white mb-3">
                    You're on the list!
                  </h2>
                  <p className="text-[#94A3B8] text-sm mb-6">
                    Thanks for joining. We'll be in touch soon with your early access invitation.
                  </p>
                  <button
                    onClick={handleClose}
                    className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
                  >
                    Close this window
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
