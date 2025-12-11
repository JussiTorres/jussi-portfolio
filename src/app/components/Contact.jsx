"use client";
import { motion } from "framer-motion";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/JussiTorres",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
      ),
      color: "hover:border-gray-500 hover:text-gray-400 hover:bg-gray-900/50",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jussi-torres-gonz%C3%A1lez-61753b262/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      ),
      color: "hover:border-blue-500 hover:text-blue-400 hover:bg-blue-900/20",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/JussiTorres",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      ),
      color: "hover:border-white hover:text-white hover:bg-white/10",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jussitorresgonzalez/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      ),
      color: "hover:border-red-500 hover:text-red-400 hover:bg-red-900/20",
    },
  ];

  return (
    <footer id="contact" className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-gray-900">
      
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Let's Build <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Something Great.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <a 
            href="mailto:contact@jussitorres.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Send me an Email
          </a>
        </motion.div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 group ${link.color}`}
            >
              <div className="mb-4 text-gray-400 group-hover:text-inherit transition-colors transform group-hover:scale-110 duration-300">
                {link.icon}
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500 font-mono uppercase tracking-widest">
          <p>© {currentYear} Jussi Torres. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Loc: Colombia</span>
            <span>Status: Online</span>
          </div>
        </div>

      </div>
    </footer>
  );
}