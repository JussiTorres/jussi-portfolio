import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 px-6 md:px-20 bg-neutral-900 relative overflow-hidden border-b border-gray-800">

      {/* Toned down background blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">

        {/* Image Column */}
        <div className="relative group max-w-md mx-auto md:mx-0 w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg opacity-50 blur group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-black rounded-lg overflow-hidden border border-gray-800 aspect-square md:aspect-auto md:h-[450px]">
            <Image
              src="/profile.jpg"
              alt="Jussi Torres"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/90 p-2 border-t border-gray-800 flex justify-between px-4">
              <p className="text-[10px] text-blue-400 font-mono">ID: JUSSI_TORRES</p>
              <p className="text-[10px] text-gray-500 font-mono">LOC: COLOMBIA</p>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-tighter">
            <span className="text-blue-500">./</span>About_Me
          </h2>

          <p className="text-gray-400 text-base leading-relaxed font-mono">
            I am a Full Stack Developer specializing in building <span className="text-white font-bold">robust backend systems</span> using <span className="text-white font-bold">Java, Kotlin, and Python</span>. I leverage <span className="text-white font-bold">Google Cloud Platform (GCP)</span> to design and deploy scalable, resilient applications optimized for high performance.
            <br/><br/>
            My focus is on clean architecture and high-availability databases. Away from the terminal, I enjoy <span className="text-white font-bold">photography</span>, which sharpens my eye for detail, and maintaining discipline through <span className="text-white font-bold">exercise</span>.
          </p>

          {/* Skill Bars using Objective Tiers */}
          <div className="space-y-3 font-mono text-xs">
            
            {/* Skill 1: Backend (Java/Kotlin/SpringBoot) - ADVANCED */}
            <div>
              <div className="flex justify-between mb-1">
                <span>JAVA / SPRING BOOT / KOTLIN</span>
                <span className="text-blue-400">ADVANCED</span>
              </div>
              {/* ADVANCED tier uses w-[80%] (e.g., 80% width) */}
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[80%]"></div> 
              </div>
            </div>

            {/* Skill 2: Data & Cloud (SQL/Python/GCP) - PROFICIENT */}
            <div>
              <div className="flex justify-between mb-1">
                <span>SQL / PYTHON / GCP SERVICES</span>
                <span className="text-green-400">PROFICIENT</span>
              </div>
              {/* PROFICIENT tier uses w-[60%] (e.g., 60% width) */}
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[60%]"></div>
              </div>
            </div>

            {/* Skill 3: Cloud & Deployment (GCP/DevOps) - FAMILIAR */}
            <div>
              <div className="flex justify-between mb-1">
                <span>GCP / INFRASTRUCTURE / DEVOPS</span>
                <span className="text-red-400">FAMILIAR</span>
              </div>
              {/* FAMILIAR tier uses w-[30%] (e.g., 30% width) */}
              <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 w-[30%] animate-pulse"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}