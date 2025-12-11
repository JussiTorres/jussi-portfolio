"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-neutral-950 overflow-hidden">
      
      {/* Background Decor (Subtle Glows) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glass Card Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl transform rotate-[-6deg] scale-105" />
          
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 shadow-2xl">
            <Image
              src="/about-me.jpg"
              alt="Jussi Torres"
              width={600}
              height={800}
              className="object-cover w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-white text-sm font-bold">Jussi Torres</p>
                <p className="text-gray-400 text-xs">Systems Engineer</p>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-400 font-mono">ONLINE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content Area */}
        <div className="space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Architecting
              </span>{" "}
              Scalable Systems
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              I am a Full Stack Engineer driven by performance and clean architecture. 
              My expertise lies in building robust backend systems with <strong className="text-white font-medium">Java & Spring Boot</strong>, 
              deploying resilient infrastructure on <strong className="text-white font-medium">GCP</strong>, and crafting seamless interfaces.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              Beyond the code, I channel my creativity through photography and maintain discipline through fitness. 
              I believe in engineering solutions that are not just functional, but elegant and enduring.
            </p>
          </motion.div>

          {/* THE TECH CONSTELLATION (Replaces the old bars) */}
          <div className="relative h-[300px] w-full mt-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
            
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Lines connecting the nodes (coordinates are approximate percentages) */}
              <motion.path 
                d="M 50% 20% L 80% 50%" // Top to Right
                stroke="url(#gradient-line)" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.path 
                d="M 50% 20% L 20% 50%" // Top to Left
                stroke="url(#gradient-line)" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              <motion.path 
                d="M 50% 20% L 50% 80%" // Top to Bottom
                stroke="url(#gradient-line)" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.9 }}
              />
              <motion.path 
                d="M 20% 50% L 50% 80%" // Left to Bottom
                stroke="url(#gradient-line)" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 1.1 }}
              />
              <motion.path 
                d="M 80% 50% L 50% 80%" // Right to Bottom
                stroke="url(#gradient-line)" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 1.3 }}
              />
              
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            {/* NODES */}
            
            {/* Top Node: Backend */}
            <motion.div 
              className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
              </div>
              <span className="text-xs font-bold text-blue-300 bg-blue-900/30 px-2 py-1 rounded">Java / Spring</span>
            </motion.div>

            {/* Right Node: Cloud */}
            <motion.div 
              className="absolute top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              <div className="w-10 h-10 rounded-xl bg-green-600/20 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
              </div>
              <span className="text-xs font-bold text-green-300 bg-green-900/30 px-2 py-1 rounded">GCP Cloud</span>
            </motion.div>

            {/* Left Node: Frontend */}
            <motion.div 
              className="absolute top-[50%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, type: "spring" }}
            >
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <span className="text-xs font-bold text-purple-300 bg-purple-900/30 px-2 py-1 rounded">Next.js</span>
            </motion.div>

            {/* Bottom Node: Data */}
            <motion.div 
              className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.1, type: "spring" }}
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-600/20 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
              </div>
              <span className="text-xs font-bold text-yellow-300 bg-yellow-900/30 px-2 py-1 rounded">SQL / Data</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}