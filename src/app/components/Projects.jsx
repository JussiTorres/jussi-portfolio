"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: "eq-boost",
      title: "Chrome EQ Boost",
      version: "v1.2.4 RELEASE",
      badgeColor: "text-red-400 bg-red-900/20 border-red-900/30",
      icon: "/projects/eq-volume/icon.png",
      description: (
        <>
          The ultimate audio control for Chrome. Boost volume up to <span className="text-white font-bold">400%</span>, customize frequencies with a precision <span className="text-white font-bold">3-Band Equalizer</span> (Bass, Mid, Treble), and experience crystal clear sound processing via the Web Audio API.
        </>
      ),
      tags: ['8 Languages', 'Bass Boost', 'Privacy First', 'Low Latency'],
      primaryAction: {
        label: "Install",
        url: "https://chromewebstore.google.com/detail/faklnjopaahkgaeklkplejmknidfcofh?utm_source=item-share-cb",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        ),
        active: true
      },
      secondaryAction: {
        label: "Source Code",
        url: "https://github.com/JussiTorres/chrome-eq-boost"
      },
      visual: "eq"
    },
    {
      id: "soundpulse",
      title: "SoundPulse",
      version: "IN DEVELOPMENT",
      badgeColor: "text-gray-400 bg-white/5 border-white/10",
      icon: null,
      isSecret: true,
      description: "A powerful data visualization platform for Last.fm & ListenBrainz. Tracking listening habits in real-time with pixel-perfect precision.",
      tags: ['Next.js', 'Data Viz', 'Public API', 'Analytics'],
      primaryAction: {
        label: "Coming Soon",
        url: "#",
        icon: <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>,
        active: false
      },
      secondaryAction: null,
      visual: "dna-helix"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-neutral-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[200px] -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white inline-block">
              FEATURED <span className="text-red-600">PROJECTS</span>
            </h2>
            <p className="text-gray-400 max-w-lg font-medium">
              Engineering tools that solve real problems. Built for performance and accessibility.
            </p>
          </div>

          <div className="flex gap-2">
            <button onClick={prevProject} className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-red-600 hover:border-red-600 transition-colors text-white group">
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button onClick={nextProject} className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-red-600 hover:border-red-600 transition-colors text-white group">
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </motion.div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="group relative bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
            >
              <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12 items-center min-h-[500px]">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-black/60 rounded-2xl border border-white/10 shrink-0 flex items-center justify-center">
                      {currentProject.id === 'eq-boost' ? (
                        <Image src={currentProject.icon} alt="Icon" width={48} height={48} className="w-12 h-12" />
                      ) : (
                        <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none mb-2">{currentProject.title}</h3>
                      <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded border inline-block ${currentProject.badgeColor}`}>
                        {currentProject.version}
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    {currentProject.isSecret ? (
                      <div className="space-y-4">
                        <div className="bg-red-950/30 border border-red-500/20 p-3 rounded-lg flex items-center gap-3 w-fit">
                          <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                          <span className="font-mono text-xs text-red-400 font-bold tracking-widest uppercase select-none">IN ACTIVE DEVELOPMENT</span>
                        </div>
                        <p className="text-gray-500 text-lg blur-[5px] select-none opacity-50 leading-relaxed">{currentProject.description}</p>
                      </div>
                    ) : (
                      <p className="text-gray-400 leading-relaxed font-medium text-lg">{currentProject.description}</p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag) => (
                      <span key={tag} className="text-xs font-bold text-gray-300 bg-white/5 px-3 py-1 rounded border border-white/5">{tag}</span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    {currentProject.primaryAction.active ? (
                      <a href={currentProject.primaryAction.url} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-red-600/20 flex items-center gap-2 text-sm uppercase tracking-wide cursor-pointer hover:scale-105 active:scale-95">
                        {currentProject.primaryAction.icon} {currentProject.primaryAction.label}
                      </a>
                    ) : (
                      <div className="px-8 py-4 rounded-full font-bold text-gray-500 border border-white/5 bg-white/5 text-sm uppercase tracking-wide cursor-not-allowed flex items-center gap-2">
                        {currentProject.primaryAction.icon} {currentProject.primaryAction.label}
                      </div>
                    )}
                    {currentProject.secondaryAction && (
                      <a href={currentProject.secondaryAction.url} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-bold text-gray-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all text-sm uppercase tracking-wide flex items-center justify-center hover:scale-105 active:scale-95 text-center">
                        {currentProject.secondaryAction.label}
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Refined Visual Showcase */}
                <div className="relative h-full min-h-[300px] md:min-h-full bg-gradient-to-br from-neutral-900/80 to-black/60 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

                  {/* EQ VISUAL: Diamond shape, slower RGB, independent movement */}
                  {currentProject.visual === 'eq' && (
                    <div className="flex gap-2 items-end h-40 z-10">
                      {[...Array(10)].map((_, i) => {
                        // Calculate distance from center to create the diamond shape
                        const distFromCenter = Math.abs(i - 4.5);
                        const heightMultiplier = 1 - (distFromCenter / 6); // Center bars are taller

                        return (
                          <motion.div
                            key={i}
                            animate={{
                              height: [
                                `${25 * heightMultiplier}%`,
                                `${85 * heightMultiplier}%`,
                                `${50 * heightMultiplier}%`,
                                `${25 * heightMultiplier}%`
                              ],
                              backgroundColor: ["#ef4444", "#f97316", "#7c3aed", "#ef4444"],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 3 + (i * 0.2), // Increased duration for slower, smoother RGB and movement
                              ease: "easeInOut"
                            }}
                            className="w-3 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                          />
                        );
                      })}
                    </div>
                  )}

                  {/* DNA HELIX VISUAL: Red vs Blue contrast, 12 segments */}
                  {currentProject.visual === 'dna-helix' && (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      <div className="flex gap-3 md:gap-5 scale-90 md:scale-110">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="relative h-48 flex flex-col justify-center items-center">

                            {/* Strand 1: Pure Red */}
                            <motion.div
                              animate={{
                                y: [-50, 50, -50],
                                scale: [1.2, 0.6, 1.2],
                                zIndex: [10, 0, 10]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                              }}
                              className="absolute w-3.5 h-3.5 rounded-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.6)]"
                            />

                            {/* Strand 2: Pure Blue (Offset) */}
                            <motion.div
                              animate={{
                                y: [50, -50, 50],
                                scale: [0.6, 1.2, 0.6],
                                zIndex: [0, 10, 0]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                              }}
                              className="absolute w-3.5 h-3.5 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-red-600" : "bg-white/20 hover:bg-white/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}