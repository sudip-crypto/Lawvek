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
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500`}>
        {/* Premium translucent backdrop strip */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)]' 
            : 'bg-gradient-to-b from-white/70 via-white/50 to-transparent backdrop-blur-md'
        }`}>
          {/* Subtle golden accent line at bottom */}
          <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/40 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-60'}`} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo - Bigger and more prominent */}
            <a href="/" className="flex items-center z-50 group" data-testid="header-logo">
              <span className={`text-2xl md:text-[1.65rem] font-semibold tracking-tight transition-all duration-300 ${mobileMenuOpen ? 'text-white' : 'text-[#1a1a1a]'}`}>
                Lawvek
              </span>
            </a>

            {/* Desktop Navigation - Slightly larger text */}
            <nav className="hidden md:flex items-center gap-10" data-testid="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-medium text-[#555555] hover:text-[#1a1a1a] transition-all duration-300 relative group"
                  data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                  {/* Subtle hover underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA - Slightly larger */}
            <div className="hidden md:flex items-center">
              <motion.button
                onClick={onOpenModal}
                className="group relative flex items-center gap-2.5 px-6 py-3 rounded-full overflow-hidden font-semibold text-[14px] bg-[#1a1a1a] text-white transition-all duration-300 shadow-lg shadow-black/10"
                data-testid="header-cta"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.18)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="relative z-10">Get Priority Access</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={2} />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`md:hidden p-2 z-50 rounded-lg transition-colors ${mobileMenuOpen ? 'text-white' : 'text-[#1a1a1a]'}`}
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
                    <X size={26} strokeWidth={2} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={26} strokeWidth={2} />
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
              {/* Dark Background */}
              <div className="absolute inset-0 bg-[#1a1a1a]" />

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
                        <span className="text-2xl font-serif text-white group-hover:text-amber-400 transition-colors">
                          {link.label}
                        </span>
                        <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.a>
                  ))}
                </nav>

                {/* CTA */}
                <motion.div
                  custom={3}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="mt-auto"
                >
                  <motion.button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenModal();
                    }}
                    className="w-full bg-white text-[#1a1a1a] rounded-full py-4 font-semibold"
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Priority Access
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
