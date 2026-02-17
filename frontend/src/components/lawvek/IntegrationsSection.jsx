import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const IntegrationsSection = () => {
  const leftIntegrations = [
    {
      name: 'Slack',
      logo: (
        <svg viewBox="0 0 54 54" className="w-10 h-10">
          <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#E01E5A"/>
          <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#36C5F0"/>
          <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#2EB67D"/>
          <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.249m14.336 0v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.249a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#ECB22E"/>
        </svg>
      )
    },
    {
      name: 'Gmail',
      logo: (
        <svg viewBox="46 28 100 84" className="w-10 h-10">
          <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
          <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
          <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
          <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
          <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Teams',
      logo: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path fill="#5059C9" d="M34 16a4 4 0 100-8 4 4 0 000 8z"/>
          <path fill="#5059C9" d="M38 18h-8a2 2 0 00-2 2v10a6 6 0 0012 0V20a2 2 0 00-2-2z"/>
          <path fill="#7B83EB" d="M24 14a6 6 0 100-12 6 6 0 000 12z"/>
          <path fill="#7B83EB" d="M32 18H10a2 2 0 00-2 2v12a12 12 0 0024 0V20a2 2 0 00-2-2z"/>
          <rect fill="white" x="16" y="22" width="10" height="2" rx="1"/>
          <rect fill="white" x="20" y="22" width="2" height="12" rx="1"/>
        </svg>
      )
    },
    {
      name: 'Ironclad',
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect x="10" y="10" width="28" height="8" rx="1" fill="#00CA88"/>
          <rect x="18" y="10" width="10" height="80" fill="#00CA88"/>
          <rect x="10" y="82" width="28" height="8" rx="1" fill="#00CA88"/>
          <rect x="62" y="10" width="28" height="8" rx="1" fill="#00CA88"/>
          <rect x="72" y="10" width="10" height="80" fill="#00CA88"/>
          <rect x="62" y="82" width="28" height="8" rx="1" fill="#00CA88"/>
          <rect x="28" y="36" width="44" height="8" rx="1" fill="#00CA88"/>
          <rect x="28" y="56" width="44" height="8" rx="1" fill="#00CA88"/>
        </svg>
      )
    },
    {
      name: 'SpotDraft',
      logo: (
        <svg viewBox="0 0 256 256" className="w-10 h-10">
          <rect width="256" height="256" rx="40" fill="#2563EB"/>
          <path d="M204.656 114.669H167.895L205.736 20.8872C206.7 18.3112 205.03 16.0126 202.752 16L127.945 16.0168C127.071 16.0168 126.222 16.2563 125.581 16.7858C125.581 16.7858 98.3473 40.2681 89.8795 47.6725C88.8369 48.5844 88.328 49.408 87.8108 50.7359C83.464 61.8677 48.2876 148.729 48.2876 148.729C47.163 151.851 49.5765 153.473 51.3825 153.473H99.0697C99.0697 153.473 71.8685 221.966 71.8603 222.003L66.5326 235.346C65.2437 238.577 69.0199 241.43 71.6551 239.216C71.6551 239.216 202.821 124.124 206.77 120.75C208.909 118.922 208.293 114.669 204.652 114.669H204.656ZM146.847 101.47L141.991 113.497C141.708 114.207 141.031 114.669 140.284 114.669L89.6537 114.623C88.9272 114.623 88.4306 113.871 88.7015 113.177L93.5367 101.201C93.8199 100.487 94.4972 100.02 95.2483 100.02H145.899C146.63 100.02 147.126 100.776 146.847 101.47ZM161.172 66.0574L156.325 78.0758C156.041 78.786 155.364 79.2483 154.617 79.2483L103.975 79.2273C103.248 79.2273 102.751 78.475 103.022 77.7817L107.849 65.7884C108.133 65.074 108.81 64.6076 109.561 64.6076H160.22C160.951 64.6076 161.447 65.364 161.168 66.0574H161.172Z" fill="white"/>
        </svg>
      )
    }
  ];

  const rightIntegrations = [
    {
      name: 'HubSpot',
      logo: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect x="56" y="6" width="7" height="16" rx="3.5" fill="#FF7A59"/>
          <circle cx="59.5" cy="30" r="10" fill="#FF7A59"/>
          <circle cx="50" cy="52" r="11" fill="none" stroke="#FF7A59" strokeWidth="7"/>
          <rect x="55" y="38" width="7" height="7" fill="#FF7A59"/>
          <circle cx="26" cy="82" r="10" fill="#FF7A59"/>
          <line x1="42" y1="60" x2="32" y2="74" stroke="#FF7A59" strokeWidth="7" strokeLinecap="round"/>
          <circle cx="74" cy="82" r="10" fill="#FF7A59"/>
          <line x1="58" y1="60" x2="68" y2="74" stroke="#FF7A59" strokeWidth="7" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Google Docs',
      logo: (
        <svg viewBox="0 0 48 64" className="w-10 h-10">
          <path d="M30 0H6a6 6 0 00-6 6v52a6 6 0 006 6h36a6 6 0 006-6V18L30 0z" fill="#4285F4"/>
          <path d="M30 0v12a6 6 0 006 6h12L30 0z" fill="#A1C2FA"/>
          <rect x="10" y="30" width="22" height="3" rx="1.5" fill="white" opacity="0.9"/>
          <rect x="10" y="37" width="28" height="3" rx="1.5" fill="white" opacity="0.9"/>
          <rect x="10" y="44" width="20" height="3" rx="1.5" fill="white" opacity="0.9"/>
          <rect x="10" y="51" width="26" height="3" rx="1.5" fill="white" opacity="0.9"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Word',
      logo: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M8 4h32a4 4 0 014 4v16H4V8a4 4 0 014-4z" fill="#41A5EE"/>
          <path d="M4 24h40v16a4 4 0 01-4 4H8a4 4 0 01-4-4V24z" fill="#185ABD"/>
          <path d="M12 13h5l3.5 14.5L24.5 13h5l4 14.5L37 13h5L36 35h-5.5l-3.5-13L23.5 35H18L12 13z" fill="white"/>
        </svg>
      )
    },
    {
      name: 'Notion',
      logo: (
        <svg viewBox="0 0 120 120" className="w-10 h-10">
          <path d="M27 14L95 8c4-.3 7 2.5 7 6.5V98c0 4-2.5 7-6.5 7.3L27 112c-4 .3-7-2.5-7-6.5V20.5c0-4 2.5-7 6.5-7.3z" fill="white"/>
          <path d="M27 14L95 8l3-1.5L30 12.5z" fill="#E0E0E0"/>
          <path d="M42 35L54 35L74 82L74 35L86 35L86 90L74 90L54 43L54 90L42 90Z" fill="#000"/>
        </svg>
      )
    },
    {
      name: 'Jira',
      logo: (
        <svg viewBox="0 0 256 256" className="w-10 h-10">
          <defs>
            <linearGradient id="jira-g1" x1="98%" y1="0%" x2="58%" y2="40%">
              <stop offset="0%" stopColor="#0052CC"/>
              <stop offset="92%" stopColor="#2684FF"/>
            </linearGradient>
            <linearGradient id="jira-g2" x1="100%" y1="0%" x2="55%" y2="44%">
              <stop offset="0%" stopColor="#0052CC"/>
              <stop offset="92%" stopColor="#2684FF"/>
            </linearGradient>
          </defs>
          <path d="M244.658 0H121.707a55.502 55.502 0 0 0 55.502 55.502h22.177V77.68c.02 30.625 24.84 55.447 55.466 55.502V10.87C254.852 4.862 249.99 0 244.658 0Z" fill="url(#jira-g1)"/>
          <path d="M183.822 61.262H60.872c.019 30.625 24.838 55.447 55.466 55.502h22.177v22.177c.02 30.63 24.84 55.45 55.466 55.502V72.131c0-6.009-4.862-10.87-10.159-10.87Z" fill="url(#jira-g2)"/>
          <path d="M122.951 122.523H0c0 30.653 24.816 55.502 55.502 55.502h22.177v22.177c.02 30.597 24.798 55.426 55.381 55.502V133.392c0-6.009-4.863-10.87-10.109-10.87Z" fill="#2684FF"/>
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
                  data-testid={`integration-icon-${integration.name.toLowerCase().replace(/\s+/g, '-')}`}
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
                  data-testid={`integration-icon-${integration.name.toLowerCase().replace(/\s+/g, '-')}`}
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
