import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const IntegrationsSection = () => {
  // SVG Icons
  const SlackLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path d="M5.042 15.165a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 17.686a2.528 2.528 0 0 1 2.522-2.521zm13.917-3.33a2.528 2.528 0 0 1 2.522 2.521 2.528 2.528 0 0 1-2.522 2.521h-2.52a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521zM5.042 5.17a2.528 2.528 0 0 1 2.521-2.521 2.528 2.528 0 0 1 2.521 2.521v2.52a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521zm13.917 3.33a2.528 2.528 0 0 1 2.522-2.521 2.528 2.528 0 0 1 2.521 2.521H21.48a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521zM8.834 18.478a2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 17.686a2.528 2.528 0 0 1 2.522-2.521h3.791a2.528 2.528 0 0 1 2.521 2.521z" fill="#E01E5A"/>
      <path d="M5.042 15.165a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 17.686a2.528 2.528 0 0 1 2.522-2.521zm13.917-3.33a2.528 2.528 0 0 1 2.522 2.521 2.528 2.528 0 0 1-2.522 2.521h-2.52a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521z" fill="#36C5F0"/>
      <path d="M2.522 15.165h2.521a2.528 2.528 0 0 1 2.521 2.521v2.52a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521v-2.52z" fill="#2EB67D"/>
      <path d="M18.959 8.5H16.44a2.528 2.528 0 0 1-2.522-2.521V3.46a2.528 2.528 0 0 1 2.522-2.521 2.528 2.528 0 0 1 2.521 2.521v2.52a2.528 2.528 0 0 1-2.521 2.52z" fill="#ECB22E"/>
    </svg>
  );

  const GmailLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path fill="#EA4335" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" opacity="0"/>
      <path fill="#4285F4" d="M4 6v12h4.5V10.5L12 13.25 15.5 10.5V18H20V6l-8 5z"/>
      <path fill="#34A853" d="M15.5 18H20v-7.5l-4.5 3.375"/>
      <path fill="#FBBC04" d="M4 10.5V18h4.5v-7.5"/>
      <path fill="#EA4335" d="M12 13.25L4 7.25V6h.025l7.975 6 7.975-6H20v1.25z"/>
    </svg>
  );

  const TeamsLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path fill="#5059C9" d="M17.5 11c1.38 0 2.5-1.12 2.5-2.5S18.88 6 17.5 6s-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5zm0 1c-1.67 0-5 1.08-5 3.25V17h10v-1.75c0-2.17-3.33-3.25-5-3.25z"/>
      <path fill="#7B83EB" d="M9 11c1.66 0 3-1.34 3-3S10.66 5 9 5 6 6.34 6 8s1.34 3 3 3zm0 1c-2.33 0-7 1.17-7 3.5V18h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  );

  const IroncladLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect width="24" height="24" rx="4" fill="#00CA88"/>
      <path d="M7 6h3v12H7V6zm7 0h3v12h-3V6z" fill="white"/>
      <path d="M7 11h10v2H7z" fill="white"/>
    </svg>
  );

  const SpotDraftLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect width="24" height="24" rx="4" fill="#2563EB"/>
      <path d="M14.5 4l-7 9h4v7l7-9h-4V4z" fill="white"/>
    </svg>
  );

  const HubSpotLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path fill="#FF7A59" d="M19.5 7.5c1.38 0 2.5-1.12 2.5-2.5S20.88 2.5 19.5 2.5 17 3.62 17 5c0 .35.07.69.2 1l-3.3 2.48c-.52-.31-1.12-.48-1.75-.48-1.57 0-2.9 1.02-3.32 2.42l-4.14-1.25C4.89 9.06 5 8.94 5 8.81c0-1.28-1.04-2.31-2.31-2.31C1.41 6.5.38 7.54.38 8.81c0 1.28 1.04 2.31 2.31 2.31.85 0 1.6-.44 2.01-1.11l4.18 1.26c.07 2.19 1.86 3.95 4.07 3.95 2.15 0 3.9-1.68 4.04-3.81l2.45-.74c.12.2.28.38.46.53.53.44 1.21.7 1.95.7 1.66 0 3-1.34 3-3s-1.34-3-3-3c-.95 0-1.8.44-2.38 1.13l-2.6.78c-.28-1.5-1.46-2.69-2.94-2.93l3.49-2.62c.12.01.24.03.37.03z"/>
    </svg>
  );

  const GoogleDocsLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path fill="#4285F4" d="M14.5 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7.5L14.5 2z"/>
      <path fill="#E0E0E0" d="M14.5 2V7.5H20"/>
      <path fill="#F1F1F1" d="M8 12h8v1.5H8zm0 3h8v1.5H8zm0 3h5v1.5H8z"/>
    </svg>
  );

  const MicrosoftWordLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#185ABD"/>
      <path fill="#FFF" d="M16.5 16.5L14.5 8h-2l-1.5 6-1.5-6h-2l-2 8.5h2l1-5 1.5 5h2l1.5-5 1-3.5h.05z"/>
      <path fill="#FFF" d="M7 6h10v2H7z" opacity="0.3"/> 
      <path fill="white" d="M6.5 18h2.2l1.3-6.2h.1L11.5 18h2l1.4-6.2h.1l1.3 6.2h2.2l-2.5-10H13l-1.5 7h-.1L9.9 8H7.5z"/>
    </svg>
  );

  const NotionLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path d="M4.459 4.208c.746.606.933.933.933 1.814v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-.998.933.28.28.374.466.374.747v.14c0 .28-.093.606-.374.747-.28.28-.747.514-.998.514h-1.214c-.374 0-.84-.233-1.121-.56-.233-.28-.374-.606-.374-.933v-10.264l-.747-.14c-.42-.047-.56-.466-.42-.887.093-.466.56-.747 1.028-.747h13.957z" fill="white"/>
    </svg>
  );

  const JiraLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path d="M11.53 2C11.68 2.05 11.79 2.19 11.79 2.35V11.83C11.79 14.69 9.47 17.01 6.61 17.01C3.75 17.01 1.43 14.69 1.43 11.83C1.43 8.97 3.75 6.65 6.61 6.65C6.73 6.65 6.84 6.65 6.96 6.66V2.35C6.96 2.16 7.11 2 7.3 2H11.53Z" fill="#0052CC"/>
      <path d="M12.19 12.02V2.35C12.19 2.16 12.34 2 12.53 2H16.76C16.91 2.05 17.02 2.19 17.02 2.35V11.83C17.02 14.69 14.7 17.01 11.84 17.01C12.07 15.35 12.19 13.68 12.19 12.02Z" fill="#2684FF"/>
      <path d="M17.42 21.65V12.16C17.42 12 17.57 11.84 17.76 11.84H21.99C22.14 11.89 22.25 12.03 22.25 12.19V21.67C22.25 24.53 19.93 26.85 17.07 26.85C14.21 26.85 11.89 24.53 11.89 21.67C11.89 21.66 11.89 21.65 11.89 21.65H17.42Z" fill="#0052CC"/>
    </svg>
  );

  // Left side integrations: Slack, Gmail, Microsoft Teams, Ironclad, SpotDraft
  const leftIntegrations = [
    { name: 'Slack', Logo: SlackLogo },
    { name: 'Gmail', Logo: GmailLogo },
    { name: 'Microsoft Teams', Logo: TeamsLogo },
    { name: 'Ironclad', Logo: IroncladLogo },
    { name: 'SpotDraft', Logo: SpotDraftLogo }
  ];

  // Right side integrations: HubSpot, Google Docs, Microsoft Word, Notion, Jira
  const rightIntegrations = [
    { name: 'HubSpot', Logo: HubSpotLogo },
    { name: 'Google Docs', Logo: GoogleDocsLogo },
    { name: 'Microsoft Word', Logo: MicrosoftWordLogo },
    { name: 'Notion', Logo: NotionLogo },
    { name: 'Jira', Logo: JiraLogo }
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
                  <integration.Logo />
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
                  <integration.Logo />
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