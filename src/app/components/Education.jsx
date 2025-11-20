export default function Education() {
  return (
    <section className="py-16 px-4 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 border-b border-gray-800 pb-4">
          <span className="text-yellow-500">./</span>ACADEMIC_RECORD
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l border-gray-700/50 space-y-12">
          
          {/* EDUCATION ENTRY 1: Universidad del Magdalena */}
          <div className="mb-8 ml-6">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-black animate-pulse"></div>
            
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">
              STATUS: CURRENTLY ENROLLED
            </p>
            <h3 className="text-xl font-bold text-white mb-2">
              Systems Engineering
            </h3>
            
            <p className="text-gray-400 font-mono text-sm">
              Universidad del Magdalena, Colombia
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Focus on operating systems, network architecture, and data analysis.
            </p>
          </div>

          {/* FUTURE ENTRY 1: Certifications / Specialization */}
          <div className="mb-8 ml-6 opacity-50">
            <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-black"></div>
            
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">
              STATUS: PENDING
            </p>
            <h3 className="text-xl font-bold text-gray-400 mb-2">
              [FUTURE CERTIFICATION / SPECIALIZATION]
            </h3>
            
            <p className="text-gray-600 font-mono text-sm">
              [Institution Name]
            </p>
            <p className="text-gray-700 text-xs mt-1">
              *To be added: e.g., AWS Certified Cloud Practitioner, Japanese Language Proficiency Test (JLPT N5).*
            </p>
          </div>

          {/* FUTURE ENTRY 2: Professional Experience */}
          <div className="mb-8 ml-6 opacity-30">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-black"></div>
            
            <p className="text-xs text-gray-800 font-mono uppercase tracking-widest mb-1">
              STATUS: UNAVAILABLE
            </p>
            <h3 className="text-xl font-bold text-gray-500 mb-2">
              [FUTURE PROFESSIONAL ROLE]
            </h3>
          </div>

        </div>
        
        {/* Call to Action for References */}
        <div className="mt-16 text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 font-mono text-sm">
            For detailed references, please initiate the <span className="text-blue-500">INITIATE_HANDSHAKE</span> protocol below.
          </p>
        </div>

      </div>
    </section>
  );
}