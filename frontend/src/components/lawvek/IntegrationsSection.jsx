import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const IntegrationsSection = () => {
  const leftIntegrations = [
    { name: 'Slack', color: '#E01E5A', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    )},
    { name: 'Gmail', color: '#EA4335', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    )},
    { name: 'MS Teams', color: '#6264A7', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M20.625 8.073c1.688 0 3.063-1.406 3.063-3.136S22.313 1.8 20.625 1.8s-3.063 1.406-3.063 3.137 1.375 3.136 3.063 3.136zM12.89 7.5h7.875c.619 0 1.125.506 1.125 1.125v5.063c0 2.481-2.019 4.5-4.5 4.5h-.563v3.938c0 .103-.084.187-.188.187h-1.875c-.103 0-.188-.084-.188-.187v-3.938h-.562a4.506 4.506 0 0 1-4.5-4.5V8.625c0-.619.506-1.125 1.125-1.125h2.25zm-1.125-1.688c1.654 0 3-1.378 3-3.093S13.419.626 11.765.626s-3 1.378-3 3.093 1.346 3.093 3 3.093zM1.172 8.25h9c.647 0 1.172.525 1.172 1.172v5.578a4.69 4.69 0 0 1-4.688 4.688H6.47v4.125c0 .103-.084.187-.188.187H4.22a.188.188 0 0 1-.188-.188V19.69h-.187A4.69 4.69 0 0 1 .156 15V9.422C0 8.775.525 8.25 1.172 8.25z"/>
      </svg>
    )},
    { name: 'MS Word', color: '#2B579A', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M23.004 1.5q.41 0 .703.293t.293.703v19.008q0 .41-.293.703t-.703.293H6.996q-.41 0-.703-.293T6 21.504V18H.996q-.41 0-.703-.293T0 17.004V6.996q0-.41.293-.703T.996 6H6V2.496q0-.41.293-.703t.703-.293zM6.035 11.203l1.442 4.735h1.64l1.57-7.876H9.036l-.937 4.653-1.325-4.5H5.38l-1.406 4.523-.938-4.676H1.312l1.57 7.876h1.641zM22.5 21v-3h-15v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3h-15v3z"/>
      </svg>
    )},
    { name: 'Yahoo', color: '#6001D2', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12.913 12.958l2.607 6.564h-3.71l-2.479-6.564H6.857L3.591 6.478H0l5.67 13.044H3.076L4.381 24h7.079l-1.16-4.478h2.308L17.16 6.478h3.405L24 0h-3.665z"/>
      </svg>
    )},
  ];

  const rightIntegrations = [
    { name: 'Google Docs', color: '#4285F4', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818v1.364zm0-3.273H7.091V9.273h9.818v1.363zM14.727 6h6l-6-6v6z"/>
      </svg>
    )},
    { name: 'Discord', color: '#5865F2', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    )},
    { name: 'Outlook', color: '#0078D4', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M24 7.387v10.478c0 .23-.08.424-.238.576-.158.154-.352.23-.58.23h-8.547v-6.959l1.6 1.229c.102.078.214.116.336.116.121 0 .233-.038.336-.116l6.855-5.344c.078-.053.153-.076.228-.076.12 0 .238.061.35.183V7.39zM24 5.5c0 .208-.07.388-.212.539l-7.77 6.058-1.382-1.06V5.5h9.126c.228 0 .422.076.581.228.158.152.237.346.237.575v-.803zM14.636 5.5V24H.819A.819.819 0 0 1 0 23.182V5.5h14.636zm-2.364 9.19c0-1.158-.353-2.133-1.058-2.926-.706-.793-1.597-1.19-2.672-1.19-1.125 0-2.035.38-2.73 1.14-.694.76-1.042 1.752-1.042 2.976 0 1.166.34 2.117 1.018 2.855.68.738 1.564 1.107 2.654 1.107 1.126 0 2.035-.38 2.73-1.14.694-.76 1.1-1.753 1.1-2.822zm-2.127.076c0 .718-.153 1.295-.458 1.733-.306.438-.723.656-1.253.656-.537 0-.96-.213-1.27-.64-.31-.427-.465-1.009-.465-1.749 0-.718.153-1.295.458-1.733.306-.438.723-.656 1.253-.656.537 0 .96.213 1.27.64.31.427.465 1.009.465 1.749z"/>
      </svg>
    )},
  ];

  return (
    <section 
      className="bg-[#FAFAFA] py-24 md:py-32 overflow-hidden"
      data-testid="integrations-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mb-4">
              Integrations
            </p>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#0F172A] mb-6">
              We live in your workflow.
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed mb-6">
              Lawvek connects directly to the tools you already use and quietly keeps everything in sync behind the scenes. It processes your contracts continuously and turns them into clear, reliable insights and actions.
            </p>
            <p className="text-base text-[#64748B] leading-relaxed mb-10">
              Instead of switching between platforms, Lawvek shows up where your team already works — so contract review stays accurate, up to date, and out of your way.
            </p>
            
            {/* Divider with logo */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-[#E2E8F0]" />
              <span className="text-2xl font-serif text-[#0F172A] italic">L</span>
              <div className="flex-1 h-px bg-[#E2E8F0]" />
            </div>
            
            <motion.a
              href="#cta"
              className="inline-flex items-center justify-center bg-[#0F172A] text-white px-8 py-4 rounded-lg hover:bg-[#1E293B] transition-all duration-300 font-medium text-sm group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="integrations-cta"
            >
              Get Lawvek Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </motion.a>
          </motion.div>

          {/* Right - Integration Hub Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Central Hub */}
              <motion.div 
                className="absolute z-20 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] shadow-2xl flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-3xl font-serif text-white italic">L</span>
              </motion.div>

              {/* Left Side Integrations */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                {leftIntegrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    className="relative flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {/* Icon Box */}
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center hover:shadow-md hover:border-[#CBD5E1] transition-all duration-300"
                      style={{ color: integration.color }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {integration.icon}
                    </motion.div>
                    {/* Connector Line */}
                    <motion.div 
                      className="w-16 lg:w-24 h-[2px] bg-gradient-to-r from-[#E2E8F0] to-[#CBD5E1]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Right Side Integrations */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                {rightIntegrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    className="relative flex items-center flex-row-reverse"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {/* Icon Box */}
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center hover:shadow-md hover:border-[#CBD5E1] transition-all duration-300"
                      style={{ color: integration.color }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {integration.icon}
                    </motion.div>
                    {/* Connector Line */}
                    <motion.div 
                      className="w-16 lg:w-24 h-[2px] bg-gradient-to-l from-[#E2E8F0] to-[#CBD5E1]"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      style={{ transformOrigin: 'right' }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Connection lines to center */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                {/* Left connections */}
                {leftIntegrations.map((_, index) => {
                  const startY = 50 + (index - 2) * 14;
                  return (
                    <motion.path
                      key={`left-${index}`}
                      d={`M 140 ${startY}% Q 200 ${startY}%, 240 50%`}
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    />
                  );
                })}
                {/* Right connections */}
                {rightIntegrations.map((_, index) => {
                  const startY = 36 + (index) * 14;
                  return (
                    <motion.path
                      key={`right-${index}`}
                      d={`M 360 ${startY}% Q 300 ${startY}%, 260 50%`}
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
