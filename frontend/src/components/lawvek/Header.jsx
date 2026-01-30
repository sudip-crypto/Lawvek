import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Product', href: '#approach' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Security', href: '#security' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9]/95 backdrop-blur-sm border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center" data-testid="header-logo">
            <span className="text-2xl font-serif font-semibold text-[#1E293B] tracking-tight">
              Lawvek
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#475569] hover:text-[#1E293B] transition-colors duration-200 animated-underline"
                data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#cta"
              className="text-sm font-medium text-[#475569] hover:text-[#1E293B] transition-colors duration-200"
              data-testid="header-contact"
            >
              Contact
            </a>
            <a
              href="#cta"
              className="bg-[#1E293B] text-white px-6 py-2.5 rounded-[2px] hover:bg-[#0F172A] transition-colors duration-300 font-medium text-sm tracking-wide btn-press"
              data-testid="header-cta"
            >
              Upload Contract
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1E293B]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-[#E2E8F0]"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-[#475569] hover:text-[#1E293B] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                className="bg-[#1E293B] text-white px-6 py-3 rounded-[2px] hover:bg-[#0F172A] transition-colors duration-300 font-medium text-sm tracking-wide text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Upload Contract
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};
