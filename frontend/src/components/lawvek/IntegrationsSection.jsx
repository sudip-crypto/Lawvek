import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const IntegrationsSection = () => {
  // Integration data with proper logos
  const leftIntegrations = [
    {
      name: 'Slack',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
          <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
          <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
          <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
        </svg>
      )
    },
    {
      name: 'Gmail',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Teams',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M20.625 6.5c1.036 0 1.875-.84 1.875-1.875S21.66 2.75 20.625 2.75 18.75 3.59 18.75 4.625 19.59 6.5 20.625 6.5z" fill="#5059C9"/>
          <path d="M22.5 8h-5.25a.75.75 0 0 0-.75.75v5.5a2.25 2.25 0 0 0 2.25 2.25h1.5v3a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5v-3h.75a2.25 2.25 0 0 0 2.25-2.25v-5.5a.75.75 0 0 0-.75-.75z" fill="#5059C9"/>
          <path d="M12 5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill="#7B83EB"/>
          <path d="M15 7H4.5a.75.75 0 0 0-.75.75v7.5A3.75 3.75 0 0 0 7.5 19h.75v3.5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5V19h.75A3.75 3.75 0 0 0 14.25 15.25v-7.5A.75.75 0 0 0 13.5 7H15z" fill="#7B83EB"/>
        </svg>
      )
    },
    {
      name: 'Dropbox',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M6 2l6 3.75L6 9.5 0 5.75 6 2zm12 0l6 3.75-6 3.75-6-3.75L18 2zM0 13.25L6 9.5l6 3.75-6 3.75-6-3.75zm18-3.75l6 3.75-6 3.75-6-3.75 6-3.75zM6 18.25l6-3.75 6 3.75-6 3.75-6-3.75z" fill="#0061FF"/>
        </svg>
      )
    },
    {
      name: 'Notion',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 2.044c-.42-.326-.98-.7-2.055-.607L3.01 2.7c-.467.047-.56.28-.374.466l1.823 1.042zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.84-.046.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.746 0-.933-.234-1.495-.933l-4.577-7.186v6.952l1.449.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.455-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933l3.222-.187zM2.197 1.605l13.59-.933c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.933c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.746-.793-1.306-.793-1.96V2.965c0-.84.374-1.54 1.168-1.36z" fill="#000"/>
        </svg>
      )
    }
  ];

  const rightIntegrations = [
    {
      name: 'Google Docs',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6z" fill="#4285F4"/>
          <path d="M14.727 6.727H14V0l6.727 6.727h-6z" fill="#A1C2FA"/>
          <path d="M6.545 15.273h10.91v1.09H6.545v-1.09zm0 2.182h10.91v1.09H6.545v-1.09zm0-4.364h10.91v1.091H6.545v-1.09z" fill="#F1F1F1"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Word',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M23 3H7a1 1 0 0 0-1 1v3H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" fill="#2B579A"/>
          <path d="M6 7H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5V7z" fill="#185ABD"/>
          <path d="M9.5 9l-1.2 6h-.9l-.9-4-.9 4h-.9L3.5 9h1l.6 4 .9-4h.9l.9 4 .6-4h1.1z" fill="#fff"/>
          <path d="M17 7h-4v2h4V7zm0 3h-4v2h4v-2zm0 3h-4v2h4v-2z" fill="#C8D4E9"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Outlook',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M24 7.387v10.478c0 .23-.08.424-.238.576-.157.152-.358.228-.601.228h-8.66V6.583h8.662c.242 0 .443.076.6.228.158.152.237.347.237.576z" fill="#0072C6"/>
          <path d="M14.5 6.583v12.086H7.99l-.012-.065-.023-.122-.032-.17-.038-.212-.042-.25-.047-.28-.048-.31-.05-.333-.048-.354-.047-.37-.044-.381-.04-.39-.035-.394-.03-.395-.025-.392-.02-.386-.012-.377-.007-.365v-.35l.007-.334.012-.32.02-.303.025-.288.03-.27.035-.254.04-.238.044-.223.047-.207.048-.194.05-.18.048-.168.047-.158.042-.149.038-.14.032-.133.023-.128.012-.123v-.12h6.5z" fill="#0072C6"/>
          <path d="M8 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6.5c-1.38 0-2.5-1.12-2.5-2.5S6.62 9.5 8 9.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1490DF"/>
        </svg>
      )
    },
    {
      name: 'DocuSign',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" rx="4" fill="#FFD100"/>
          <path d="M18.3 7.3l-8.5 8.5c-.2.2-.5.2-.7 0l-4.4-4.4c-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0l3.3 3.3 7.4-7.4c.2-.2.5-.2.7 0l.7.7c.3.2.3.5.1.7z" fill="#000"/>
        </svg>
      )
    }
  ];

  const iconSpacing = 80; // Uniform spacing between icons
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
                  className="absolute left-0 w-16 h-16 rounded-xl border border-[#334155] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer z-10 bg-[#1E293B]"
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
                  className="absolute right-0 w-16 h-16 rounded-xl border border-[#334155] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer z-10 bg-[#1E293B]"
                  style={{ top: startOffset + 30 + index * iconSpacing }}
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
                  const iconY = startOffset + index * iconSpacing + 32;
                  const hubX = 260;
                  const hubY = 225;
                  return (
                    <path 
                      key={`left-path-${index}`}
                      d={`M 64 ${iconY} C 140 ${iconY}, 180 ${hubY}, ${hubX - 28} ${hubY}`}
                      stroke="#334155" 
                      strokeWidth="1.5" 
                      fill="none"
                      strokeLinecap="round"
                    />
                  );
                })}
                
                {/* Right paths - from hub to icons */}
                {rightIntegrations.map((_, index) => {
                  const iconY = startOffset + 30 + index * iconSpacing + 32;
                  const hubX = 260;
                  const hubY = 225;
                  return (
                    <path 
                      key={`right-path-${index}`}
                      d={`M ${hubX + 28} ${hubY} C 340 ${hubY}, 380 ${iconY}, 456 ${iconY}`}
                      stroke="#334155" 
                      strokeWidth="1.5" 
                      fill="none"
                      strokeLinecap="round"
                    />
                  );
                })}

                {/* Animated dots on left paths */}
                {leftIntegrations.map((_, index) => {
                  const iconY = startOffset + index * iconSpacing + 32;
                  const hubY = 225;
                  const path = `M 64 ${iconY} C 140 ${iconY}, 180 ${hubY}, 232 ${hubY}`;
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
                  const iconY = startOffset + 30 + index * iconSpacing + 32;
                  const hubY = 225;
                  const path = `M 288 ${hubY} C 340 ${hubY}, 380 ${iconY}, 456 ${iconY}`;
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
