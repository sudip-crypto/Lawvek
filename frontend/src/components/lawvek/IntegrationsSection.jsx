import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const IntegrationsSection = () => {
  // Left side integrations: Slack, Gmail, Microsoft Teams, Ironclad, SpotDraft
  const leftIntegrations = [
    {
      name: 'Slack',
      logo: (
        <svg viewBox="0 0 54 54" className="w-9 h-9">
          <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"/>
          <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"/>
          <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"/>
          <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.249a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"/>
        </svg>
      )
    },
    {
      name: 'Gmail',
      logo: (
        <svg viewBox="0 0 48 48" className="w-9 h-9">
          <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
          <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
          <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
          <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
          <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Teams',
      logo: (
        <svg viewBox="0 0 48 48" className="w-9 h-9">
          <path fill="#5c6bc0" d="M41.5,13h-4.2c0.4,0.9,0.7,1.9,0.7,3c0,4.1-3.4,7.5-7.5,7.5c-1.4,0-2.6-0.4-3.7-1l0,0l-2.8,1.4v8.5 l-4.7,2.3l-2.3-1.2l0-9.6l-2.8-1.4c-1.1,0.6-2.4,1-3.7,1c-4.1,0-7.5-3.4-7.5-7.5c0-1.1,0.2-2.1,0.7-3H3.5C2.1,13,1,14.1,1,15.5 v17C1,33.9,2.1,35,3.5,35H17v9.5c0,1.4,1.1,2.5,2.5,2.5h9c1.4,0,2.5-1.1,2.5-2.5V35h10.5c1.4,0,2.5-1.1,2.5-2.5v-17 C44,14.1,42.9,13,41.5,13z"/>
          <circle fill="#7986cb" cx="30.5" cy="8.5" r="5.5"/>
          <circle fill="#5c6bc0" cx="10.5" cy="8.5" r="5.5"/>
          <path fill="#7986cb" d="M17,16c0,3.9,3.1,7,7,7s7-3.1,7-7s-3.1-7-7-7S17,12.1,17,16z"/>
        </svg>
      )
    },
    {
      name: 'Ironclad',
      logo: (
        <svg viewBox="0 0 48 48" className="w-9 h-9">
          <defs>
            <linearGradient id="ironclad-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1"/>
              <stop offset="100%" stopColor="#8B5CF6"/>
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="8" fill="url(#ironclad-grad)"/>
          <path d="M14 16h20v3H14v-3zm0 6h20v3H14v-3zm0 6h14v3H14v-3z" fill="white" opacity="0.9"/>
          <circle cx="36" cy="31" r="4" fill="white"/>
        </svg>
      )
    },
    {
      name: 'SpotDraft',
      logo: (
        <svg viewBox="0 0 48 48" className="w-9 h-9">
          <defs>
            <linearGradient id="spotdraft-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6"/>
              <stop offset="100%" stopColor="#1D4ED8"/>
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="8" fill="url(#spotdraft-grad)"/>
          <path d="M24 10l12 7v14l-12 7-12-7V17l12-7z" fill="none" stroke="white" strokeWidth="2.5"/>
          <circle cx="24" cy="24" r="6" fill="white"/>
        </svg>
      )
    }
  ];

  // Right side integrations: HubSpot, Google Docs, Microsoft Word, Notion, Jira
  const rightIntegrations = [
    {
      name: 'HubSpot',
      logo: (
        <svg viewBox="0 0 48 48" className="w-9 h-9">
          <path fill="#ff7a59" d="M35.5,16.5v-3.8c1.2-0.7,2-1.9,2-3.4c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,1.5,0.8,2.7,2,3.4v3.8 c-1.5,0.4-2.9,1.1-4,2.1l-10.7-8.3c0.1-0.4,0.2-0.8,0.2-1.3c0-2.8-2.2-5-5-5s-5,2.2-5,5s2.2,5,5,5c1.1,0,2.2-0.4,3-1l10.4,8.1 c-0.7,1.3-1.1,2.7-1.1,4.2c0,5,4,9,9,9c4.3,0,7.8-3,8.7-6.9l3.5,1.4c0.4,0.2,0.9,0.1,1.2-0.2c0.3-0.3,0.4-0.8,0.2-1.2l-3.4-8.5 C42.3,21.3,39.4,17.7,35.5,16.5z M33.5,35c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S36.3,35,33.5,35z"/>
        </svg>
      )
    },
    {
      name: 'Google Docs',
      logo: (
        <svg viewBox="0 0 48 48" className="w-9 h-9">
          <path fill="#2196f3" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"/>
          <path fill="#bbdefb" d="M40 13L30 13 30 3z"/>
          <path fill="#1565c0" d="M30 13L40 23 40 13z"/>
          <path fill="#e3f2fd" d="M15 23H33V25H15zM15 27H33V29H15zM15 31H33V33H15zM15 35H25V37H15z"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Word',
      logo: (
        <svg viewBox="0 0 48 48" className="w-9 h-9">
          <path fill="#2196F3" d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"/>
          <path fill="#FFF" d="M25 15.001H39V17H25zM25 19H39V21H25zM25 23.001H39V25.001H25zM25 27.001H39V29H25zM25 31H39V33.001H25z"/>
          <path fill="#0D47A1" d="M27 42L6 38V10l21-4V42z"/>
          <path fill="#FFF" d="M21.167 31.012L18.453 21.012 15.609 31.012 12.172 31.012 8.167 17.012 11.262 17.012 13.776 27.012 16.667 17.012 20.167 17.012 22.833 27.012 25.333 17.012 28.167 17.012 24.167 31.012z"/>
        </svg>
      )
    },
    {
      name: 'Notion',
      logo: (
        <svg viewBox="0 0 48 48" className="w-9 h-9">
          <path fill="#fff" d="M42,37c0,2.762-2.238,5-5,5H11c-2.762,0-5-2.238-5-5V11c0-2.762,2.238-5,5-5h26c2.762,0,5,2.238,5,5V37z"/>
          <path fill="#1a1a1a" d="M37,40H11c-1.657,0-3-1.343-3-3V11c0-1.657,1.343-3,3-3h26c1.657,0,3,1.343,3,3v26C40,38.657,38.657,40,37,40z M11,10c-0.552,0-1,0.448-1,1v26c0,0.552,0.448,1,1,1h26c0.552,0,1-0.448,1-1V11c0-0.552-0.448-1-1-1H11z"/>
          <path fill="#1a1a1a" d="M13.5,12l5,0.5l0,0.5l-1,0.5v19l5-6.5l0-13l-1-0.5l0-0.5l7,0l0,0.5l-1,0.5l0,16l1,0.5l0,0.5l-5.5,0l0-0.5l1-0.5l0-11l-5.5,7.5l0,4l1,0.5l0,0.5l-6,0l0-0.5l1-0.5l0-16l-1-0.5L13.5,12z"/>
          <path fill="#1a1a1a" d="M29 18H33V20H29z"/>
        </svg>
      )
    },
    {
      name: 'Jira',
      logo: (
        <svg viewBox="0 0 48 48" className="w-9 h-9">
          <path fill="#2196f3" d="M24.5,7L24.5,7c-0.2,0-0.3,0-0.5,0L7.3,23.7c-0.4,0.4-0.4,1.1,0,1.5l16.7,16.7c0.1,0.1,0.3,0.1,0.5,0.1 l0,0c0.2,0,0.3,0,0.5-0.1l16.7-16.7c0.4-0.4,0.4-1.1,0-1.5L25,7C24.8,7,24.7,7,24.5,7z"/>
          <path fill="#1565c0" d="M24,24.5L14.6,34c-0.1,0.1-0.1,0.3,0,0.4l9.4,9.4c0.2,0.2,0.5,0.2,0.6,0c0,0,0,0,0,0l9.4-9.4 c0.1-0.1,0.1-0.3,0-0.4l-9.4-9.5C24.4,24.3,24.2,24.3,24,24.5C24,24.5,24,24.5,24,24.5z"/>
          <path fill="#2196f3" d="M24,4L7.3,20.7c-0.4,0.4-0.4,1.1,0,1.5L24,39l16.7-16.7c0.4-0.4,0.4-1.1,0-1.5L24,4z"/>
          <path fill="#1565c0" d="M24,4L24,4L14.6,13.5c-0.1,0.1-0.1,0.3,0,0.4l9.4,9.4l0,0l9.4-9.4c0.1-0.1,0.1-0.3,0-0.4L24,4z"/>
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
                  const iconY = startOffset + index * iconSpacing + 32;
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
                  const iconY = startOffset + index * iconSpacing + 32;
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
