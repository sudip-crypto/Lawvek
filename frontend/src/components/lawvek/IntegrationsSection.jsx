import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const IntegrationsSection = () => {
  // Left side integrations: Slack, Gmail, Microsoft Teams, Ironclad, SpotDraft
  const leftIntegrations = [
    {
      name: 'Slack',
      logo: (
        <img 
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" 
          alt="Slack" 
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      name: 'Gmail',
      logo: (
        <img 
          src="https://cdn.worldvectorlogo.com/logos/gmail-icon.svg" 
          alt="Gmail" 
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      name: 'Microsoft Teams',
      logo: (
        <img 
          src="https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg" 
          alt="Microsoft Teams" 
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      name: 'Ironclad',
      logo: (
        <img 
          src="https://logo.clearbit.com/ironcladapp.com" 
          alt="Ironclad" 
          className="w-10 h-10 object-contain rounded-md" 
        />
      )
    },
    {
      name: 'SpotDraft',
      logo: (
        <img 
          src="https://logo.clearbit.com/spotdraft.com" 
          alt="SpotDraft" 
          className="w-10 h-10 object-contain rounded-md" 
        />
      )
    }
  ];

  // Right side integrations: HubSpot, Google Docs, Microsoft Word, Notion, Jira
  const rightIntegrations = [
    {
      name: 'HubSpot',
      logo: (
        <img 
          src="https://cdn.worldvectorlogo.com/logos/hubspot.svg" 
          alt="HubSpot" 
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      name: 'Google Docs',
      logo: (
        <img 
          src="https://cdn.worldvectorlogo.com/logos/google-docs-icon-1.svg" 
          alt="Google Docs" 
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      name: 'Microsoft Word',
      logo: (
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg" 
          alt="Microsoft Word" 
          className="w-10 h-10 object-contain"
        />
      )
    },
    {
      name: 'Notion',
      logo: (
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" 
          alt="Notion" 
          className="w-10 h-10 object-contain rounded-sm"
        />
      )
    },
    {
      name: 'Jira',
      logo: (
        <img 
          src="https://cdn.worldvectorlogo.com/logos/jira-3.svg" 
          alt="Jira" 
          className="w-10 h-10 object-contain"
        />
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