export default function Contact() {
  return (
    <section className="py-20 px-4 border-t border-gray-900 bg-black text-center">
      
      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-white">
        <span className="text-blue-600">./</span>INITIATE_HANDSHAKE
      </h2>

      {/* NEW: Grid Container for 4 Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-4 max-w-6xl mx-auto">
        
        {/* LINK 1: X (TWITTER) COMMAND */}
        <a href="https://x.com/JussiTorres" target="_blank" 
           className="group relative px-6 py-5 bg-neutral-900 border border-gray-800 transition-all duration-200 text-left shadow-md hover:translate-y-[-1px] hover:shadow-xl hover:border-blue-500">
          <div className="absolute top-0 left-0 w-1 h-full bg-gray-800 group-hover:bg-blue-500 transition-colors"></div>
          <p className="text-xs text-gray-500 mb-1 font-mono">CHANNEL: FEED</p>
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400">X</h3>
          <p className="text-gray-600 text-xs mt-1 font-mono"> random_stuff</p>
        </a>

        {/* LINK 2: GITHUB COMMAND */}
        <a href="https://github.com/JussiTorres" target="_blank" 
           className="group relative px-6 py-5 bg-neutral-900 border border-gray-800 transition-all duration-200 text-left shadow-md hover:translate-y-[-1px] hover:shadow-xl hover:border-gray-500">
          <div className="absolute top-0 left-0 w-1 h-full bg-gray-800 group-hover:bg-white transition-colors"></div>
          <p className="text-xs text-gray-500 mb-1 font-mono">REPO: REMOTE</p>
          <h3 className="text-lg font-bold text-white group-hover:text-gray-300">GIT_HUB</h3>
          <p className="text-gray-600 text-xs mt-1 font-mono"> git clone</p>
        </a>

        {/* LINK 3: LINKEDIN COMMAND (RESTORED) */}
        <a href="https://www.linkedin.com/in/jussi-torres-gonz%C3%A1lez-61753b262/" target="_blank" 
           className="group relative px-6 py-5 bg-neutral-900 border border-gray-800 transition-all duration-200 text-left shadow-md hover:translate-y-[-1px] hover:shadow-xl hover:border-blue-700">
          <div className="absolute top-0 left-0 w-1 h-full bg-gray-800 group-hover:bg-blue-700 transition-colors"></div>
          <p className="text-xs text-gray-500 mb-1 font-mono">CHANNEL: LABOUR</p>
          <h3 className="text-lg font-bold text-white group-hover:text-blue-500">LINKED_IN</h3>
          <p className="text-gray-600 text-xs mt-1 font-mono"> connect</p>
        </a>

        {/* LINK 4: INSTAGRAM COMMAND (New) */}
        <a href="https://www.instagram.com/jussitorresgonzalez/" target="_blank" 
           className="group relative px-6 py-5 bg-neutral-900 border border-gray-800 transition-all duration-200 text-left shadow-md hover:translate-y-[-1px] hover:shadow-xl hover:border-red-500">
          <div className="absolute top-0 left-0 w-1 h-full bg-gray-800 group-hover:bg-red-500 transition-colors"></div>
          <p className="text-xs text-gray-500 mb-1 font-mono">CHANNEL: VISUAL</p>
          <h3 className="text-lg font-bold text-white group-hover:text-red-400">INSTAGRAM</h3>
          <p className="text-gray-600 text-xs mt-1 font-mono"> view_images</p>
        </a>

      </div>

      <div className="mt-20 text-gray-600 font-mono text-xs">
        <p>SYSTEM STATUS: STABLE | UPTIME: 99.9%</p>
        <p className="mt-2">© 2025 JUSSI TORRES. ALL RIGHTS RESERVED.</p>
      </div>

    </section>
  );
}