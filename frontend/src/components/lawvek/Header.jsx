import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Play } from 'lucide-react';

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
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center z-50" data-testid="header-logo">
              <span className={`text-xl font-semibold tracking-tight transition-colors ${mobileMenuOpen ? 'text-white' : 'text-[#0F172A]'}`}>
                Lawvek
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors duration-200"
                  data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={onOpenModal}
                className="bg-[#0F172A] text-white px-5 py-2.5 rounded-lg hover:bg-[#1E293B] transition-colors duration-200 font-medium text-sm"
                data-testid="header-cta"
              >
                Get Priority Access
              </button>
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

                  {/* Watch Demo Link */}
                  <motion.a
                    href="#how-it-works"
                    className="group py-4 border-b border-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                    custom={3}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                        <span className="text-2xl font-serif text-white group-hover:text-emerald-400 transition-colors">
                          Watch Demo
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.a>
                </nav>

                {/* CTA Button */}
                <motion.div
                  custom={4}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  className="mt-auto"
                >
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenModal();
                    }}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-900 font-semibold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                  >
                    Get Priority Access
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  {/* Footer text */}
                  <p className="text-center text-slate-500 text-sm mt-6">
                    Join 500+ teams transforming contracts with AI
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
