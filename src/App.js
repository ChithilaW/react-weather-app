import React, { useState } from 'react';

export default function App() {
  const [activeAvenue, setActiveAvenue] = useState('All');

  // Unified database containing real, recent signature initiatives of ICAC
  const projectsData = [
    {
      title: "RACE FOR CHANGE",
      description: "The premier signature fundraising walkathon and open carnival driving massive socio-economic community operation financing.",
      avenue: "Finance",
      tag: "Fundraiser",
      gradient: "from-amber-600 to-stone-900"
    },
    {
      title: "SPLISH SPLASH",
      description: "Uplifting rural schools across Sri Lanka by building pure water filtration infrastructure, piping units, and sanitary facilities.",
      avenue: "Community Service",
      tag: "Infrastructure",
      gradient: "from-[#7A0016] to-red-950"
    },
    {
      title: "HOPE",
      description: "Long-standing landmark annual healthcare campaign delivering clinical supplies, equipment, and pediatric resources to state hospitals.",
      avenue: "Community Service",
      tag: "Welfare",
      gradient: "from-amber-800 to-[#7A0016]"
    },
    {
      title: "RHETORIK",
      description: "The highly prominent premier inter-school public speaking championship fostering elite communication masters across the district.",
      avenue: "Club Service",
      tag: "Oratory",
      gradient: "from-slate-800 to-slate-950"
    },
    {
      title: "INTERCON",
      description: "Intra-club sports encounters, leadership training camps, and ice-breaking programs to maximize inter-member bonding and chemistry.",
      avenue: "Club Service",
      tag: "Bonding",
      gradient: "from-blue-900 to-slate-950"
    },
    {
      title: "ECO ACTION",
      description: "Massive coastal cleanup operations, urban tree planting campaigns, and electronic waste processing drives for climate action.",
      avenue: "Green Life",
      tag: "Environment",
      gradient: "from-emerald-800 to-teal-950"
    },
    {
      title: "GLOBAL BOUNDS",
      description: "International youth dialogue forums and cultural exchange initiatives executed hand-in-hand with foreign twin clubs.",
      avenue: "International Understanding",
      tag: "Global",
      gradient: "from-indigo-900 to-slate-950"
    },
    {
      title: "VOICE OF ANANDA",
      description: "Advanced public relations digital storytelling framework and content hub amplifying the social impact of youth service.",
      avenue: "Public Relations (PR)",
      tag: "Media",
      gradient: "from-pink-900 to-purple-950"
    }
  ];

  // Complete, official registry of all 14 past DIRs from Ananda College
  const pastDirs = [
    { name: "Int. PP. Arjuna Gunawardena", year: "1984/1985" },
    { name: "Int. PP. Shehan Gunawardena", year: "1988/1990" },
    { name: "Int. PP. Sanjeewa Wickramarachchi", year: "1991/1992" },
    { name: "Int. PP. Duminda De Silva", year: "1993/1994" },
    { name: "Int. PP. Chamath Athulathmudali", year: "1997/1998" },
    { name: "Int. PP. Nishantha De Silva", year: "1998/1999" },
    { name: "Int. PP. Birendra Katugampola", year: "2000/2001" },
    { name: "Int. PP. Shashike De Silva", year: "2003/2004" },
    { name: "Int. PP. Shammi Weerasinghe", year: "2005/2006" },
    { name: "Int. PP. PHF. Harinda Senarathne", year: "2010/2011" },
    { name: "Int. PP. Dinuka Sumithrarachchi", year: "2011/2012" },
    { name: "Int. PP. Sandupama Basnayaka", year: "2013/2014" },
    { name: "Int. PP. Chathula Fernando", year: "2016/2017" },
    { name: "Int. PP. Asel Karannagoda", year: "2018/2019" }
  ];

  const filteredProjects = activeAvenue === 'All' 
    ? projectsData 
    : projectsData.filter(proj => proj.avenue === activeAvenue);

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans selection:bg-[#FFCC00] selection:text-[#7A0016] scroll-smooth">
      
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <img 
            src="/images/logo.png" 
            alt="ICAC Logo" 
            className="w-10 h-10 object-contain rounded-full border border-[#FFCC00]/40 shadow-md"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="font-bold text-base md:text-lg tracking-wide hidden sm:inline">Interact Club of Ananda College</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide text-slate-300">
          <a href="#about" className="hover:text-[#FFCC00] transition">About</a>
          <a href="#history" className="hover:text-[#FFCC00] transition">History</a>
          <a href="#avenues" className="hover:text-[#FFCC00] transition">Avenues</a>
          <a href="#projects" className="hover:text-[#FFCC00] transition">Projects</a>
          <a href="#board" className="hover:text-[#FFCC00] transition">Roster</a>
        </div>
        <button className="bg-[#7A0016] hover:bg-red-800 text-white px-5 py-2 rounded-full font-bold text-xs md:text-sm shadow-md border border-[#FFCC00]/30 transition-all active:scale-95 cursor-pointer">
          Register for R4C
        </button>
      </nav>

      {/* Hero Header */}
      <header id="about" className="relative flex flex-col items-center justify-center text-center px-4 py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
        <span className="text-[#FFCC00] uppercase tracking-[0.25em] font-black text-xs mb-6 bg-[#7A0016]/40 px-4 py-1.5 rounded-full border border-[#7A0016]/60">
          Interact District 3220
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl mb-6 leading-[1.15]">
          An Unparalleled Legacy of <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] via-amber-400 to-[#FFCC00]">Leadership & Service</span>
        </h1>
        <p className="text-slate-400 text-base md:text-xl max-w-2xl text-balance mb-10 font-normal leading-relaxed">
          "Inspiring change through action." Meet the leadership driving our historic operations forward.
        </p>
      </header>
      {/* Club History Section */}
      <section id="history" className="py-20 bg-slate-950/40 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Our Historic Legacy</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Founded in 1970, ICAC holds an unmatched historical record in the Sri Lankan youth movement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4 text-slate-400 text-sm md:text-base leading-relaxed">
              <p>
                The journey of the Interact Club of Ananda College is an unbroken tale of peak leadership. ICAC holds the highly distinguished national record of producing the highest single contribution of <strong className="text-white font-bold">District Interact Representatives (DIRs)</strong> to District 3220.
              </p>
              <p>
                From executing historic milestones to securing consecutive <strong className="text-white font-bold">Citation Awards</strong> and prestigious <strong className="text-white font-bold">Governor's Shields</strong>, the members of ICAC continue to build foundational service benchmarks that echo throughout the global community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800/60 text-center">
                <h3 className="text-3xl font-black text-[#FFCC00] mb-1">14</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">DIRs Produced</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800/60 text-center">
                <h3 className="text-3xl font-black text-[#FFCC00] mb-1">14</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Citation Awards</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800/60 text-center">
                <h3 className="text-3xl font-black text-[#FFCC00] mb-1">1970</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Year of Inception</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800/60 text-center">
                <h3 className="text-3xl font-black text-[#FFCC00] mb-1">2x</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Governor Shields</p>
              </div>
            </div>
          </div>

          {/* Hall of Fame: All 14 Past DIRs Grid Layout */}
          <div className="bg-slate-950/60 border border-slate-800/80 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-100 mb-6 tracking-wide text-center lg:text-left">The Hall of Fame: Past DIRs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pastDirs.map((dir, i) => (
                <div key={i} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/60 hover:border-[#7A0016]/40 transition flex flex-col justify-center">
                  <span className="text-[10px] font-black text-[#FFCC00] tracking-wider uppercase block mb-1">
                    ({dir.year})
                  </span>
                  <p className="font-bold text-xs md:text-sm text-slate-200 leading-tight">
                    {dir.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Avenues Picker Section */}
      <section id="avenues" className="py-12 bg-slate-900 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black tracking-tight mb-2">Our Operational Pillars</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Select an Avenue below to see its active flagship initiatives updates.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['All', 'Community Service', 'Club Service', 'Green Life', 'International Understanding', 'Finance', 'Public Relations (PR)'].map((ave) => (
              <button
                key={ave}
                onClick={() => setActiveAvenue(ave)}
                className={`px-4 py-2 rounded-xl font-bold text-xs md:text-sm border transition-all cursor-pointer ${
                  activeAvenue === ave 
                    ? 'bg-[#7A0016] text-white border-[#FFCC00]/50 shadow-md scale-105' 
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                {ave}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Dynamic Interactive Projects Showcase */}
      <section id="projects" className="py-16 bg-slate-950/40 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-2">
                Showing {activeAvenue === 'All' ? 'All Flagship' : activeAvenue} Projects
              </h2>
              <p className="text-slate-400 text-sm">
                Displaying {filteredProjects.length} active initiatives under this selection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700/60 shadow-md transition-all flex flex-col group"
              >
                <div className={`h-40 bg-gradient-to-tr ${project.gradient} flex items-center justify-center relative p-4 shrink-0`}>
                  <span className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur text-[#FFCC00] text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md border border-slate-700">
                    {project.tag}
                  </span>
                  <span className="text-white font-black text-xl tracking-wider text-center group-hover:scale-105 transition-transform">
                    {project.title}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[11px] font-bold text-[#FFCC00]/80 tracking-wide uppercase block mb-1">
                      {project.avenue}
                    </span>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration, Documentation & Cloud Assets Stack */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800/50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7A0016]/15 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-[#FFCC00] uppercase tracking-[0.25em] font-black text-[11px] block mb-4">
            Registration & Documentation
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Affiliations
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10">
            Use the following links to register to join the Interact Club of Ananda College. <br />
            <span className="text-slate-500 font-semibold text-xs mt-2 block">(Only applicable to students of Ananda College)</span>
          </p>

          <div className="flex flex-col gap-4 max-w-xs mx-auto">
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-black/40 hover:bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-white font-bold tracking-[0.2em] text-xs uppercase py-4 rounded-full transition-all shadow-md active:scale-98 cursor-pointer"
            >
              Register Now
            </a>
            
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-black/40 hover:bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-white font-bold tracking-[0.2em] text-xs uppercase py-4 rounded-full transition-all shadow-md active:scale-98 cursor-pointer"
            >
              District Drive
            </a>

            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-black/40 hover:bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-white font-bold tracking-[0.2em] text-xs uppercase py-4 rounded-full transition-all shadow-md active:scale-98 cursor-pointer"
            >
              Doc Formats
            </a>
          </div>
        </div>
      </section>
      {/* Executive Committee Section */}
      <section id="board" className="py-20 bg-slate-950/40 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Executive Committee</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">The primary pillars running core operations and executive strategy for ICAC.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {[
              { name: "Int. Kemith Rajapakse", role: "President", img: "/images/president.jpg", highlight: true },
              { name: "Int. Gagul Jayawardena", role: "Secretary", img: "/images/secretary.jpg" },
              { name: "Int. Nathan Malwana", role: "Treasurer", img: "/images/treasurer.jpg" },
              { name: "Int. Nethuka Dahanayaka", role: "Vice President", img: "/images/vicepresident1.jpg" },
              { name: "Int. Yasith Wickramasinghe", role: "Vice President", img: "/images/vicepresident2.jpg" },
              { name: "Int. Sesath Cabbral", role: "Assistant Secretary", img: "/images/assistantsecretary.jpg" },
              { name: "Int. Nilush Liyanage", role: "Assistant Treasurer", img: "/images/assistanttreasurer.jpg" },
              { name: "Int. Nethula Edirimanne", role: "Sergeant at Arms", img: "/images/sergeantatarms1.jpg" },
              { name: "Int. Hiruja Wanniarachchi", role: "Sergeant at Arms", img: "/images/sergeantatarms2.jpg" },
              { name: "Int. Kaviru Thineth", role: "Editor", img: "/images/editor.jpg" },
              { name: "Int. Ronal Jayarathna", role: "Head of Directors", img: "/images/headofdirectors.jpg" }
            ].map((member, i) => (
              <div key={i} className={`p-6 rounded-2xl border text-center transition-all ${
                member.highlight 
                  ? 'bg-slate-900 border-[#7A0016] shadow-lg shadow-[#7A0016]/10' 
                  : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
              }`}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className={`w-24 h-24 rounded-full mx-auto mb-4 object-cover border ${
                    member.highlight ? 'border-[#FFCC00]/60 shadow-md' : 'border-slate-700'
                  }`}
                  onError={(e) => { e.target.src = "https://unsplash.com"; }}
                />
                <h4 className="font-bold text-base text-slate-100">{member.name}</h4>
                <p className={`text-xs font-bold tracking-wider uppercase mt-1.5 ${
                  member.highlight ? 'text-[#FFCC00]' : 'text-slate-400'
                }`}>{member.role}</p>
              </div>
            ))}
          </div>

          {/* Director Board Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Director Board</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">Avenue managers engineering targeted local and international projects.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Int. Gayanuka Fernando", role: "Director of Finance", img: "/images/dir_finance.jpg" },
              { name: "Int. Thinura Jayasinghe", role: "Co-Director of Community Service", img: "/images/dir_community1.jpg" },
              { name: "Int. Chithila Wanniarachchi", role: "Co-Director of Community Service", img: "/images/dir_community2.jpg" },
              { name: "Int. Susith Gallage", role: "Co-Director of Club Service", img: "/images/dir_club1.jpg" },
              { name: "Int. Binul De Silva", role: "Co-Director of Club Service", img: "/images/dir_club2.jpg" },
              { name: "Int. Javinu Sewhas", role: "Co-Director of Greenlife", img: "/images/dir_greenlife1.jpg" },
              { name: "Int. Sanuth Dulwan", role: "Co-Director of Greenlife", img: "/images/dir_greenlife2.jpg" },
              { name: "Int. Damsas Jayasinghe", role: "Co-Director of International Understanding", img: "/images/dir_iu1.jpg" },
              { name: "Int. Onitha Thilakarathne", role: "Co-Director of International Understanding", img: "/images/dir_iu2.jpg" },
              { name: "Int. Binara Supun", role: "Co-Director of Public Relations", img: "/images/dir_pr1.jpg" },
              { name: "Int. Ahas Karunaratne", role: "Co-Director of Public Relations", img: "/images/dir_pr2.jpg" }
            ].map((dir, i) => (
              <div key={i} className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl flex items-center space-x-4 hover:border-slate-700 transition">
                <img 
                  src={dir.img} 
                  alt={dir.name} 
                  className="w-14 h-14 rounded-full object-cover border border-slate-700 bg-slate-800 shrink-0" 
                  onError={(e) => { e.target.src = "https://unsplash.com"; }}
                />
                <div>
                  <h5 className="font-bold text-sm text-slate-200">{dir.name}</h5>
                  <p className="text-[11px] text-[#FFCC00]/80 font-semibold uppercase tracking-wider mt-0.5">{dir.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500 font-medium">
        &copy; {new Date().getFullYear()} Interact Club of Ananda College. All Rights Reserved.
      </footer>
    </div>
  );
}
