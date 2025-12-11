"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Mantener import
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

export default function Home() {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-neutral-950 text-white selection:bg-red-500/30">

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Effects (Red Glow) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950 z-0 pointer-events-none" />
        
        {/* Glow Central ROJO */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] -z-10" />

        <div className="z-10 text-center space-y-8 px-6 max-w-5xl">
          
          {/* Profile Picture: Ajustada a w-52 (208px) para balance minimalista */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative mx-auto w-40 h-40 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-tr from-red-600 to-neutral-800"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-neutral-950 relative">
              <img 
                src="/hero.jpg?v=4" 
                alt="Jussi Torres"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Main Title Area */}
          <div className="space-y-2">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-white"
            >
              JUSSI <span className="text-red-600">TORRES</span>
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg md:text-2xl font-medium tracking-wide max-w-2xl mx-auto"
            >
              Student and Full Stack Engineer
            </motion.p>
          </div>

          {/* Action Buttons (Red Theme) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
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