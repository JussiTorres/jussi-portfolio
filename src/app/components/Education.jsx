"use client";
import { motion } from "framer-motion";

export default function Education() {
  const timelineData = [
    {
      year: "2021 — Present",
      title: "Systems Engineering",
      institution: "Universidad del Magdalena",
      description: null, // Minimalismo absoluto
      status: "Enrolled",
      color: "bg-blue-500",
    },
    {
      year: "2023",
      title: "EF SET English Certificate",
      institution: "EF Standard English Test",
      description: "Score: 77/100 (Reading: 78, Listening: 76).", // Solo el dato duro
      status: "C2 Proficient",
      color: "bg-teal-500",
      link: "https://cert.efset.org/ErenWy"
    },
  ];

  return (
    <section id="education" className="py-24 relative bg-neutral-950 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-900/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic & Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Timeline
            </span>
          </h2>
          <p className="text-gray-400">
            The journey from student to Full Stack Engineer.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/50 via-teal-600/50 to-transparent -translate-x-1/2 md:translate-x-0" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-neutral-950 border-2 border-blue-500 rounded-full -translate-x-1/2 md:translate-x-0 mt-6 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                  <div className={`w-full h-full rounded-full ${item.color} opacity-50 animate-ping`} />
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 flex justify-center md:block">
                  <div className={`group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-colors backdrop-blur-sm ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                        {item.year}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        item.status === 'Enrolled' 
                          ? 'border-green-500/30 text-green-400 bg-green-500/10' 
                          : 'border-teal-500/30 text-teal-400 bg-teal-500/10'
                      }`}>
                        {item.status.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className={`text-sm text-gray-400 font-medium ${item.description ? "mb-2" : ""}`}>
                      {item.institution}
                    </p>
                    
                    {item.description && (
                      <p className="text-gray-500 text-xs font-mono">
                        {item.description}
                      </p>
                    )}

                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors"
                      >
                        View Certificate 
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}