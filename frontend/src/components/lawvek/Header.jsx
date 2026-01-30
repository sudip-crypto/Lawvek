import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Product', href: '#approach' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Security', href: '#security' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E2E8F0]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="/" className="flex items-center" data-testid="header-logo">
            <span className="text-xl font-semibold text-[#0F172A] tracking-tight">
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
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#cta"
              className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors duration-200"
              data-testid="header-contact"
            >
              Contact
            </a>
            <a
              href="#cta"
              className="bg-[#0F172A] text-white px-5 py-2.5 rounded-lg hover:bg-[#1E293B] transition-colors duration-200 font-medium text-sm"
              data-testid="header-cta"
            >
              Upload Contract
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#0F172A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
              data-testid="mobile-menu"
            >
              <nav className="py-4 space-y-1 border-t border-[#E2E8F0]">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block py-3 text-base font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  className="block mt-4 bg-[#0F172A] text-white px-5 py-3 rounded-lg text-center font-medium text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Upload Contract
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
