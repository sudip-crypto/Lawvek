import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const IntegrationsSection = () => {
  // Left side integrations: Slack, Gmail, Microsoft Teams, Ironclad, SpotDraft
  const leftIntegrations = [
    {
      name: 'Slack',
      logo: (
        <svg viewBox="0 0 127 127" className="w-10 h-10">
          <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A"/>
          <path d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z" fill="#36C5F0"/>
          <path d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z" fill="#2EB67D"/>
          <path d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z" fill="#ECB22E"/>
        </svg>
      )
    },
    {
      name: 'Gmail',
      logo: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
          <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
          <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
          <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
          <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0C43.076,8,45,9.924,45,12.298z"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Teams',
      logo: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path fill="#5059C9" d="M44,22v11c0,1.105-0.895,2-2,2H32l0-15h10C43.105,20,44,20.895,44,22z"/>
          <circle fill="#5059C9" cx="38" cy="14" r="4"/>
          <circle fill="#7B83EB" cx="24" cy="14" r="6"/>
          <path fill="#7B83EB" d="M32,22v14c0,1.105-0.895,2-2,2H12c-1.105,0-2-0.895-2-2V22c0-1.105,0.895-2,2-2h18C31.105,20,32,20.895,32,22z"/>
          <path fill="#fff" d="M25,26h-3v7h-2v-7h-3v-2h8V26z"/>
        </svg>
      )
    },
    {
      name: 'Ironclad',
      logo: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect width="48" height="48" rx="10" fill="#1E1E2E"/>
          <path d="M12 14h24v2H12zM12 20h24v2H12zM12 26h18v2H12zM12 32h14v2H12z" fill="#6366F1"/>
          <circle cx="36" cy="33" r="5" fill="#818CF8"/>
          <path d="M34 33l2 2 4-4" stroke="#1E1E2E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'SpotDraft',
      logo: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect width="48" height="48" rx="10" fill="#2563EB"/>
          <circle cx="24" cy="24" r="10" fill="none" stroke="#fff" strokeWidth="2.5"/>
          <circle cx="24" cy="24" r="4" fill="#fff"/>
          <path d="M24 10V6M24 42v-4M10 24H6M42 24h-4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  // Right side integrations: HubSpot, Google Docs, Microsoft Word, Notion, Jira
  const rightIntegrations = [
    {
      name: 'HubSpot',
      logo: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path fill="#FF7A59" d="M33.5,19.5v-3.8c1.2-0.7,2-2,2-3.4c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,1.4,0.8,2.7,2,3.4v3.8c-2.1,0.5-3.9,1.6-5.3,3.1L14.1,15c0.1-0.4,0.2-0.8,0.2-1.2c0-2.5-2-4.5-4.5-4.5S5.3,11.3,5.3,13.8s2,4.5,4.5,4.5c0.8,0,1.6-0.2,2.3-0.6l10,7.6c-0.9,1.5-1.4,3.3-1.4,5.2c0,5.5,4.5,10,10,10c4.8,0,8.7-3.4,9.7-7.9l4.1,1.6c0.2,0.1,0.5,0,0.6-0.1c0.2-0.2,0.2-0.4,0.1-0.6l-3.9-9.7C39.4,21.5,36.7,19.9,33.5,19.5z M30.8,36.3c-3,0-5.5-2.5-5.5-5.5s2.5-5.5,5.5-5.5s5.5,2.5,5.5,5.5S33.8,36.3,30.8,36.3z"/>
        </svg>
      )
    },
    {
      name: 'Google Docs',
      logo: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path fill="#2196F3" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"/>
          <path fill="#BBDEFB" d="M40,13H30V3L40,13z"/>
          <path fill="#1565C0" d="M30,13l10,10V13H30z"/>
          <rect x="14" y="23" fill="#E3F2FD" width="20" height="2"/>
          <rect x="14" y="28" fill="#E3F2FD" width="20" height="2"/>
          <rect x="14" y="33" fill="#E3F2FD" width="20" height="2"/>
          <rect x="14" y="38" fill="#E3F2FD" width="12" height="2"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Word',
      logo: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="8" y="8" width="32" height="32" rx="2" fill="#185ABD"/>
          <path d="M41,10H23v28h18c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z" fill="#2B579A"/>
          <rect x="27" y="15" width="11" height="2" fill="#fff"/>
          <rect x="27" y="20" width="11" height="2" fill="#fff"/>
          <rect x="27" y="25" width="11" height="2" fill="#fff"/>
          <rect x="27" y="30" width="11" height="2" fill="#fff"/>
          <polygon fill="#fff" points="22,34 19.5,22 17.5,34 15.5,34 12,18 14.5,18 16.5,30 18.5,18 20.5,18 22.5,30 24.5,18 27,18 23.5,34"/>
        </svg>
      )
    },
    {
      name: 'Notion',
      logo: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect width="48" height="48" rx="8" fill="#fff"/>
          <path fill="#000" d="M10 10h2l10 14V10h2.5v20H22L12 15.8V30H10V10zM28 10h10v2.5H31v5.5h6v2.5h-6V25h7v2.5H28V10z"/>
          <rect x="4" y="4" width="40" height="40" rx="6" stroke="#000" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      name: 'Jira',
      logo: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <defs>
            <linearGradient id="jira-blue-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2684FF"/>
              <stop offset="100%" stopColor="#0052CC"/>
            </linearGradient>
            <linearGradient id="jira-blue-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2684FF"/>
              <stop offset="100%" stopColor="#0052CC"/>
            </linearGradient>
          </defs>
          <path d="M24.5 4L44 23.5 24.5 43 5 23.5 24.5 4z" fill="url(#jira-blue-1)"/>
          <path d="M24.5 18L31 24.5 24.5 31 18 24.5 24.5 18z" fill="#fff"/>
        </svg>
      )
    }
  ];

  const iconSpacing = 80;
  const startOffset = 20;

  return (
    <section 
      className="bg-[#0F172A] py-24 md:py-32 overflow-hidden border-y border-[#1E293B]"
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
              Lawvek connects directly to the tools you already use — from Slack and email to your CLM platform. We process your contracts continuously and turn them into clear, reliable insights.
            </p>
            <p className="text-base text-[#94A3B8] leading-relaxed mb-10">
              Whether you use Ironclad, SpotDraft, or any other contract management system, Lawvek integrates seamlessly into your existing workflow.
            </p>
            
            <motion.a
              href="#cta"
              className="inline-flex items-center justify-center bg-white text-[#0F172A] px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 font-semibold text-sm group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="integrations-cta"
            >
              Get Priority Access
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
            <div className="relative w-[520px] h-[450px]">
              
              {/* Left Integration Icons */}
              {leftIntegrations.map((integration, index) => (
                <motion.div 
                  key={integration.name}
                  className="absolute left-0 w-[72px] h-[72px] rounded-2xl border border-[#334155] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer z-10 bg-[#1E293B] overflow-hidden"
                  style={{ top: startOffset + index * iconSpacing }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  title={integration.name}
                >
                  {integration.logo}
                </motion.div>
              ))}

              {/* Right Integration Icons */}
              {rightIntegrations.map((integration, index) => (
                <motion.div 
                  key={integration.name}
                  className="absolute right-0 w-[72px] h-[72px] rounded-2xl border border-[#334155] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer z-10 bg-[#1E293B] overflow-hidden"
                  style={{ top: startOffset + index * iconSpacing }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  title={integration.name}
                >
                  {integration.logo}
                </motion.div>
              ))}

              {/* Central Hub - Lawvek */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div 
                  className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#0F172A] shadow-2xl flex items-center justify-center border border-[#334155]"
                  animate={{ 
                    boxShadow: [
                      '0 4px 40px rgba(245, 158, 11, 0.15)',
                      '0 4px 60px rgba(245, 158, 11, 0.3)',
                      '0 4px 40px rgba(245, 158, 11, 0.15)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-5xl font-serif text-white italic">L</span>
                </motion.div>
              </div>

              {/* SVG Connection Paths */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 520 450" fill="none">
                {/* Left paths - from icons to hub */}
                {leftIntegrations.map((_, index) => {
                  const iconY = startOffset + index * iconSpacing + 36;
                  const hubX = 260;
                  const hubY = 225;
                  return (
                    <path 
                      key={`left-path-${index}`}
                      d={`M 72 ${iconY} C 150 ${iconY}, 190 ${hubY}, ${hubX - 28} ${hubY}`}
                      stroke="#334155" 
                      strokeWidth="1.5" 
                      fill="none"
                      strokeLinecap="round"
                    />
                  );
                })}
                
                {/* Right paths - from hub to icons */}
                {rightIntegrations.map((_, index) => {
                  const iconY = startOffset + index * iconSpacing + 36;
                  const hubX = 260;
                  const hubY = 225;
                  return (
                    <path 
                      key={`right-path-${index}`}
                      d={`M ${hubX + 28} ${hubY} C 330 ${hubY}, 370 ${iconY}, 448 ${iconY}`}
                      stroke="#334155" 
                      strokeWidth="1.5" 
                      fill="none"
                      strokeLinecap="round"
                    />
                  );
                })}

                {/* Animated dots on left paths */}
                {leftIntegrations.map((_, index) => {
                  const iconY = startOffset + index * iconSpacing + 36;
                  const hubY = 225;
                  const path = `M 72 ${iconY} C 150 ${iconY}, 190 ${hubY}, 232 ${hubY}`;
                  return (
                    <motion.circle
                      key={`left-dot-${index}`}
                      r="4"
                      fill="#F59E0B"
                      filter="drop-shadow(0 0 4px rgba(245, 158, 11, 0.5))"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        offsetDistance: ['0%', '100%'],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.4,
                        ease: "easeInOut",
                      }}
                      style={{
                        offsetPath: `path('${path}')`,
                      }}
                    />
                  );
                })}

                {/* Animated dots on right paths */}
                {rightIntegrations.map((_, index) => {
                  const iconY = startOffset + index * iconSpacing + 36;
                  const hubY = 225;
                  const path = `M 288 ${hubY} C 330 ${hubY}, 370 ${iconY}, 448 ${iconY}`;
                  return (
                    <motion.circle
                      key={`right-dot-${index}`}
                      r="4"
                      fill="#F59E0B"
                      filter="drop-shadow(0 0 4px rgba(245, 158, 11, 0.5))"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        offsetDistance: ['0%', '100%'],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 1.2 + index * 0.4,
                        ease: "easeInOut",
                      }}
                      style={{
                        offsetPath: `path('${path}')`,
                      }}
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
