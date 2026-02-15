import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const IntegrationsSection = () => {
  const leftIntegrations = [
    { name: 'Slack', color: '#E01E5A', bg: '#FDF2F4', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    )},
    { name: 'Gmail', color: '#EA4335', bg: '#FEF2F2', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    )},
    { name: 'MS Teams', color: '#6264A7', bg: '#F3F3FA', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M20.625 8.073c1.688 0 3.063-1.406 3.063-3.136S22.313 1.8 20.625 1.8s-3.063 1.406-3.063 3.137 1.375 3.136 3.063 3.136zM12.89 7.5h7.875c.619 0 1.125.506 1.125 1.125v5.063c0 2.481-2.019 4.5-4.5 4.5h-.563v3.938c0 .103-.084.187-.188.187h-1.875c-.103 0-.188-.084-.188-.187v-3.938h-.562a4.506 4.506 0 0 1-4.5-4.5V8.625c0-.619.506-1.125 1.125-1.125h2.25zm-1.125-1.688c1.654 0 3-1.378 3-3.093S13.419.626 11.765.626s-3 1.378-3 3.093 1.346 3.093 3 3.093z"/>
      </svg>
    )},
    { name: 'Ironclad', color: '#1a1a1a', bg: '#F5F5F5', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.08 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
      </svg>
    )},
    { name: 'SpotDraft', color: '#6366F1', bg: '#EEF2FF', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
      </svg>
    )},
  ];

  const rightIntegrations = [
    { name: 'Google Docs', color: '#4285F4', bg: '#EFF6FF', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818v1.364zm0-3.273H7.091V9.273h9.818v1.363z"/>
      </svg>
    )},
    { name: 'MS Word', color: '#2B579A', bg: '#EFF6FF', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M23.004 1.5q.41 0 .703.293t.293.703v19.008q0 .41-.293.703t-.703.293H6.996q-.41 0-.703-.293T6 21.504V18H.996q-.41 0-.703-.293T0 17.004V6.996q0-.41.293-.703T.996 6H6V2.496q0-.41.293-.703t.703-.293zM6.035 11.203l1.442 4.735h1.64l1.57-7.876H9.036l-.937 4.653-1.325-4.5H5.38l-1.406 4.523-.938-4.676H1.312l1.57 7.876h1.641z"/>
      </svg>
    )},
    { name: 'Outlook', color: '#0078D4', bg: '#EFF6FF', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M24 7.387v10.478c0 .23-.08.424-.238.576-.158.154-.352.23-.58.23h-8.547v-6.959l1.6 1.229c.102.078.214.116.336.116.121 0 .233-.038.336-.116l6.855-5.344c.078-.053.153-.076.228-.076.12 0 .238.061.35.183V7.39zM24 5.5c0 .208-.07.388-.212.539l-7.77 6.058-1.382-1.06V5.5h9.126c.228 0 .422.076.581.228.158.152.237.346.237.575v-.803z"/>
      </svg>
    )},
    { name: 'DocuSign', color: '#FFCC00', bg: '#FFFBEB', icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-7.332 7.332a.75.75 0 01-1.06 0l-3.396-3.396a.75.75 0 111.06-1.06l2.866 2.866 6.802-6.802a.75.75 0 111.06 1.06z"/>
      </svg>
    )},
  ];

  // Left path definitions - curves from icons to parallel horizontal lines entering the hub
  const leftPaths = [
    "M 55 50 C 100 50, 140 200, 200 200 L 220 200",
    "M 55 120 C 100 120, 140 210, 200 210 L 220 210",
    "M 55 190 C 120 190, 160 220, 200 220 L 220 220",
    "M 55 260 C 100 260, 140 230, 200 230 L 220 230",
    "M 55 330 C 100 330, 140 240, 200 240 L 220 240",
  ];

  // Right path definitions - parallel horizontal lines from hub curving out to icons
  const rightPaths = [
    "M 280 205 L 300 205 C 360 205, 400 100, 445 100",
    "M 280 215 L 300 215 C 340 215, 400 175, 445 175",
    "M 280 225 L 300 225 C 340 225, 400 250, 445 250",
    "M 280 235 L 300 235 C 360 235, 400 325, 445 325",
  ];

  return (
    <section 
      className="bg-[#FAFAFA] py-24 md:py-32 overflow-hidden border-y border-[#E2E8F0]"
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
              Lawvek connects directly to the tools you already use — from Slack and email to your CLM platform. We process your contracts continuously and turn them into clear, reliable insights.
            </p>
            <p className="text-base text-[#64748B] leading-relaxed mb-10">
              Whether you use Ironclad, SpotDraft, or any other contract management system, Lawvek integrates seamlessly into your existing workflow.
            </p>
            
            <motion.a
              href="#cta"
              className="inline-flex items-center justify-center bg-[#0F172A] text-white px-8 py-4 rounded-lg hover:bg-[#1E293B] transition-all duration-300 font-semibold text-sm group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="integrations-cta"
            >
              Get Lawvek Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </motion.a>
          </motion.div>

          {/* Right - Flow Integration Visual */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-[500px] h-[420px]">
              {/* SVG Paths and Animations */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 420" fill="none">
                {/* Left curved paths */}
                {leftPaths.map((path, index) => (
                  <g key={`left-path-${index}`}>
                    <path d={path} stroke="#E2E8F0" strokeWidth="2" fill="none" />
                    <motion.circle
                      r="5"
                      fill="#10B981"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        offsetDistance: ['0%', '100%'],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut",
                      }}
                      style={{
                        offsetPath: `path('${path}')`,
                      }}
                    />
                  </g>
                ))}

                {/* Right curved paths */}
                {rightPaths.map((path, index) => (
                  <g key={`right-path-${index}`}>
                    <path d={path} stroke="#E2E8F0" strokeWidth="2" fill="none" />
                    <motion.circle
                      r="5"
                      fill="#10B981"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        offsetDistance: ['0%', '100%'],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 1.2 + index * 0.3,
                        ease: "easeInOut",
                      }}
                      style={{
                        offsetPath: `path('${path}')`,
                      }}
                    />
                  </g>
                ))}
              </svg>

              {/* Left Integration Icons */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-4">
                {leftIntegrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    className="w-14 h-14 rounded-xl border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
                    style={{ backgroundColor: integration.bg, color: integration.color }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ borderColor: integration.color }}
                    title={integration.name}
                  >
                    {integration.icon}
                  </motion.div>
                ))}
              </div>

              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div 
                  className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#0F172A] shadow-xl flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      '0 4px 30px rgba(16, 185, 129, 0.15)',
                      '0 4px 50px rgba(16, 185, 129, 0.25)',
                      '0 4px 30px rgba(16, 185, 129, 0.15)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-4xl font-serif text-white italic">L</span>
                </motion.div>
              </div>

              {/* Right Integration Icons */}
              <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-6">
                {rightIntegrations.map((integration, index) => (
                  <motion.div
                    key={integration.name}
                    className="w-14 h-14 rounded-xl border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
                    style={{ backgroundColor: integration.bg, color: integration.color }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ borderColor: integration.color }}
                    title={integration.name}
                  >
                    {integration.icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
