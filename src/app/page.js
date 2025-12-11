"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Mantenemos el import por si lo necesitas más tarde

export default function Home() {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-neutral-950 text-white selection:bg-blue-500/30">

      {/* --- HERO SECTION MODERNIZED --- */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Effects (Subtle & Modern) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950 z-0 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

        <div className="z-10 text-center space-y-8 px-6 max-w-5xl">
          
          {/* Animated Profile Picture: USANDO <img> para evitar el error de Next.js */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-gray-800"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-neutral-950 relative">
              <img // <-- FIX: Cambiado de <Image> a <img>
                src="/hero.jpg?v=3" // <-- FIX: Usando el parámetro v=3 para cache bust
                alt="Jussi Torres"
                className="object-cover w-full h-full" // <-- Necesita dimensiones explícitas
              />
            </div>
          </motion.div>

          {/* Main Title Area */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-white"
            >
              JUSSI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">TORRES</span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-sm md:text-lg font-medium tracking-wide max-w-2xl mx-auto"
            >
              Full Stack Engineer & Cloud Architect creating high-performance systems.
            </motion.p>
          </div>

          {/* Tech Stack Pills (Clean Look) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['Java / Spring Boot', 'Google Cloud Platform', 'Next.js', 'SQL Optimization'].map((tech, i) => (
              <span key={i} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm text-gray-300 font-mono hover:bg-white/10 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              View Featured Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3.5 bg-neutral-900 border border-white/10 hover:bg-white/5 text-white font-medium rounded-full transition-all flex items-center justify-center hover:scale-105 active:scale-95"
            >
              Contact Me
            </button>
          </motion.div>

        </div>

      </section>

      {/* --- CONTENT SECTIONS --- */}
      <About />
      <Education />
      <Projects />
      
      <div id="contact">
        <Contact />
      </div>

    </main>
  );
}