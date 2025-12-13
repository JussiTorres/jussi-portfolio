"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-neutral-950">
      
      {/* Background Glow Effect - Red Theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -z-10" />

      {/* Container with HUGE vertical spacing */}
      <div className="max-w-5xl mx-auto px-6 space-y-32"> 
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Title Matching Page.js Aesthetic */}
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-white inline-block">
            FEATURED <span className="text-red-600">PROJECTS</span>
          </h2>
          <p className="text-gray-400 max-w-lg font-medium text-lg">
            Engineering tools that solve real problems. Built for performance and accessibility.
          </p>
        </motion.div>

        {/* --- PROJECT 1: CHROME EQ BOOST --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="group relative bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-red-600/30 transition-colors"
        >
          <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-black/60 rounded-2xl border border-white/10 shrink-0">
                  <Image 
                    src="/projects/eq-volume/icon.png" 
                    alt="EQ Logo" 
                    width={56} 
                    height={56}
                    className="w-14 h-14"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none mb-2">Chrome EQ Boost</h3>
                  <span className="text-[11px] font-mono font-bold text-red-400 px-2 py-1 bg-red-900/20 rounded border border-red-900/30 inline-block">
                    v1.2.4 RELEASE
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed font-medium text-lg">
                The ultimate audio control for Chrome. Boost volume up to <span className="text-white font-bold">400%</span>, customize frequencies with a precision <span className="text-white font-bold">3-Band Equalizer</span> (Bass, Mid, Treble), and experience crystal clear sound processing via the Web Audio API.
              </p>

              <div className="flex flex-wrap gap-2">
                {['8 Languages', 'Bass Boost', 'Privacy First', 'Low Latency'].map((tag) => (
                  <span key={tag} className="text-xs font-bold text-gray-300 bg-white/5 px-3 py-1 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <a 
                  href="https://chromewebstore.google.com/detail/faklnjopaahkgaeklkplejmknidfcofh?utm_source=item-share-cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-red-600/20 flex items-center gap-2 text-sm uppercase tracking-wide cursor-pointer hover:scale-105 active:scale-95 text-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Install
                </a>
                
                <a 
                  href="https://github.com/JussiTorres/chrome-eq-boost" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full font-bold text-gray-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all text-sm uppercase tracking-wide flex items-center justify-center hover:scale-105 active:scale-95 text-center"
                >
                  Source Code
                </a>
              </div>
            </div>

            {/* Right: Visual Showcase (EQ Bars) */}
            <div className="relative h-full min-h-[320px] bg-gradient-to-br from-neutral-800/30 to-black/50 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden group-hover:shadow-2xl transition-all">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
              <div className="flex gap-3 items-end h-40 z-10">
                {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [h + "%", (h - 20) + "%", h + "%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                    className="w-4 bg-gradient-to-t from-red-600 to-red-400 rounded-t-md opacity-90 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

          </div>
        </motion.div>

        {/* --- PROJECT 2: SOUNDPULSE (UPCOMING) --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-red-600/30 transition-colors"
        >
          <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-black/60 rounded-2xl border border-white/10 shrink-0 flex items-center justify-center w-14 h-14">
                  {/* Static Pulse Icon */}
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none mb-2">SoundPulse</h3>
                  <span className="text-[11px] font-mono font-bold text-gray-400 px-2 py-1 bg-white/5 rounded border border-white/10 inline-block">
                    UPCOMING OPEN-SOURCE
                  </span>
                </div>
              </div>

              <div className="relative space-y-4">
                {/* STATUS BADGE */}
                <div className="bg-red-950/30 border border-red-500/20 p-3 rounded-lg flex items-center gap-3 w-fit">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    <span className="font-mono text-xs text-red-400 font-bold tracking-widest uppercase select-none">
                      IN ACTIVE DEVELOPMENT
                    </span>
                </div>

                <p className="text-gray-500 text-lg blur-[4px] select-none opacity-60 leading-relaxed">
                  A powerful data visualization platform for Last.fm & ListenBrainz. Tracking listening habits in real-time with pixel-perfect precision.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Data Viz', 'Public API', 'Analytics'].map((tag) => (
                  <span key={tag} className="text-xs font-bold text-gray-300 bg-white/5 px-3 py-1 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <div className="px-8 py-4 rounded-full font-bold text-gray-500 border border-white/5 bg-white/5 text-sm uppercase tracking-wide cursor-not-allowed flex items-center gap-2">
                   <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                   Coming Soon
                </div>
                
                {/* No GitHub button for secret projects */}
              </div>
            </div>

            {/* Right: Visual Showcase (SHARP DIGITAL PULSE) */}
            <div className="relative h-full min-h-[320px] bg-gradient-to-br from-neutral-800/30 to-black/50 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
              
              {/* STATIC SHARP PULSE VISUAL */}
              <div className="relative w-full px-12">
                 <svg className="w-full h-32 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" viewBox="0 0 400 100" preserveAspectRatio="none">
                    {/* The Line */}
                    <path
                      d="M0,50 L140,50 L160,10 L180,90 L200,20 L220,80 L240,50 L400,50"
                      fill="none"
                      stroke="#DC2626"
                      strokeWidth="3"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                 </svg>
                 {/* Faint Grid Line behind */}
                 <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500/20 -translate-y-1/2"></div>
              </div>

              <div className="absolute inset-0 bg-black/10 transition-colors" />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}