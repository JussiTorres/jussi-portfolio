"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-neutral-950 overflow-hidden">
      
      {/* Background Decor (Red Glows - Matches Hero) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Backdrop Effect (Red Theme) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-neutral-900/20 rounded-3xl blur-xl transform rotate-[-3deg] scale-105" />
          
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 shadow-2xl aspect-[3/4]">
            <Image
              src="/about-me.jpg"
              alt="Jussi Torres"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            
            {/* Minimalist Badge (No Online Status) */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl">
              <p className="text-white text-sm font-bold uppercase tracking-wide">Jussi Torres</p>
              <p className="text-gray-400 text-xs font-mono">SYSTEMS ENGINEER</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Content Area (Red Terminal Aesthetics) */}
        <div className="space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Title matching Hero Font Styles */}
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-white leading-tight">
              ARCHITECTING <br />
              <span className="text-red-600">SCALABLE SYSTEMS</span>
            </h2>
            
            <p className="text-gray-400 leading-relaxed text-lg font-medium">
              I am a Full Stack Engineer driven by performance and clean architecture. 
              My expertise lies in building robust backend systems with <strong className="text-white">Java & Spring Boot</strong>, 
              deploying resilient infrastructure on <strong className="text-white">GCP</strong>, and crafting seamless interfaces.
            </p>
            
            <p className="text-gray-400 leading-relaxed mt-4 font-medium">
              Beyond the code, I channel my creativity through photography and maintain discipline through fitness. 
              I believe in engineering solutions that are not just functional, but elegant and enduring.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}