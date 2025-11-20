import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white font-mono selection:bg-blue-500/30">

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-gray-900">

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}>
        </div>

        {/* Hero Content */}
        <div className="z-10 text-center space-y-6 px-4 max-w-4xl"> {/* Adjusted space-y-6 for tighter feel */}

          {/* --- Circular Profile Picture --- */}
          <div className="pt-4 flex justify-center"> {/* Added some top padding */}
            <div className="relative w-34 h-34 md:w-42 md:h-42 rounded-full overflow-hidden border-2 border-blue-600 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <Image
                src="/hero.jpg"
                alt="Jussi Torres Profile"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-gray-200 to-red-600 animate-pulse">
                  Jussi Torres
              </span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm text-gray-400 font-bold mt-2">
            <span className="px-3 py-1 border border-gray-800 rounded bg-black/50 text-white">FULL_STACK_DEVELOPER</span>
            <span className="text-gray-500">//</span>
            <span className="px-3 py-1 border border-gray-800 rounded bg-black/50 text-blue-400">FULL_STACK_JAVA</span>
            <span className="text-gray-500">,</span>
            <span className="px-3 py-1 border border-gray-800 rounded bg-black/50 text-green-400">GCP_SERVICES</span>
            <span className="text-gray-500">,</span>
            <span className="px-3 py-1 border border-gray-800 rounded bg-black/50 text-yellow-500">SQL_OPTIMIZATION</span>
          </div>

          <div className="pt-6">
            <button className="px-8 py-3 bg-white text-black font-bold hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(37,99,235,0.5)] hover:translate-y-[-2px]">
              INITIALIZE_SYSTEM()
            </button>
          </div>
        </div>

        {/* Footer Status */}
        <div className="absolute bottom-6 text-[10px] text-gray-600 flex gap-4 uppercase tracking-widest">
          <p>HEAP_SIZE: 1024MB</p>
          <p>STATUS: LISTENING</p>
        </div>

      </section>

      {/* --- CONTENT SECTIONS --- */}
      <About />
      <Education />
      <Projects />
      <Contact />

    </main>
  );
}