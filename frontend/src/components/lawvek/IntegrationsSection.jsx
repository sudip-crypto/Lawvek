import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const IntegrationsSection = () => {
  const integrations = [
    { name: 'Slack', color: '#E01E5A', angle: 0, icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    )},
    { name: 'Gmail', color: '#EA4335', angle: 45, icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    )},
    { name: 'MS Teams', color: '#6264A7', angle: 90, icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.625 8.073c1.688 0 3.063-1.406 3.063-3.136S22.313 1.8 20.625 1.8s-3.063 1.406-3.063 3.137 1.375 3.136 3.063 3.136zM12.89 7.5h7.875c.619 0 1.125.506 1.125 1.125v5.063c0 2.481-2.019 4.5-4.5 4.5h-.563v3.938c0 .103-.084.187-.188.187h-1.875c-.103 0-.188-.084-.188-.187v-3.938h-.562a4.506 4.506 0 0 1-4.5-4.5V8.625c0-.619.506-1.125 1.125-1.125h2.25zm-1.125-1.688c1.654 0 3-1.378 3-3.093S13.419.626 11.765.626s-3 1.378-3 3.093 1.346 3.093 3 3.093z"/>
      </svg>
    )},
    { name: 'Google Docs', color: '#4285F4', angle: 135, icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zm-.545 10.455H7.09v-1.364h7.09v1.364zm2.727-3.273H7.091v-1.364h9.818v1.364zm0-3.273H7.091V9.273h9.818v1.363z"/>
      </svg>
    )},
    { name: 'Discord', color: '#5865F2', angle: 180, icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    )},
    { name: 'Outlook', color: '#0078D4', angle: 225, icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 7.387v10.478c0 .23-.08.424-.238.576-.158.154-.352.23-.58.23h-8.547v-6.959l1.6 1.229c.102.078.214.116.336.116.121 0 .233-.038.336-.116l6.855-5.344c.078-.053.153-.076.228-.076.12 0 .238.061.35.183V7.39zM24 5.5c0 .208-.07.388-.212.539l-7.77 6.058-1.382-1.06V5.5h9.126c.228 0 .422.076.581.228.158.152.237.346.237.575v-.803z"/>
      </svg>
    )},
    { name: 'MS Word', color: '#2B579A', angle: 270, icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M23.004 1.5q.41 0 .703.293t.293.703v19.008q0 .41-.293.703t-.703.293H6.996q-.41 0-.703-.293T6 21.504V18H.996q-.41 0-.703-.293T0 17.004V6.996q0-.41.293-.703T.996 6H6V2.496q0-.41.293-.703t.703-.293zM6.035 11.203l1.442 4.735h1.64l1.57-7.876H9.036l-.937 4.653-1.325-4.5H5.38l-1.406 4.523-.938-4.676H1.312l1.57 7.876h1.641z"/>
      </svg>
    )},
    { name: 'Yahoo', color: '#6001D2', angle: 315, icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.913 12.958l2.607 6.564h-3.71l-2.479-6.564H6.857L3.591 6.478H0l5.67 13.044H3.076L4.381 24h7.079l-1.16-4.478h2.308L17.16 6.478h3.405L24 0h-3.665z"/>
      </svg>
    )},
  ];

  const radius = 160;

  return (
    <section 
      className="bg-[#0F172A] py-24 md:py-32 overflow-hidden"
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
            <p className="text-sm font-semibold text-emerald-400 tracking-wide uppercase mb-4">
              Integrations
            </p>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white mb-6">
              We live in your workflow.
            </h2>
            <p className="text-base text-[#94A3B8] leading-relaxed mb-6">
              Lawvek connects directly to the tools you already use and quietly keeps everything in sync behind the scenes. It processes your contracts continuously and turns them into clear, reliable insights.
            </p>
            <p className="text-base text-[#94A3B8] leading-relaxed mb-10">
              Instead of switching between platforms, Lawvek shows up where your team already works — so contract review stays accurate and out of your way.
            </p>
            
            {/* Integration list */}
            <div className="flex flex-wrap gap-3 mb-10">
              {integrations.map((integration) => (
                <div 
                  key={integration.name}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#1E293B] border border-[#334155] rounded-full text-sm text-[#94A3B8]"
                >
                  <span style={{ color: integration.color }}>{integration.icon}</span>
                  <span>{integration.name}</span>
                </div>
              ))}
            </div>
            
            <motion.a
              href="#cta"
              className="inline-flex items-center justify-center bg-white text-[#0F172A] px-8 py-4 rounded-lg hover:bg-[#F8FAFC] transition-all duration-300 font-semibold text-sm group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="integrations-cta"
            >
              Get Lawvek Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </motion.a>
          </motion.div>

          {/* Right - Orbital Integration Visual */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 animate-spin" style={{ animationDuration: '20s' }} />
              
              {/* Orbital rings */}
              <motion.div 
                className="absolute inset-4 rounded-full border border-[#1E293B]"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-16 rounded-full border border-[#334155]"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-28 rounded-full border border-dashed border-[#334155]/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div 
                  className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] shadow-2xl shadow-emerald-500/20 flex items-center justify-center border border-[#334155]"
                  animate={{ 
                    boxShadow: [
                      '0 0 40px rgba(16, 185, 129, 0.1)',
                      '0 0 60px rgba(16, 185, 129, 0.2)',
                      '0 0 40px rgba(16, 185, 129, 0.1)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-4xl font-serif text-white italic">L</span>
                </motion.div>
              </div>

              {/* Orbiting Integration Icons */}
              {integrations.map((integration, index) => {
                const angleRad = (integration.angle * Math.PI) / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;
                
                return (
                  <motion.div
                    key={integration.name}
                    className="absolute top-1/2 left-1/2 z-10"
                    style={{
                      x: x - 24,
                      y: y - 24,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div
                      className="relative group"
                      animate={{ 
                        y: [0, -8, 0],
                      }}
                      transition={{ 
                        duration: 3 + index * 0.5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      {/* Connector pulse */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                        style={{ backgroundColor: integration.color }}
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                      
                      {/* Icon container */}
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center cursor-pointer shadow-lg"
                        style={{ color: integration.color }}
                        whileHover={{ 
                          scale: 1.2, 
                          borderColor: integration.color,
                          boxShadow: `0 0 30px ${integration.color}40`
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {integration.icon}
                      </motion.div>
                      
                      {/* Tooltip */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        <span className="text-xs text-[#94A3B8] bg-[#0F172A] px-2 py-1 rounded border border-[#334155]">
                          {integration.name}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Animated connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
                    <stop offset="50%" stopColor="#10B981" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {integrations.map((integration, index) => {
                  const angleRad = (integration.angle * Math.PI) / 180;
                  const x = 210 + Math.cos(angleRad) * radius;
                  const y = 210 + Math.sin(angleRad) * radius;
                  
                  return (
                    <motion.line
                      key={`line-${index}`}
                      x1="210"
                      y1="210"
                      x2={x}
                      y2={y}
                      stroke="url(#lineGradient)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.3 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
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
