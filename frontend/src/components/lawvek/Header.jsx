import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Header = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Product', href: '#approach' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Security', href: '#security' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center z-50 group" data-testid="header-logo">
              <span className={`text-xl font-semibold tracking-tight transition-all duration-300 ${mobileMenuOpen ? 'text-white' : 'text-[#0F172A] group-hover:text-[#1E293B]'}`}>
                Lawvek
              </span>
            </a>

            {/* Desktop Navigation - Premium styled */}
            <nav className="hidden md:flex items-center" data-testid="desktop-nav">
              <div className="flex items-center bg-[#F8FAFC]/80 backdrop-blur-sm rounded-full px-2 py-1.5 border border-[#E2E8F0]/50">
                {navLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative px-5 py-2 text-[13px] font-medium text-[#64748B] hover:text-[#0F172A] transition-all duration-300 group"
                    data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 shadow-sm transition-all duration-300 scale-95 group-hover:scale-100" />
                  </a>
                ))}
              </div>
            </nav>

            {/* Desktop CTA - Uniform with Hero button */}
            <div className="hidden md:flex items-center">
              <motion.button
                onClick={onOpenModal}
                className="group flex items-center gap-2.5 bg-[#0F172A] text-white px-5 py-2.5 rounded-full hover:bg-[#1E293B] transition-all duration-300 font-medium text-[13px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(15,23,42,0.15)]"
                data-testid="header-cta"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Priority Access</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" strokeWidth={2} />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`md:hidden p-2 z-50 rounded-lg transition-colors ${mobileMenuOpen ? 'text-white' : 'text-[#0F172A]'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} strokeWidth={2} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} strokeWidth={2} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Dark Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1A] via-[#0F172A] to-[#1E293B]" />
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }} />

              {/* Content */}
              <div className="relative h-full flex flex-col px-6 pt-24 pb-8">
                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col justify-center -mt-16">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="group py-4 border-b border-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                      custom={i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-serif text-white group-hover:text-emerald-400 transition-colors">
                          {link.label}
                        </span>
                        <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.a>
                  ))}
                </nav>

                {/* Premium CTA Section */}
                <motion.div
                  custom={3}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="mt-auto"
                >
                  {/* Social proof */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 border-2 border-[#0F172A] flex items-center justify-center text-[10px] font-bold text-slate-900">JD</div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-purple-400 border-2 border-[#0F172A] flex items-center justify-center text-[10px] font-bold text-slate-900">SK</div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 border-2 border-[#0F172A] flex items-center justify-center text-[10px] font-bold text-slate-900">MR</div>
                    </div>
                    <span className="text-slate-400 text-sm">500+ teams joined</span>
                  </div>

                  {/* Main CTA Button */}
                  <motion.button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenModal();
                    }}
                    className="relative w-full group overflow-hidden rounded-2xl"
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-400 animate-gradient-x" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-active:opacity-30 bg-white transition-opacity" />
                    
                    {/* Button content */}
                    <div className="relative px-8 py-5 flex items-center justify-center gap-3">
                      <span className="text-slate-900 font-bold text-lg tracking-tight">
                        Get Priority Access
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-900/20 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-slate-900" />
                      </div>
                    </div>
                  </motion.button>

                  {/* Trust badge */}
                  <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>No credit card required</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
