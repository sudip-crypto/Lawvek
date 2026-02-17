import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const IntegrationsSection = () => {
  // Left side integrations: Slack, Gmail, Microsoft Teams, Ironclad, SpotDraft
  const leftIntegrations = [
    {
      name: 'Slack',
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
           <path d="M5.042 15.165a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 17.686a2.528 2.528 0 0 1 2.522-2.521zm13.917-3.33a2.528 2.528 0 0 1 2.522 2.521 2.528 2.528 0 0 1-2.522 2.521h-2.52a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521zM5.042 5.17a2.528 2.528 0 0 1 2.521-2.521 2.528 2.528 0 0 1 2.521 2.521v2.52a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521zm13.917 3.33a2.528 2.528 0 0 1 2.522-2.521 2.528 2.528 0 0 1 2.521 2.521H21.48a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521zM8.834 18.478a2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 17.686a2.528 2.528 0 0 1 2.522-2.521h3.791a2.528 2.528 0 0 1 2.521 2.521z" fill="#E01E5A"/>
           <path d="M5.042 15.165a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 17.686a2.528 2.528 0 0 1 2.522-2.521zm13.917-3.33a2.528 2.528 0 0 1 2.522 2.521 2.528 2.528 0 0 1-2.522 2.521h-2.52a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521z" fill="#36C5F0"/>
           <path d="M2.522 15.165h2.521a2.528 2.528 0 0 1 2.521 2.521v2.52a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521v-2.52z" fill="#2EB67D"/>
           <path d="M18.959 8.5H16.44a2.528 2.528 0 0 1-2.522-2.521V3.46a2.528 2.528 0 0 1 2.522-2.521 2.528 2.528 0 0 1 2.521 2.521v2.52a2.528 2.528 0 0 1-2.521 2.52z" fill="#ECB22E"/>
        </svg>
      )
    },
    {
      name: 'Gmail',
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <path fill="#EA4335" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" opacity="0"/>
          <path fill="#4285F4" d="M4 6v12h4.5V10.5L12 13.25 15.5 10.5V18H20V6l-8 5z"/>
          <path fill="#34A853" d="M15.5 18H20v-7.5l-4.5 3.375"/>
          <path fill="#FBBC04" d="M4 10.5V18h4.5v-7.5"/>
          <path fill="#EA4335" d="M12 13.25L4 7.25V6h.025l7.975 6 7.975-6H20v1.25z"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Teams',
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <path fill="#5059C9" d="M17.5 11c1.38 0 2.5-1.12 2.5-2.5S18.88 6 17.5 6s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5zm0 1c-1.67 0-5 1.08-5 3.25V17h10v-1.75c0-2.17-3.33-3.25-5-3.25z"/>
          <path fill="#7B83EB" d="M9 11c1.66 0 3-1.34 3-3S10.66 5 9 5 6 6.34 6 8s1.34 3 3 3zm0 1c-2.33 0-7 1.17-7 3.5V18h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    },
    {
      name: 'Ironclad',
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
           {/* Custom "Gate/H" shape matching the user's screenshot */}
           <path d="M5 4h14v2H5z" fill="#00CA88"/> {/* Top horizontal bar */}
           <path d="M6 6h2v14H6z" fill="#00CA88"/> {/* Left pillar */}
           <path d="M16 6h2v14h-2z" fill="#00CA88"/> {/* Right pillar */}
           <rect x="9" y="10" width="6" height="2" fill="#00CA88"/> {/* Middle bar */}
           <rect x="9" y="16" width="6" height="2" fill="#00CA88"/> {/* Bottom bar */}
        </svg>
      )
    },
    {
      name: 'SpotDraft',
      logo: (
        <svg viewBox="0 0 256 256" className="w-10 h-10">
          <rect width="256" height="256" rx="40" fill="#2563EB"/>
          <path d="M204.656 114.669H167.895L205.736 20.8872C206.7 18.3112 205.03 16.0126 202.752 16L127.945 16.0168C127.071 16.0168 126.222 16.2563 125.581 16.7858C125.581 16.7858 98.3473 40.2681 89.8795 47.6725C88.8369 48.5844 88.328 49.408 87.8108 50.7359C83.464 61.8677 48.2876 148.729 48.2876 148.729C47.163 151.851 49.5765 153.469 51.3825 153.473H99.0697C99.0697 153.473 71.8685 221.966 71.8603 222.003L66.5326 235.346C65.2437 238.577 69.0199 241.43 71.6551 239.216C71.6551 239.216 202.821 124.124 206.77 120.75C208.909 118.922 208.293 114.669 204.652 114.669H204.656ZM146.847 101.47L141.991 113.497C141.708 114.207 141.031 114.669 140.284 114.669L89.6537 114.623C88.9272 114.623 88.4306 113.871 88.7015 113.177L93.5367 101.201C93.8199 100.487 94.4972 100.02 95.2483 100.02H145.899C146.63 100.02 147.126 100.776 146.847 101.47ZM161.172 66.0574L156.325 78.0758C156.041 78.786 155.364 79.2483 154.617 79.2483L103.975 79.2273C103.248 79.2273 102.751 78.475 103.022 77.7817L107.849 65.7884C108.133 65.074 108.81 64.6076 109.561 64.6076H160.22C160.951 64.6076 161.447 65.364 161.168 66.0574H161.172Z" fill="white"/>
        </svg>
      )
    }
  ];

  // Right side integrations: HubSpot, Google Docs, Microsoft Word, Notion, Jira
  const rightIntegrations = [
    {
      name: 'HubSpot',
      logo: (
        <svg viewBox="0 0 1024 1024" className="w-10 h-10">
           <circle cx="512" cy="512" r="512" fill="#ff7a59"/>
           <path d="M623.8 624.94c-38.23 0-69.24-30.67-69.24-68.51s31-68.52 69.24-68.52 69.23 30.68 69.23 68.52-31 68.51-69.23 68.51zM400.19 624.94c-38.23 0-69.24-30.67-69.24-68.51s31-68.52 69.24-68.52 69.23 30.68 69.23 68.52-31 68.51-69.23 68.51zM623.8 556.44h-52.74v-68.52h52.74c21.13 0 38.23 17.1 38.23 38.26s-17.1 30.26-38.23 30.26zM400.19 556.44h-52.74v-68.52h52.74c21.13 0 38.23 17.1 38.23 38.26s-17.1 30.26-38.23 30.26zM400.19 399.23h223.62v52.74H400.19v-52.74z" fill="white"/>
        </svg>
      )
    },
    {
      name: 'Google Docs',
      logo: (
        <svg viewBox="0 0 47 65" className="w-10 h-10">
          <path fill="#4285f4" d="M24.5 0C10.9 0 0 10.9 0 24.5s10.9 24.5 24.5 24.5S49 38.1 49 24.5 38.1 0 24.5 0zm0 45.6c-11.8 0-21.6-9.8-21.6-21.6S12.7 2.4 24.5 2.4s21.6 9.8 21.6 21.6-9.8 21.6-21.6 21.6z"/>
          <path fill="#34a853" d="M24.5 5.8c-10.3 0-18.8 8.5-18.8 18.8s8.5 18.8 18.8 18.8 18.8-8.5 18.8-18.8-8.5-18.8-18.8-18.8zm0 35.6c-9.1 0-16.6-7.5-16.6-16.6s7.5-16.6 16.6-16.6 16.6 7.5 16.6 16.6-7.5 16.6-16.6 16.6z"/>
          <path fill="#fbbc04" d="M24.5 11.7c-7.9 0-14.3 6.4-14.3 14.3s6.4 14.3 14.3 14.3 14.3-6.4 14.3-14.3-6.4-14.3-14.3-14.3zm0 27.6c-6.7 0-12.1-5.5-12.1-12.1s5.5-12.1 12.1-12.1 12.1 5.5 12.1 12.1-5.5 12.1-12.1 12.1z"/>
          <path fill="#ea4335" d="M24.5 17.5c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5zm0 18.1c-4.4 0-8-3.6-8-8s3.6-8 8 8 8-3.6 8-8-3.6-8-8-8z"/>
          <path fill="#4285F4" d="M14 22h19v3H14zm0 6h19v3H14zm0 6h12v3H14z" />
        </svg>
      )
    },
    {
      name: 'Microsoft Word',
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#185ABD"/>
          <path fill="#FFF" d="M16.5 16.5L14.5 8h-2l-1.5 6-1.5-6h-2l-2 8.5h2l1-5 1.5 5h2l1.5-5 1-3.5h.05z"/>
          <path fill="#FFF" d="M7 6h10v2H7z" opacity="0.3"/> 
          <path fill="white" d="M6.5 18h2.2l1.3-6.2h.1L11.5 18h2l1.4-6.2h.1l1.3 6.2h2.2l-2.5-10H13l-1.5 7h-.1L9.9 8H7.5z"/>
        </svg>
      )
    },
    {
      name: 'Notion',
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <path d="M4.459 4.208c.746.606.933.933.933 1.814v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-.998.933.28.28.374.466.374.747v.14c0 .28-.093.606-.374.747-.28.28-.747.514-.998.514h-1.214c-.374 0-.84-.233-1.121-.56-.233-.28-.374-.606-.374-.933v-10.264l-.747-.14c-.42-.047-.56-.466-.42-.887.093-.466.56-.747 1.028-.747h13.957z" fill="white"/>
        </svg>
      )
    },
    {
      name: 'Jira',
      logo: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
           <path d="M11.53 2C11.68 2.05 11.79 2.19 11.79 2.35V11.83C11.79 14.69 9.47 17.01 6.61 17.01C3.75 17.01 1.43 14.69 1.43 11.83C1.43 8.97 3.75 6.65 6.61 6.65C6.73 6.65 6.84 6.65 6.96 6.66V2.35C6.96 2.16 7.11 2 7.3 2H11.53Z" fill="#0052CC"/>
           <path d="M12.19 12.02V2.35C12.19 2.16 12.34 2 12.53 2H16.76C16.91 2.05 17.02 2.19 17.02 2.35V11.83C17.02 14.69 14.7 17.01 11.84 17.01C12.07 15.35 12.19 13.68 12.19 12.02Z" fill="#2684FF"/>
           <path d="M17.42 21.65V12.16C17.42 12 17.57 11.84 17.76 11.84H21.99C22.14 11.89 22.25 12.03 22.25 12.19V21.67C22.25 24.53 19.93 26.85 17.07 26.85C14.21 26.85 11.89 24.53 11.89 21.67C11.89 21.66 11.89 21.65 11.89 21.65H17.42Z" fill="#0052CC"/>
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