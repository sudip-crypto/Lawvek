import { motion } from 'framer-motion';

export const Footer = () => {
  const links = [
    { label: 'Product', href: '#approach' },
    { label: 'Security', href: '#security' },
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' },
  ];

  return (
    <footer 
      className="bg-[#FAFAFA] border-t border-[#E2E8F0] py-12"
      data-testid="footer-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <a href="/" className="text-lg font-semibold text-[#0F172A] tracking-tight">
              Lawvek
            </a>
          </motion.div>

          {/* Links */}
          <motion.nav
            className="flex flex-wrap items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
                data-testid={`footer-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Year */}
          <motion.span
            className="text-sm text-[#94A3B8]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            © {new Date().getFullYear()}
          </motion.span>
        </div>

        {/* Disclaimer */}
        <motion.div
          className="mt-8 pt-8 border-t border-[#E2E8F0] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-xs text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Lawvek provides AI-assisted contract analysis. Legal advice is provided only by licensed attorneys where explicitly engaged.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
