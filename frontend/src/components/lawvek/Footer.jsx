import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const links = {
    product: [
      { label: 'Features', href: '#approach' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#cta' },
      { label: 'Security', href: '#security' },
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#cta' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer 
      className="relative bg-white/80 backdrop-blur-sm border-t border-gray-200 pt-16 pb-8"
      data-testid="footer-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="text-xl font-semibold text-[#1a1a1a] tracking-tight">
              Lawvek
            </a>
            <p className="mt-4 text-sm text-[#666666] leading-relaxed">
              Intelligent contract review for modern legal teams.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-[#666666] hover:text-[#1a1a1a] hover:border-gray-300 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-[#666666] hover:text-[#1a1a1a] hover:border-gray-300 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-[#1a1a1a] mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-[#1a1a1a] mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-[#1a1a1a] mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#666666] hover:text-[#1a1a1a] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#666666]">
              © {new Date().getFullYear()} Lawvek, Inc. All rights reserved.
            </p>
            <p className="text-xs text-[#666666] text-center max-w-xl">
              Lawvek provides AI-assisted contract analysis. Legal advice is provided only by licensed attorneys where explicitly engaged.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
