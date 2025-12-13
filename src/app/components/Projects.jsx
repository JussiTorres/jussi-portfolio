"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-neutral-950">
      
      {/* Background Glow Effect - Red Theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 space-y-24"> {/* Added space-y-24 for separation */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Title Matching Page.js Aesthetic */}
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white inline-block">
            FEATURED <span className="text-red-600">PROJECTS</span>
          </h2>
          <p className="text-gray-400 max-w-lg font-medium">
            Engineering tools that solve real problems. Built for performance and accessibility.
          </p>
        </motion.div>

        {/* --- PROJECT 1: CHROME EQ BOOST --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="group relative bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-red-600/30 transition-colors"
        >
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 items-center">
            
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black/60 rounded-2xl border border-white/10 shrink-0">
                  <Image 
                    src="/projects/eq-volume/icon.png" 
                    alt="EQ Logo" 
                    width={48} 
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-1">Chrome EQ Boost</h3>
                  <span className="text-[10px] font-mono font-bold text-red-400 px-2 py-1 bg-red-900/20 rounded border border-red-900/30 inline-block">
                    v1.2.4 RELEASE
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base">
                The ultimate audio control for Chrome. Boost volume up to <span className="text-white font-bold">400%</span>, customize frequencies with a precision <span className="text-white font-bold">3-Band Equalizer</span> (Bass, Mid, Treble), and experience crystal clear sound processing via the Web Audio API.
              </p>

              <div className="flex flex-wrap gap-2">
                {['8 Languages', 'Bass Boost', 'Privacy First', 'Low Latency'].map((tag) => (
                  <span key={tag} className="text-xs font-bold text-gray-300 bg-white/5 px-3 py-1 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <a 
                  href="https://chromewebstore.google.com/detail/faklnjopaahkgaeklkplejmknidfcofh?utm_source=item-share-cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-red-600/20 flex items-center gap-2 text-sm uppercase tracking-wide cursor-pointer hover:scale-105 active:scale-95 text-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Install
                </a>
                
                <a 
                  href="https://github.com/JussiTorres/chrome-eq-boost" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full font-bold text-gray-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all text-sm uppercase tracking-wide flex items-center justify-center hover:scale-105 active:scale-95 text-center"
                >
                  Source Code
                </a>
              </div>
            </div>

            {/* Right: Visual Showcase (EQ Bars) */}
            <div className="relative h-full min-h-[250px] bg-gradient-to-br from-neutral-800/30 to-black/50 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden group-hover:shadow-2xl transition-all">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
              <div className="flex gap-3 items-end h-32 z-10">
                {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [h + "%", (h - 20) + "%", h + "%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                    className="w-3 bg-gradient-to-t from-red-600 to-red-400 rounded-t-sm opacity-90 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="group relative bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-red-600/30 transition-colors"
        >
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 items-center">
            
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black/60 rounded-2xl border border-white/10 shrink-0 flex items-center justify-center">
                  {/* Pulse Icon SVG */}
                  <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-1">SoundPulse</h3>
                  <span className="text-[10px] font-mono font-bold text-gray-400 px-2 py-1 bg-white/5 rounded border border-white/10 inline-block">
                    UPCOMING OPEN-SOURCE
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base">
                The heartbeat of your music history. A powerful data visualization platform for <strong className="text-white">Last.fm</strong> & <strong className="text-white">ListenBrainz</strong>, tracking your listening habits in real-time with pixel-perfect precision.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Data Viz', 'Public API', 'Analytics'].map((tag) => (
                  <span key={tag} className="text-xs font-bold text-gray-300 bg-white/5 px-3 py-1 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <div className="px-6 py-3 rounded-full font-bold text-gray-500 border border-white/5 bg-white/5 text-sm uppercase tracking-wide cursor-not-allowed flex items-center gap-2">
                   <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                   Coming Soon
                </div>
                
                <a 
                  href="https://github.com/JussiTorres" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full font-bold text-gray-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all text-sm uppercase tracking-wide flex items-center justify-center hover:scale-105 active:scale-95 text-center"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right: Visual Showcase (Pulse Animation) */}
            <div className="relative h-full min-h-[250px] bg-gradient-to-br from-neutral-800/30 to-black/50 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden group-hover:shadow-2xl transition-all">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
              
              {/* Heartbeat Line Animation */}
              <div className="relative w-full h-32 flex items-center px-8">
                 <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100">
                    <motion.path
                      d="M0,50 L30,50 L45,20 L60,80 L75,50 L100,50 L115,10 L130,90 L145,50 L300,50"
                      fill="none"
                      stroke="#DC2626" // Red-600
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ 
                        duration: 2, 
                        ease: "easeInOut", 
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 0.5
                      }}
                      style={{ filter: "drop-shadow(0 0 8px rgba(220, 38, 38, 0.5))" }}
                    />
                 </svg>
              </div>

              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}