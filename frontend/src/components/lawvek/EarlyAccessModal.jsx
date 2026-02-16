import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ArrowRight, Calendar, CheckCircle2, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export const EarlyAccessModal = ({ isOpen, onClose, onSuccess, queueCount = 37 }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companySize: '',
    subscribe: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState('form'); // 'form' | 'scheduling' | 'confirmed'
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scheduledTime, setScheduledTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isBooking, setIsBooking] = useState(false);
  const dropdownRef = useRef(null);
  const spotsRemaining = 50 - queueCount;

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees',
  ];

  // Available time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDay = firstDay.getDay();
    const totalDays = lastDay.getDate();
    
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Add empty slots for days before the first day
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Add actual days
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day);
      const isPast = date < today;
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      days.push({
        day,
        date,
        disabled: isPast || isWeekend
      });
    }
    
    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) return;
    
    setIsBooking(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const dateObj = new Date(selectedDate);
    setScheduledTime({
      date: dateObj.toISOString(),
      time: selectedTime,
      formattedDate: dateObj.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
      })
    });
    setIsBooking(false);
    setStep('confirmed');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setSelectedDate(null);
      setSelectedTime(null);
      setCurrentMonth(new Date());
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setStep('scheduling');
    if (onSuccess) {
      onSuccess();
    }
  };

  const handleClose = () => {
    setStep('form');
    setFormData({ name: '', email: '', companySize: '', subscribe: true });
    setIsDropdownOpen(false);
    setScheduledTime(null);
    setSelectedDate(null);
    setSelectedTime(null);
    onClose();
  };

  const selectCompanySize = (size) => {
    setFormData({ ...formData, companySize: size });
    setIsDropdownOpen(false);
  };

  const formatScheduledDate = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const calendarDays = generateCalendarDays();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Premium backdrop - Light theme */}
          <motion.div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
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
              className={`w-full ${step === 'scheduling' ? 'max-w-3xl' : 'max-w-md'}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Main Card - Light Theme */}
              <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/50 overflow-hidden">
                
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-600 transition-colors w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100"
                  data-testid="modal-close-btn"
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>

                {step === 'form' && (
                  <div className="p-6 md:p-8">
                    {/* Header row with badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-amber-600 text-[11px] font-semibold tracking-wide uppercase">
                          {spotsRemaining > 0 ? `Only ${spotsRemaining} spots left` : 'Waitlist Full'}
                        </span>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="mb-6 pr-8">
                      <h2 className="text-2xl font-serif text-slate-900 mb-2">
                        Request Priority Access
                      </h2>
                      <p className="text-slate-500 text-sm">
                        Limited to first 50 legal teams. Join the queue now.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name Field */}
                      <div>
                        <label className="block text-slate-700 text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          data-testid="modal-name-input"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-slate-700 text-sm font-medium mb-2">
                          Work Email
                        </label>
                        <input
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          data-testid="modal-email-input"
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                        />
                      </div>

                      {/* Company Size Dropdown */}
                      <div 
                        className="relative" 
                        ref={dropdownRef}
                      >
                        <label className="block text-slate-700 text-sm font-medium mb-2">
                          Company Size
                        </label>
                        <input type="hidden" value={formData.companySize} required />
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          data-testid="modal-company-dropdown"
                          className={`w-full bg-slate-50 border rounded-lg px-4 py-3 text-left flex items-center justify-between transition-all cursor-pointer ${
                            isDropdownOpen 
                              ? 'border-emerald-500 ring-2 ring-emerald-500/20' 
                              : 'border-slate-200 hover:border-slate-300'
                          } ${formData.companySize ? 'text-slate-900' : 'text-slate-400'}`}
                        >
                          <span>{formData.companySize || 'Select team size'}</span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              transition={{ duration: 0.15 }}
                              className="absolute z-50 w-full bottom-full mb-1.5 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden"
                            >
                              {companySizes.map((size, index) => (
                                <button
                                  key={size}
                                  type="button"
                                  onClick={() => selectCompanySize(size)}
                                  className={`w-full px-4 py-2.5 text-sm text-left transition-colors flex items-center justify-between ${
                                    formData.companySize === size 
                                      ? 'bg-emerald-50 text-emerald-600' 
                                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                  } ${index !== companySizes.length - 1 ? 'border-b border-slate-100' : ''}`}
                                >
                                  <span>{size}</span>
                                  {formData.companySize === size && (
                                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                          className="mt-0.5 w-4 h-4 rounded border-slate-300 bg-white text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
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
                          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold py-3 rounded-lg hover:from-emerald-500 hover:to-emerald-400 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
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
                    <p className="text-slate-400 text-xs text-center mt-5">
                      By continuing, you agree to our{' '}
                      <a href="#" className="text-slate-500 hover:text-emerald-600 underline underline-offset-2 transition-colors">Terms</a>
                      {' '}and{' '}
                      <a href="#" className="text-slate-500 hover:text-emerald-600 underline underline-offset-2 transition-colors">Privacy Policy</a>
                    </p>
                  </div>
                )}

                {step === 'scheduling' && (
                  <div className="p-6 md:p-8">
                    {/* Success Header */}
                    <div className="text-center mb-6">
                      <motion.div 
                        className="w-16 h-16 mx-auto mb-4 bg-emerald-50 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                      </motion.div>
                      <h2 className="text-2xl font-serif text-slate-900 mb-2">Request Accepted</h2>
                      <p className="text-slate-500 text-sm">
                        To begin onboarding, select a time that works best for you.
                      </p>
                    </div>

                    {/* Calendly Embed Container */}
                    <div 
                      ref={calendlyContainerRef}
                      className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
                      style={{ minHeight: '500px' }}
                      data-testid="calendly-container"
                    >
                      <div 
                        className="calendly-inline-widget" 
                        data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&hide_landing_page_details=1&primary_color=10b981&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`}
                        style={{ minWidth: '320px', height: '500px' }}
                      />
                    </div>

                    {/* Skip Option */}
                    <p className="text-slate-400 text-xs text-center mt-4">
                      Can't find a suitable time?{' '}
                      <button 
                        onClick={() => setStep('confirmed')}
                        className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2 transition-colors"
                      >
                        We'll reach out to you instead
                      </button>
                    </p>
                  </div>
                )}

                {step === 'confirmed' && (
                  <div className="p-8 text-center">
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-6 bg-emerald-50 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <Calendar className="w-10 h-10 text-emerald-500" />
                    </motion.div>
                    
                    <h2 className="text-2xl font-serif text-slate-900 mb-3">
                      {scheduledTime ? "You're All Set!" : "We'll Be in Touch"}
                    </h2>
                    
                    {scheduledTime ? (
                      <div className="mb-6">
                        <p className="text-slate-500 text-sm mb-3">
                          Your onboarding call is scheduled for:
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-lg">
                          <Calendar className="w-4 h-4 text-emerald-600" />
                          <span className="text-emerald-700 font-medium text-sm">
                            {formatScheduledDate(scheduledTime.date)}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-slate-500 text-sm mb-6">
                        Our team will reach out within 24 hours to schedule your onboarding call.
                      </p>
                    )}

                    <p className="text-slate-400 text-sm mb-6">
                      We're excited to help you transform your contract review process.
                    </p>

                    <motion.button
                      onClick={handleClose}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      data-testid="modal-done-btn"
                    >
                      Done
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
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
