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
      <header className="fixed top-0 left-0 right-0 z-40">
        {/* Elegant backdrop on scroll */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#FFFEFA]/95 backdrop-blur-2xl shadow-[0_1px_2px_rgba(0,0,0,0.03)]' 
            : ''
        }`} />
        
        <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[76px]">
            {/* Logo */}
            <a href="/" className="flex items-center z-50" data-testid="header-logo">
              <span className={`text-[21px] font-semibold tracking-[-0.02em] ${mobileMenuOpen ? 'text-white' : 'text-[#18181b]'}`}>
                Lawvek
              </span>
            </a>

            {/* Desktop Navigation - Centered pill */}
            <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2" data-testid="desktop-nav">
              <div className="flex items-center gap-0.5 p-1.5 rounded-full bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative px-5 py-2 text-[13px] text-[#52525b] hover:text-[#18181b] rounded-full transition-all duration-300 font-medium group"
                    data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/80 group-hover:shadow-sm transition-all duration-300" />
                    <span className="relative z-10">{link.label}</span>
                  </a>
                ))}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <motion.button
                onClick={onOpenModal}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-[13px] bg-[#18181b] text-white shadow-sm hover:shadow-md transition-shadow duration-200"
                data-testid="header-cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Priority Access</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" strokeWidth={2} />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`lg:hidden p-2 z-50 ${mobileMenuOpen ? 'text-white' : 'text-[#18181b]'}`}
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
                    <X size={22} strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} strokeWidth={1.5} />
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
