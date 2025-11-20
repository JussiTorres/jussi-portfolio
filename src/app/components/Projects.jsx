export default function Projects() {
  return (
    // Tighter Vertical Padding (py-16) and Full Width Container
    <section className="bg-neutral-950 text-white py-16 px-4 border-b border-gray-900">
      
      {/* Section Header - Centered Max-Width */}
      <div className="max-w-6xl mx-auto mb-10 border-b border-gray-800 pb-4">
        <h2 className="text-3xl font-black uppercase tracking-tighter">
          <span className="text-red-600">./</span>PROJECT_LOGS
        </h2>
      </div>

      {/* Grid of Terminals - Centered and Spaced */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* PROJECT 1: C / OS Logic */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-900 rounded opacity-50 blur group-hover:opacity-100 transition duration-200"></div>
          <div className="relative h-full bg-black border border-gray-800 rounded p-4 font-mono text-sm flex flex-col">
            
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-gray-500 text-xs">bash — 80x24</span>
            </div>

            {/* Terminal Body for Project 1: Spring Boot/Java Backend */}
            <div className="space-y-2 text-gray-300 flex-grow">
              <p className="text-blue-400">$ ./mvnw spring-boot:run</p>
              <p>  .   ____</p>
              <p> /\\ / ___'\_, </p>
              <p>[INFO] Starting service on port 8080</p>
              <p className="text-yellow-500">Binding JMX to 127.0.0.1:9010</p>
              <p className="text-green-500">Service [Users-API] initialized.</p>
              <br/>
              <p className="text-gray-500">// A RESTful API built with Java/Spring Boot, connected to a PostgreSQL database.</p>
            </div>
            
            {/* Button */}
            <button className="mt-6 w-full py-2 border border-blue-900 hover:bg-blue-900/30 text-blue-400 text-xs uppercase tracking-widest transition-colors">
              View API Docs
            </button>
          </div>
        </div>

        {/* PROJECT 2: Crypto Analysis */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-900 rounded opacity-50 blur group-hover:opacity-100 transition duration-200"></div>
          <div className="relative h-full bg-black border border-gray-800 rounded p-4 font-mono text-sm flex flex-col">
            
            <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-gray-500 text-xs">node — analysis.js</span>
            </div>

            <div className="space-y-2 text-gray-300 flex-grow">
              <p className="text-green-400">$ node crypto_bot.js</p>
              <p>Fetching market data...</p>
              <div className="pl-2 border-l-2 border-gray-700 my-2">
                <p>BTC: $98,230 <span className="text-green-500">▲ 2.4%</span></p>
                <p>ETH: $3,400 <span className="text-red-500">▼ 0.8%</span></p>
              </div>
              <p>Calculating RSI... 72 (Overbought)</p>
              <p className="animate-pulse text-red-500"> SIGNAL: SHORT_SELL EXECUTED</p>
              <br/>
              <p className="text-gray-500">// Automated trading script analyzing market sentiment and technical indicators.</p>
            </div>

            <button className="mt-6 w-full py-2 border border-green-900 hover:bg-green-900/30 text-green-400 text-xs uppercase tracking-widest transition-colors">
              Analyze Data
            </button>
          </div>
        </div>

        {/* PROJECT 3: Hardware / Gaming */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded opacity-50 blur group-hover:opacity-100 transition duration-200"></div>
          <div className="relative h-full bg-black border border-gray-800 rounded p-4 font-mono text-sm flex flex-col">
            
            <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-gray-500 text-xs">htop — system</span>
            </div>

            <div className="space-y-2 text-gray-300 flex-grow">
              <p className="text-red-400">root@wild_rift:~/stats#</p>
              <div className="grid grid-cols-2 gap-2 my-2 text-xs">
                <div>CPU_LOAD:</div><div className="text-right">12%</div>
                <div>RANK:</div><div className="text-right text-blue-400">MASTER II</div>
                <div>WINRATE:</div><div className="text-right text-green-400">58.2%</div>
                <div>MAIN:</div><div className="text-right text-purple-400">KHA'ZIX</div>
              </div>
              <p className="text-gray-400">Optimizing jungle pathing algorithms...</p>
              <br/>
              <p className="text-gray-500">// Personal analytics dashboard for tracking gaming performance and hardware stats.</p>
            </div>

            <button className="mt-6 w-full py-2 border border-red-900 hover:bg-red-900/30 text-red-400 text-xs uppercase tracking-widest transition-colors">
              Check Stats
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}