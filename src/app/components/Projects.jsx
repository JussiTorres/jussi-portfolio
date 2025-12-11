"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-neutral-950">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent inline-block">
            Featured Product
          </h2>
          <p className="text-gray-400 max-w-lg">
            Engineering tools that solve real problems. Built for performance and accessibility.
          </p>
        </motion.div>

        {/* THE HERO PRODUCT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="group relative bg-gray-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-blue-500/30 transition-colors"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
            
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black/40 rounded-2xl border border-white/5">
                  <Image 
                    src="/projects/eq-volume/icon.png" 
                    alt="EQ Logo" 
                    width={48} 
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">EQ Volume Booster</h3>
                  <span className="text-xs font-mono text-blue-400 px-2 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                    v1.0.0 RELEASE
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                The ultimate audio control for Chrome. Boost volume up to 400%, customize frequencies with a 12-band equalizer, and experience crystal clear sound processing.
              </p>

              <div className="flex flex-wrap gap-2">
                {['8 Languages', 'Bass Boost', 'Privacy First', 'Low Latency'].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Install Extension
                </button>
                <button className="px-6 py-2.5 rounded-xl font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer">
                  View Source
                </button>
              </div>
            </div>

            {/* Right: Visual Showcase (Abstract Representation) */}
            <div className="relative h-full min-h-[250px] bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden group-hover:shadow-2xl transition-all">
              {/* Animated EQ Bars Representation */}
              <div className="flex gap-2 items-end h-32">
                {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [h + "%", (h - 20) + "%", h + "%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                    className="w-4 bg-gradient-to-t from-blue-600 to-purple-500 rounded-t-sm opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              
              {/* Overlay Logo */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}