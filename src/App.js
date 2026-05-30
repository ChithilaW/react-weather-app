import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [projectFilter, setProjectFilter] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Drop this exact block directly underneath your "isMobileMenuOpen" state declaration in Part 1:
React.useEffect(() => {
  document.title = "ICAC";
}, []);


  // Executive Committee with local image paths
  const execCommittee = [
    { role: "President", name: "Int. Kemith Rajapakse", img: "/board/kemith.png" },
    { role: "Secretary", name: "Int. Gagul Jayawardena", img: "/board/gagul.png" },
    { role: "Treasurer", name: "Int. Nathan Malwana", img: "/board/nathan.png" },
    { role: "Vice President", name: "Int. Nethuka Dahanayaka", img: "/board/nethuka.png" },
    { role: "Vice President", name: "Int. Yasith Wickramasinghe", img: "/board/yasith.png" },
    { role: "Sergeant at Arms", name: "Int. Nethula Edirimanne", img: "/board/nethula-e.png" },
    { role: "Sergeant at Arms", name: "Int. Hiruja Wanniarachchi", img: "/board/hiruja.png" },
    { role: "Editor", name: "Int. Kaviru Thineth", img: "/board/kaviru.png" },
    { role: "Head of Directors", name: "Int. Ronal Jayarathna", img: "/board/ronal.png" },
    { role: "Assistant Secretary", name: "Int. Sesath Cabbral", img: "/board/sesath.png" },
    { role: "Assistant Treasurer", name: "Int. Nilush Liyanage", img: "/board/nilush.png" }
  ];

  // Director Board matching layout requirements
  const directorBoard = [
    { name: "Int. Gayanuka Fernando", role: "DIRECTOR OF FINANCE", avenue: "finance", img: "/board/gayanuka.png" },
    { name: "Int. Thinura Jayasinghe", role: "CO-DIRECTOR OF COMMUNITY SERVICE", avenue: "community", img: "/board/thinura.png" },
    { name: "Int. Chithila Wanniarachchi", role: "CO-DIRECTOR OF COMMUNITY SERVICE", avenue: "community", img: "/board/chithila.png" },
    { name: "Int. Susith Gallage", role: "CO-DIRECTOR OF CLUB SERVICE", avenue: "club", img: "/board/susith.png" },
    { name: "Int. Binul De Silva", role: "CO-DIRECTOR OF CLUB SERVICE", avenue: "club", img: "/board/binul.png" },
    { name: "Int. Javinu Sewhas", role: "CO-DIRECTOR OF GREENLIFE", avenue: "greenlife", img: "/board/javinu.png" },
    { name: "Int. Sanuth Dulwan", role: "CO-DIRECTOR OF GREENLIFE", avenue: "greenlife", img: "/board/sanuth.png" },
    { name: "Int. Damsas Jayasinghe", role: "CO-DIRECTOR OF INTERNATIONAL UNDERSTANDING", avenue: "international", img: "/board/damsas.png" },
    { name: "Int. Onitha Thilakarathne", role: "CO-DIRECTOR OF INTERNATIONAL UNDERSTANDING", avenue: "international", img: "/board/onitha.png" },
    { name: "Int. Binara Supun", role: "CO-DIRECTOR OF PUBLIC RELATIONS", avenue: "pr", img: "/board/binara.png" },
    { name: "Int. Ahas Karunaratne", role: "CO-DIRECTOR OF PUBLIC RELATIONS", avenue: "pr", img: "/board/ahas.png" }
  ];

  // Past DIRs ordered Chronologically according to Image 2
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

  const flagshipProjects = [
    { name: "SPLISH SPLASH", tag: "FUNDRAISER", avenue: "FINANCE", id: "finance", gradient: "from-amber-600 to-stone-900" },
    { name: "MOJITO MANIA '26", tag: "FUNDRAISER", avenue: "FINANCE", id: "finance", gradient: "from-green-600 to-black" },
    { name: "SPLISH SPLASH '26", tag: "CAR WASH", avenue: "FINANCE", id: "finance", gradient: "from-blue-600 to-stone-900" },
    { name: "KICK OFF '26", tag: "FUTSAL", avenue: "CLUB SERVICE", id: "club", gradient: "from-red-700 to-zinc-950" },
    { name: "REHTORIK '26", tag: "DEBATING", avenue: "FINANCE", id: "finance", gradient: "from-red-600 to-black" },
    { name: "SLIP N' KICK", tag: "SOAPY FUTSAL", avenue: "CLUB SERVICE", id: "club", gradient: "from-amber-600 to-stone-900" },
    { name: "SARANA", tag: "WELFARE", avenue: "COMMUNITY SERVICE", id: "community", gradient: "from-blue-200 to-zinc-950" }
  ];

  // Upgraded Uniform Glassmorphism tokens applied across entire app interfaces
  const glassStyle = "bg-black/40 backdrop-blur-xl border border-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.6)]";
  const renderHeader = () => {
    return React.createElement('header', { 
      // FIXED: Increased vertical container padding from py-4 to py-6 to naturally hold the larger logo shape safely
      className: 'sticky top-0 z-50 w-full bg-black/80 backdrop-blur-xl border-b border-zinc-900/80 px-4 sm:px-8 py-6 select-none' 
    },
      React.createElement('div', { 
        className: 'w-full flex items-center justify-between relative max-w-7xl mx-auto' 
      },
        
        // Brand Image Container (Pushed to z-50 to hover correctly above everything else)
        React.createElement('div', { 
          onClick: () => { setActiveTab('home'); setIsMobileMenuOpen(false); },
          // FIXED: Removed bounding box max-height limits so your size classes take full effect
          className: 'flex items-center cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none relative z-50' 
        },
          React.createElement('img', { 
            src: '/icac-logo.png', 
            onError: (e) => { e.target.style.display = 'none'; }, 
            // FIXED: Locked down full w-20 h-20 formatting properties cleanly
            className: 'w-20 h-20 object-contain drop-shadow-[0_0_16px_rgba(239,68,68,0.5)]',
            alt: 'ICAC Logo'
          })
        ),

        // Desktop Navigation Links Layer
        React.createElement('nav', { className: 'hidden sm:flex items-center space-x-8 relative z-50' },
          ['about', 'projects', 'legacy', 'roster'].map((tab) => {
            const isLegacyActive = activeTab === 'legacy' && tab === 'legacy';
            const isHomeTabActive = activeTab === 'home' && (tab === 'about');
            const isCurrentTab = activeTab === tab || isLegacyActive || isHomeTabActive;
            return React.createElement('button', {
              key: tab,
              onClick: () => setActiveTab(tab === 'about' || tab === 'avenues' || tab === 'history' ? 'home' : tab),
              className: `text-sm font-bold tracking-widest uppercase transition-all duration-300 relative py-1 hover:text-red-500 hover:translate-y-[-1px] ${isCurrentTab ? 'text-red-500 font-extrabold' : 'text-zinc-400'}`
            }, 
              tab === 'legacy' ? 'Legacy' : tab,
              React.createElement('span', { className: `absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-300 ${isCurrentTab ? 'w-full' : 'w-0 group-hover:w-full'}` })
            );
          })
        ),

        // Mobile Menu 3-Line Hamburger Trigger Button
        React.createElement('button', {
          onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
          className: 'sm:hidden text-zinc-400 hover:text-white transition-colors p-2 focus:outline-none relative z-50'
        },
          React.createElement('svg', { className: 'w-6 h-6 transition-transform duration-300', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: '2.5' },
            isMobileMenuOpen 
              ? React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M6 18L18 6M6 6l12 12' })
              : React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M4 6h16M4 12h16M4 18h16' })
          )
        )
      ),

      // Collapsible Mobile Menu Panel Dropdown (Using dark glass theme tokens)
      isMobileMenuOpen && React.createElement('nav', { 
        className: 'sm:hidden w-full mt-4 pt-4 border-t border-zinc-900/60 flex flex-col space-y-2 relative z-50 bg-black/95 p-4 rounded-xl backdrop-blur-xl shadow-2xl' 
      },
        ['about', 'projects', 'legacy', 'roster'].map((tab) => {
          const isLegacyActive = activeTab === 'legacy' && tab === 'legacy';
          const isHomeTabActive = activeTab === 'home' && (tab === 'about');
          const isCurrentTab = activeTab === tab || isLegacyActive || isHomeTabActive;
          return React.createElement('button', {
            key: tab,
            onClick: () => {
              setActiveTab(tab === 'about' || tab === 'avenues' || tab === 'history' ? 'home' : tab);
              setIsMobileMenuOpen(false);
            },
            className: `text-sm font-bold tracking-wider uppercase text-left py-3 px-4 rounded-lg transition-all ${isCurrentTab ? 'bg-red-950/40 text-red-500 font-extrabold' : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'}`
          }, tab === 'legacy' ? 'Legacy' : tab);
        })
      )
    );
  };

  const renderHome = () => {
    return React.createElement('div', { className: 'space-y-20 relative z-10' },
      React.createElement('section', { className: 'text-center max-w-4xl mx-auto pt-16 sm:pt-24 pb-12 px-4' },
        React.createElement('span', { className: 'px-4 py-1.5 bg-red-950/40 border border-red-900/50 rounded-full text-xs font-bold text-red-500 uppercase tracking-widest inline-block mb-6 shadow-sm' }, 'INTERACT DISTRICT 3220'),
        React.createElement('h1', { className: 'text-4xl sm:text-6xl font-black text-white tracking-tight leading-none mb-6 uppercase' }, 
          'An Unparalleled Legacy of ', 
          React.createElement('span', { className: 'block text-yellow-500 mt-2 tracking-wide font-extrabold text-3xl sm:text-5xl' }, 'Leadership & Service')
        ),
        React.createElement('p', { className: 'text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed font-medium' }, 
          '"Forging the flame forward." Meet the leadership driving our historic operations forward.'
        )
      ),

      // Affiliations Card Layout
      React.createElement('section', { className: `text-center max-w-4xl mx-auto py-14 px-8 rounded-2xl transition-all duration-300 hover:border-zinc-800/80 ${glassStyle}` },
        React.createElement('span', { className: 'text-xs font-black text-yellow-500 uppercase tracking-widest block mb-3 font-mono' }, 'REGISTRATION & DOCUMENTATION'),
        React.createElement('h2', { className: 'text-4xl font-black text-white tracking-tight mb-4 uppercase' }, 'Affiliations'),
        React.createElement('p', { className: 'text-base text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed font-medium' }, 
          'Use the following links to register to join the Interact Club of Ananda College. ',
          React.createElement('span', { className: 'block text-sm text-zinc-500 mt-2 font-semibold' }, '(Only applicable to students of Ananda College)')
        ),
        React.createElement('div', { className: 'max-w-md mx-auto space-y-4' },
          React.createElement('a', { href: 'https://google.com', target: '_blank', rel: 'noreferrer', className: 'block w-full py-3.5 text-center tracking-widest text-xs font-black text-white border border-zinc-800 rounded-full bg-gradient-to-r from-transparent hover:bg-red-950/10 hover:border-red-900/40 to-transparent transition-all duration-300 uppercase' }, 'Register Now'),
          React.createElement('a', { href: 'https://google.com', target: '_blank', rel: 'noreferrer', className: 'block w-full py-3.5 text-center tracking-widest text-xs font-black text-white border border-zinc-800 rounded-full bg-gradient-to-r from-transparent hover:bg-red-950/10 hover:border-red-900/40 to-transparent transition-all duration-300 uppercase' }, 'District Drive'),
          React.createElement('a', { href: 'https://google.com', target: '_blank', rel: 'noreferrer', className: 'block w-full py-3.5 text-center tracking-widest text-xs font-black text-white border border-zinc-800 rounded-full bg-gradient-to-r from-transparent hover:bg-red-950/10 hover:border-red-900/40 to-transparent transition-all duration-300 uppercase' }, 'Doc Formats')
        )
      )
    );
  };
  const renderLegacy = () => {
    const metrics = [
      { count: "14", label: "DIRS PRODUCED" },
      { count: "14", label: "CITATION AWARDS" },
      { count: "1970", label: "YEAR OF INCEPTION" },
      { count: "2x", label: "GOVERNOR SHIELDS" }
    ];

    return React.createElement('div', { className: 'space-y-24 py-6 relative z-10' },
      React.createElement('section', { className: 'space-y-12' },
        React.createElement('div', { className: 'text-center' },
          React.createElement('h2', { className: 'text-5xl font-black tracking-tight text-white mb-4 uppercase' }, 'Our Historic Legacy'),
          React.createElement('p', { className: 'text-base text-zinc-400 font-semibold max-w-xl mx-auto' }, 
            'Founded in 1970, ICAC holds an unmatched historical record in the Sri Lankan youth movement.'
          )
        ),
        React.createElement('div', { className: 'grid lg:grid-cols-2 gap-12 items-center pt-6' },
          React.createElement('div', { className: 'space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed font-medium' }, 
            React.createElement('p', null, 
              'The journey of the Interact Club of Ananda College is an unbroken tale of peak leadership. ICAC holds the highly distinguished national record of producing the highest single contribution of ',
              React.createElement('strong', { className: 'text-white font-bold' }, 'District Interact Representatives (DIRs)'),
              ' to District 3220.'
            ),
            React.createElement('p', null, 
              'From executing historic milestones to securing consecutive ',
              React.createElement('strong', { className: 'text-white font-bold' }, 'Citation Awards'),
              ' and prestigious ',
              React.createElement('strong', { className: 'text-white font-bold' }, "Governor's Shields"),
              ', the members of ICAC continue to build foundational service benchmarks that echo throughout the global community.'
            )
          ),
          React.createElement('div', { className: 'grid grid-cols-2 gap-4' },
            metrics.map((m, i) =>
              React.createElement('div', { key: i, className: `p-8 rounded-xl text-center transition-transform duration-300 hover:scale-105 ${glassStyle}` },
                React.createElement('h3', { className: 'text-3xl font-black text-yellow-500 mb-1' }, m.count),
                React.createElement('span', { className: 'text-[10px] font-bold text-zinc-400 uppercase tracking-widest block' }, m.label)
              )
            )
          )
        )
      ),

      React.createElement('section', { className: 'space-y-8' },
        React.createElement('h3', { className: 'text-3xl font-black text-white tracking-tight uppercase' }, 'The Hall of Fame: Past DIRs'), 
        React.createElement('div', { className: 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' },
          pastDirs.map((dir, idx) =>
            React.createElement('div', { key: idx, className: `p-6 rounded-xl space-y-2.5 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-800 ${glassStyle}` },
              React.createElement('span', { className: 'text-sm font-extrabold text-yellow-500 block font-mono tracking-widest' }, `(${dir.year})`), 
              React.createElement('h4', { className: 'text-base font-bold text-white leading-tight' }, dir.name) 
            )
          )
        )
      )
    );
  };

  const renderAvatar = (imgUrl) => {
    return React.createElement('div', { className: 'w-14 h-14 rounded-full bg-zinc-900/80 border border-zinc-800 flex-shrink-0 overflow-hidden flex items-center justify-center shadow-md' }, 
      React.createElement('img', {
        src: imgUrl,
        className: 'w-full h-full object-cover',
        alt: '',
        onError: (e) => {
          e.target.style.display = 'none';
          if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
        }
      }),
      React.createElement('svg', { className: 'w-6 h-6 text-zinc-700 hidden', fill: 'currentColor', viewBox: '0 0 24 24', style: { display: 'none' } },
        React.createElement('path', { d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z' })
      )
    );
  };

  const renderRoster = () => {
    return React.createElement('section', { className: 'space-y-16 py-4 relative z-10' },
      React.createElement('div', { className: 'text-center' },
        React.createElement('h2', { className: 'text-4xl font-black text-white tracking-tight uppercase' }, 'Executive Committee') 
      ),
      React.createElement('div', { className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6' },
        execCommittee.map((member, index) =>
          React.createElement('div', { key: index, className: `p-6 rounded-xl flex items-center space-x-5 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-800 ${glassStyle}` },
            renderAvatar(member.img),
            React.createElement('div', null,
              React.createElement('h4', { className: 'text-base font-bold text-white' }, member.name), 
              React.createElement('p', { className: 'text-xs text-yellow-500 font-black tracking-widest uppercase mt-1' }, member.role) 
            )
          )
        )
      ),
      React.createElement('div', { className: 'text-center pt-6' },
        React.createElement('h2', { className: 'text-4xl font-black text-white tracking-tight uppercase' }, 'Director Board') 
      ),
      React.createElement('div', { className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6' },
        directorBoard.map((dir, index) =>
          React.createElement('div', { key: index, className: `p-6 rounded-xl flex items-center space-x-5 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-800 ${glassStyle}` },
            renderAvatar(dir.img),
            React.createElement('div', null,
              React.createElement('h4', { className: 'text-base font-bold text-white' }, dir.name), 
              React.createElement('p', { className: 'text-xs text-zinc-400 font-bold tracking-wider uppercase mt-1' }, dir.role) 
            )
          )
        )
      )
    );
  };

  const renderProjects = () => {
    const categories = [
      { id: 'all', label: 'All' },
      { id: 'community', label: 'Community Service' },
      { id: 'club', label: 'Club Service' },
      { id: 'greenlife', label: 'Green Life' },
      { id: 'international', label: 'International Understanding' },
      { id: 'finance', label: 'Finance' },
      { id: 'pr', label: 'Public Relations (PR)' }
    ];

    const filtered = projectFilter === 'all' 
      ? flagshipProjects 
      : flagshipProjects.filter(p => p.id === projectFilter);

    return React.createElement('section', { className: 'space-y-12 py-4 relative z-10' },
      React.createElement('div', { className: 'flex flex-wrap justify-center gap-2 max-w-4xl mx-auto' },
        categories.map((cat) =>
          React.createElement('button', {
            key: cat.id,
            onClick: () => setProjectFilter(cat.id),
            className: `px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${projectFilter === cat.id ? 'bg-red-700 text-white shadow-lg shadow-red-900/20 scale-105' : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'}`
          }, cat.label)
        )
      ),

      React.createElement('div', { className: 'mt-12' },
        React.createElement('h2', { className: 'text-4xl font-black text-white mb-2 tracking-tight uppercase' }, 'Flagship Projects'), 
        React.createElement('p', { className: 'text-sm text-zinc-500 font-semibold' }, `Displaying ${filtered.length} active initiatives under this selection.`) 
      ),

      React.createElement('div', { className: 'grid md:grid-cols-3 gap-6' },
        filtered.map((proj, idx) =>
          React.createElement('div', { key: idx, className: `rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-300 ${glassStyle}` },
            React.createElement('div', { className: `h-44 bg-gradient-to-br ${proj.gradient} p-6 flex flex-col justify-between border-b border-white/[0.05]` },
              React.createElement('span', { className: 'bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-black tracking-widest text-white max-w-max uppercase' }, proj.tag),
              React.createElement('h3', { className: 'text-2xl font-black tracking-tight text-white' }, proj.name)
            ),
            React.createElement('div', { className: 'p-5 bg-black/40' },
              React.createElement('span', { className: 'text-[10px] font-bold text-yellow-500 tracking-wider uppercase' }, proj.avenue)
            )
          )
        )
      )
    );
  };

  const renderFooter = () => {
    return React.createElement('footer', { className: 'mt-24 border-t border-zinc-900/60 py-8 px-4 text-center space-y-4 relative z-10 bg-black/40 backdrop-blur-md' },
      React.createElement('div', { className: 'flex justify-center space-x-6' },
        React.createElement('a', { href: 'https://instagram.com', target: '_blank', rel: 'noreferrer', className: 'text-zinc-500 hover:text-red-500 transition-colors duration-300 text-xs font-bold uppercase tracking-wider' }, 'Instagram'),
        React.createElement('a', { href: 'https://facebook.com', target: '_blank', rel: 'noreferrer', className: 'text-zinc-500 hover:text-red-500 transition-colors duration-300 text-xs font-bold uppercase tracking-wider' }, 'Facebook'),
        React.createElement('a', { href: 'https://linkedin.com', target: '_blank', rel: 'noreferrer', className: 'text-zinc-500 hover:text-red-500 transition-colors duration-300 text-xs font-bold uppercase tracking-wider' }, 'LinkedIn')
      ),
      React.createElement('p', { className: 'text-[10px] font-mono text-zinc-600 uppercase tracking-widest' }, '© ' + new Date().getFullYear() + ' ICAC. All Rights Reserved.')
    );
  };

  return React.createElement('div', { className: 'min-h-screen bg-black text-zinc-100 antialiased font-sans selection:bg-red-500/30 selection:text-white relative overflow-x-hidden' },
    
    // FIXED: Removed 'hidden md:block' to keep the knight on mobile.
    // Added 'top-20 md:top-0' to push it below the navbar on mobile, and adjusted opacity layers.
    React.createElement('div', { 
      className: 'fixed top-20 md:top-0 inset-x-0 bottom-0 md:inset-0 w-full pointer-events-none mix-blend-lighten z-0 bg-no-repeat bg-center md:bg-right-top opacity-[0.05] md:opacity-[0.12]',
      style: { 
        backgroundImage: "url('/knight-bg.png')",
        backgroundSize: 'contain',
        animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }),

    renderHeader(),
    React.createElement('main', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10' },
      activeTab === 'home' && renderHome(),
      activeTab === 'projects' && renderProjects(),
      activeTab === 'legacy' && renderLegacy(),
      activeTab === 'roster' && renderRoster()
    ),
    renderFooter()
  );
}
