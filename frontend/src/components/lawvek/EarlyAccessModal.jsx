import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

export const EarlyAccessModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companySize: '',
    subscribe: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees',
  ];

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
    onClose();
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
              {/* Close button - inside dialog at top right */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-[#64748B] hover:text-white transition-colors z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#1E293B]"
                data-testid="modal-close-btn"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <div className="p-8 pt-12">
                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif text-white mb-3">
                      Get priority access to Lawvek
                    </h2>
                    <p className="text-[#94A3B8] text-sm">
                      Secure Your Spot and Be First to Access AI-Powered Legal Services.
                    </p>
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

                    {/* Company Size */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Company Size
                      </label>
                      <select
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        required
                        className="w-full bg-[#1E293B] border border-[#334155] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 12px center',
                          backgroundSize: '20px',
                        }}
                      >
                        <option value="" disabled className="text-[#64748B]">Select company size</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size} className="bg-[#1E293B]">{size}</option>
                        ))}
                      </select>
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
                    >
                      {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                    </motion.button>
                  </form>

                  {/* Footer */}
                  <p className="text-[#64748B] text-xs text-center mt-6">
                    By joining, you agree to our{' '}
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
