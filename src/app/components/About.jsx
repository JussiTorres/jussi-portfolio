"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Tech Stack Data con SVGs Reales
const techStack = [
  {
    name: "Java",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-500"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.137 3.376c.986.088 1.972.414 2.77 1.044-1.207-.221-2.583-.267-3.699.043-.577.179-.825.499-.738 1.019.128 1.053.884 1.812 2.062 1.878.565.043 1.144.057 1.708.016.738-.059 1.516-.104 2.213.278.525.29.934.814.867 1.439-.137 1.085-1.278 2.301-3.627 2.515-1.806.179-4.07-.014-5.501-.893-.336-.207-.551-.716-.295-1.225.149-.306.649-.336 1.251-.12 2.076.756 4.379.813 5.953.306 1.005-.335 1.062-.882.499-1.13-1.075-.484-2.412-.47-3.813-.364-1.472.121-3.007.35-4.216-1.074-.592-.716-.664-1.679-.256-2.644.868-2.063 2.994-1.693 4.509-1.322.177.03.368.058.565.087 1.563.192 2.922-.043 3.614-.691.279-.266.458-.62.55-1.019.164-.648-.071-1.115-.691-1.495-1.045-.634-2.54-.853-4.245-.593-1.363.219-2.527.69-3.363 1.252-.751.511-1.265 1.13-1.391 1.664-.073.294.149.593.55.827.252.148.537.221.813.221.35 0 .715-.103 1.087-.335.472-.293 1.003-.692 1.75-1.003.812-.336 1.691-.538 2.579-.538.179 0 .351.014.537.029zm.252 17.735c-.164-.016-.336-.016-.512-.016-2.178.016-4.352.045-6.514.016-1.178-.03-1.548-.43-1.474-1.618.03-1.061 0-2.107 0-3.168 0-.178.014-.336.014-.512.267 1.47.665 2.954 1.605 4.277 1.266 1.78 3.185 2.827 5.348 3.005.488.044 1.002.03 1.533.016z"/></svg>,
    color: "group-hover:text-red-500"
  },
  {
    name: "Spring Boot",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-500"><path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM8.632 6.886c-1.673.253-3.006 1.635-3.006 3.571 0 1.718 1.19 3.128 2.811 3.506v4.482c-1.621-.378-2.811-1.788-2.811-3.506 0-1.067.465-2.031 1.203-2.706l-.003.004.001-.002.005-.002.007-.005.014-.009.025-.016.053-.029.103-.057c.073-.038.149-.075.231-.112l.026-.012.058-.025.122-.051.257-.099c.182-.067.376-.128.584-.182l-2.336-2.336a6.37 6.37 0 012.317-.964zm5.15 4.564c-1.621.378-2.811 1.788-2.811 3.506 0 1.936 1.333 3.318 3.006 3.571v-2.48c-.451-.216-.751-.647-.751-1.159 0-.635.491-1.163 1.147-1.241v-2.197zm2.811-3.506c1.673.253 3.006 1.635 3.006 3.571 0 1.067-.465 2.031-1.203 2.706l.003-.004-.001.002-.005.002-.007.005-.014.009-.025.016-.053.029-.103.057-.257.124-.058.025-.122.051-.257.099-.584.182 2.336 2.336a6.37 6.37 0 01-2.317.964v-4.482c1.621-.378 2.811-1.788 2.811-3.506 0-1.936-1.333-3.318-3.006-3.571z"/></svg>,
    color: "group-hover:text-green-500"
  },
  {
    name: "Google Cloud",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-500"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm1.394 16.355L11.31 18c-3.267 0-5.933-2.294-5.933-5.75 0-3.457 2.666-5.75 5.933-5.75 1.672 0 2.967.616 3.906 1.507l-1.578 1.521c-.578-.563-1.297-1.007-2.328-1.007-1.875 0-3.406 1.548-3.406 3.729 0 2.182 1.531 3.729 3.406 3.729 1.359 0 2.094-.534 2.594-1.041.406-.397.734-1.027.906-1.917H11.31v-2.164h4.688c.046.233.078.479.078.808 0 1.397-.375 2.973-1.563 4.151-1.156 1.192-2.844 1.808-4.906 1.808-.22 0-.422-.014-.625-.041zm7.85-1.218h-2.197V17.3h-2.197v-2.163h-2.197v-2.164h2.197V10.81h2.197v2.164h2.197v2.164z"/></svg>,
    color: "group-hover:text-blue-500"
  },
  {
    name: "PostgreSQL",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-400"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17zm0-15a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 11.5a5 5 0 110-10 5 5 0 010 10zm0-8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/></svg>,
    color: "group-hover:text-blue-400"
  },
  {
    name: "Next.js",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17zm0-15a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 11.5a5 5 0 110-10 5 5 0 010 10zm0-8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM8 8h2v8H8zm4 0h2v8h-2zm4 0h2v8h-2z"/></svg>,
    color: "group-hover:text-white"
  },
  {
    name: "React",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-cyan-400"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17zm0-15a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 11.5a5 5 0 110-10 5 5 0 010 10zm0-8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM8.5 8.5a3.5 3.5 0 114.95 4.95A3.5 3.5 0 018.5 8.5zm3.5-1a2.5 2.5 0 103.536 3.536A2.5 2.5 0 0012 7.5z"/></svg>,
    color: "group-hover:text-cyan-400"
  },
  {
    name: "Docker",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-500"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17zm0-15a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 11.5a5 5 0 110-10 5 5 0 010 10zm0-8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM7.5 10.5h2v3h-2zm3 0h2v3h-2zm3 0h2v3h-2zm-6-3h2v3h-2zm3 0h2v3h-2zm3 0h2v3h-2zm3 0h2v3h-2zm-9 6h2v3h-2zm3 0h2v3h-2zm3 0h2v3h-2z"/></svg>,
    color: "group-hover:text-blue-500"
  },
  {
    name: "Kubernetes",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17zm0-15a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 11.5a5 5 0 110-10 5 5 0 010 10zm0-8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12 4l-2 3.5h4L12 4zm0 16l2-3.5h-4L12 20zM4 12l3.5-2v4L4 12zm16 0l-3.5 2v-4L20 12z"/></svg>,
    color: "group-hover:text-blue-600"
  }
];

// Duplicamos la lista para el efecto de scroll infinito sin cortes
const infiniteTechStack = [...techStack, ...techStack];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-neutral-950 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mb-16">
        
        {/* Left: Image Area (Sin Cambios) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl transform rotate-[-6deg] scale-105" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50 shadow-2xl">
            <Image
              src="/about-me.jpg"
              alt="Jussi Torres"
              width={600}
              height={800}
              className="object-cover w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
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

        {/* Right: Content Area (Texto sin cambios) */}
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
        </div>
      </div>

      {/* --- NUEVO: INFINITE TECH SCROLLER (Adiós Windows XP) --- */}
      <div className="relative w-full py-10 overflow-hidden bg-white/5 border-y border-white/10 backdrop-blur-sm">
        
        {/* Máscaras de desvanecimiento en los bordes */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-12 pr-12"
          >
            {infiniteTechStack.map((tech, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center justify-center gap-3 min-w-[100px] cursor-default transition-all duration-300 hover:scale-110"
              >
                <div className={`text-gray-400 transition-colors duration-300 ${tech.color}`}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}