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

        {/* Right: Content Area (Clean & Simple) */}
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

          {/* Espacio intencionalmente vacío para mantener la elegancia */}

        </div>
      </div>
    </section>
  );
}