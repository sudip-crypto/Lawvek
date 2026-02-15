import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const IntegrationsSection = () => {
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
              
              {/* Left Integration Icons */}
              {/* Slack */}
              <motion.div 
                className="absolute left-0 top-[28px] w-14 h-14 rounded-xl border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-10 bg-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                title="Slack"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
                  <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
                  <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
                  <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
                </svg>
              </motion.div>
              
              {/* Gmail */}
              <motion.div 
                className="absolute left-0 top-[105px] w-14 h-14 rounded-xl border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-10 bg-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                title="Gmail"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
                </svg>
              </motion.div>
              
              {/* MS Teams */}
              <motion.div 
                className="absolute left-0 top-[182px] w-14 h-14 rounded-xl border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-10 bg-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                title="Microsoft Teams"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#6264A7">
                  <path d="M20.625 8.073c1.125 0 2.063-.938 2.063-2.136s-.938-2.137-2.063-2.137-2.063.938-2.063 2.137.938 2.136 2.063 2.136zm-5.625 0h6c.413 0 .75.337.75.75v4.5c0 1.654-1.346 3-3 3h-.375v3.427a.188.188 0 0 1-.188.188h-1.124a.188.188 0 0 1-.188-.188v-3.427H16.5a3.004 3.004 0 0 1-3-3v-4.5c0-.413.337-.75.75-.75h.75zm-3-1.125c1.24 0 2.25-1.01 2.25-2.324S13.24 2.3 12 2.3s-2.25 1.01-2.25 2.324S10.76 6.948 12 6.948zM1.125 8.25h9c.619 0 1.125.506 1.125 1.125v5.625a4.504 4.504 0 0 1-4.5 4.5H6.375v4.313a.188.188 0 0 1-.188.188H4.313a.188.188 0 0 1-.188-.188V19.5h-.375a4.504 4.504 0 0 1-4.5-4.5V9.375C-.75 8.756.506 8.25 1.125 8.25z"/>
                </svg>
              </motion.div>
              
              {/* Ironclad */}
              <motion.div 
                className="absolute left-0 top-[259px] w-14 h-14 rounded-xl border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-10 bg-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                title="Ironclad"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#1a1a1a">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.08 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
                </svg>
              </motion.div>
              
              {/* SpotDraft */}
              <motion.div 
                className="absolute left-0 top-[336px] w-14 h-14 rounded-xl border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-10 bg-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                title="SpotDraft"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="#6366F1" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="#6366F1"/>
                </svg>
              </motion.div>

              {/* Right Integration Icons */}
              {/* Google Docs */}
              <motion.div 
                className="absolute right-0 top-[48px] w-14 h-14 rounded-xl border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-10 bg-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                title="Google Docs"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#4285F4"/>
                  <path d="M14 2v6h6" fill="#A1C2FA"/>
                  <path d="M16 13H8v-1h8v1zm0 3H8v-1h8v1zm-2 3H8v-1h6v1z" fill="white"/>
                </svg>
              </motion.div>
              
              {/* MS Word */}
              <motion.div 
                className="absolute right-0 top-[152px] w-14 h-14 rounded-xl border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-10 bg-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                title="Microsoft Word"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <rect x="2" y="4" width="20" height="16" rx="2" fill="#2B579A"/>
                  <text x="12" y="15" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial">W</text>
                </svg>
              </motion.div>
              
              {/* Outlook */}
              <motion.div 
                className="absolute right-0 top-[256px] w-14 h-14 rounded-xl border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-10 bg-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                title="Outlook"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <rect x="2" y="4" width="20" height="16" rx="2" fill="#0078D4"/>
                  <path d="M12 13l8-5H4l8 5z" fill="#28A8EA"/>
                  <ellipse cx="8" cy="12" rx="4" ry="5" fill="#0559C9"/>
                  <text x="8" y="14" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="Arial">O</text>
                </svg>
              </motion.div>
              
              {/* DocuSign */}
              <motion.div 
                className="absolute right-0 top-[360px] w-14 h-14 rounded-xl border border-[#E2E8F0] flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-10 bg-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                title="DocuSign"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <circle cx="12" cy="12" r="10" fill="#FFCC00"/>
                  <path d="M17.894 8.221l-7.332 7.332a.75.75 0 01-1.06 0l-3.396-3.396a.75.75 0 111.06-1.06l2.866 2.866 6.802-6.802a.75.75 0 111.06 1.06z" fill="white"/>
                </svg>
              </motion.div>

              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
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

              {/* SVG Paths - Connected to icons */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 420" fill="none">
                {/* Left paths - from icon centers to hub */}
                <path d="M 56 55 C 130 55, 180 185, 200 195 L 238 210" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                <path d="M 56 132 C 130 132, 170 190, 200 200 L 238 210" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                <path d="M 56 209 C 140 209, 180 210, 238 210" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                <path d="M 56 286 C 130 286, 170 220, 200 220 L 238 210" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                <path d="M 56 363 C 130 363, 180 235, 200 225 L 238 210" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                
                {/* Right paths - from hub to icon centers */}
                <path d="M 262 210 L 300 195 C 350 175, 400 75, 444 75" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                <path d="M 262 210 L 300 200 C 350 190, 400 179, 444 179" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                <path d="M 262 210 L 300 220 C 350 230, 400 283, 444 283" stroke="#E2E8F0" strokeWidth="2" fill="none" />
                <path d="M 262 210 L 300 225 C 350 245, 400 387, 444 387" stroke="#E2E8F0" strokeWidth="2" fill="none" />

                {/* Animated dots on left paths */}
                {[
                  "M 56 55 C 130 55, 180 185, 200 195 L 238 210",
                  "M 56 132 C 130 132, 170 190, 200 200 L 238 210",
                  "M 56 209 C 140 209, 180 210, 238 210",
                  "M 56 286 C 130 286, 170 220, 200 220 L 238 210",
                  "M 56 363 C 130 363, 180 235, 200 225 L 238 210",
                ].map((path, index) => (
                  <motion.circle
                    key={`left-dot-${index}`}
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
                ))}

                {/* Animated dots on right paths */}
                {[
                  "M 262 210 L 300 195 C 350 175, 400 75, 444 75",
                  "M 262 210 L 300 200 C 350 190, 400 179, 444 179",
                  "M 262 210 L 300 220 C 350 230, 400 283, 444 283",
                  "M 262 210 L 300 225 C 350 245, 400 387, 444 387",
                ].map((path, index) => (
                  <motion.circle
                    key={`right-dot-${index}`}
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
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
