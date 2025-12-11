"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-neutral-950">
      
      {/* Background Glow Effect - Red Theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Title Matching Page.js Aesthetic */}
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white inline-block">
            FEATURED <span className="text-red-600">PRODUCT</span>
          </h2>
          <p className="text-gray-400 max-w-lg font-medium">
            Engineering tools that solve real problems. Built for performance and accessibility.
          </p>
        </motion.div>

        {/* THE HERO PRODUCT CARD - RED THEME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="group relative bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-red-600/30 transition-colors"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
            
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black/60 rounded-2xl border border-white/10">
                  <Image 
                    src="/projects/eq-volume/icon.png" 
                    alt="EQ Logo" 
                    width={48} 
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">Chrome EQ Boost</h3>
                  <span className="text-[10px] font-mono font-bold text-red-400 px-2 py-1 bg-red-900/20 rounded border border-red-900/30">
                    v1.2.4 RELEASE
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed font-medium">
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
                <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-red-600/20 flex items-center gap-2 text-sm uppercase tracking-wide cursor-pointer hover:scale-105 active:scale-95">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Install
                </button>
                <a 
                  href="https://github.com/JussiTorres/chrome-eq-boost" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full font-bold text-gray-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all text-sm uppercase tracking-wide flex items-center justify-center hover:scale-105 active:scale-95"
                >
                  Source Code
                </a>
              </div>
            </div>

            {/* Right: Visual Showcase (Abstract Representation - Red Theme) */}
            <div className="relative h-full min-h-[250px] bg-gradient-to-br from-neutral-800/30 to-black/50 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden group-hover:shadow-2xl transition-all">
              
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

              {/* Animated EQ Bars Representation - Red Glow */}
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
              
              {/* Overlay Shadow */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}