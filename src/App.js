import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [projectFilter, setProjectFilter] = useState('all');

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
    { name: "RACE FOR CHANGE", tag: "FUNDRAISER", avenue: "FINANCE", id: "finance", gradient: "from-red-600 to-black" },
    { name: "SPLISH SPLASH", tag: "INFRASTRUCTURE", avenue: "COMMUNITY SERVICE", id: "community", gradient: "from-amber-600 to-stone-900" },
    { name: "HOPE", tag: "WELFARE", avenue: "COMMUNITY SERVICE", id: "community", gradient: "from-red-700 to-zinc-950" }
  ];

  // Common glass design tokens applied to all container interfaces
  const glassStyle = "bg-white/[0.03] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]";
  const renderHeader = () => {
    return React.createElement('header', { className: 'sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900 px-8 py-5 flex flex-wrap justify-between items-center' },
      React.createElement('div', { className: 'flex items-center space-x-3' },
        React.createElement('img', { 
          src: '/icac-logo.png', 
          onError: (e) => { e.target.style.display = 'none'; }, 
          className: 'w-8 h-8 object-contain',
          alt: ''
        }),
        React.createElement('span', { className: 'text-lg font-bold tracking-tight text-white' }, 'Interact Club of Ananda College')
      ),
      React.createElement('nav', { className: 'flex items-center space-x-6 mt-4 sm:mt-0' },
        ['about', 'projects', 'legacy', 'roster'].map((tab) => {
          const isLegacyActive = activeTab === 'legacy' && tab === 'legacy';
          const isHomeTabActive = activeTab === 'home' && (tab === 'about');
          const isCurrentTab = activeTab === tab || isLegacyActive || isHomeTabActive;
          return React.createElement('button', {
            key: tab,
            onClick: () => setActiveTab(tab === 'about' || tab === 'avenues' || tab === 'history' ? 'home' : tab),
            className: `text-sm transition-colors capitalize ${isCurrentTab ? 'text-red-500 font-bold' : 'text-zinc-400 hover:text-white'}`
          }, tab === 'legacy' ? 'Legacy' : tab);
        })
      )
    );
  };

  const renderHome = () => {
    return React.createElement('div', { className: 'space-y-20' },
      React.createElement('section', { className: 'text-center max-w-4xl mx-auto pt-20 pb-12 px-4' },
        React.createElement('span', { className: 'px-4 py-1.5 bg-red-950/40 border border-red-900/60 rounded-full text-[10px] font-bold text-red-500 uppercase tracking-widest inline-block mb-6' }, 'INTERACT DISTRICT 3220'),
        React.createElement('h1', { className: 'text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mb-6' }, 
          'An Unparalleled Legacy of ', 
          React.createElement('span', { className: 'block text-yellow-500 mt-2' }, 'Leadership & Service')
        ),
        React.createElement('p', { className: 'text-base text-zinc-400 max-w-xl mx-auto leading-relaxed' }, 
          '"Forging the flame forward." Meet the leadership driving our historic operations forward.'
        )
      ),

      // Affiliations Panel
      React.createElement('section', { className: `text-center max-w-4xl mx-auto py-12 px-6 rounded-2xl ${glassStyle}` },
        React.createElement('span', { className: 'text-xs font-bold text-yellow-500 uppercase tracking-widest block mb-3' }, 'REGISTRATION & DOCUMENTATION'),
        React.createElement('h2', { className: 'text-4xl font-black text-white tracking-tight mb-4' }, 'Affiliations'),
        React.createElement('p', { className: 'text-sm text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed' }, 
          'Use the following links to register to join the Interact Club of Ananda College. ',
          React.createElement('span', { className: 'block text-xs text-zinc-500 mt-1' }, '(Only applicable to students of Ananda College)')
        ),
        React.createElement('div', { className: 'max-w-md mx-auto space-y-4' },
          React.createElement('a', { href: '#', className: 'block w-full py-3.5 text-center tracking-widest text-xs font-bold text-white border border-zinc-800 rounded-full bg-gradient-to-r from-transparent hover:bg-white/[0.02] to-transparent transition-all uppercase' }, 'Register Now'),
          React.createElement('a', { href: 'https://google.com', target: '_blank', rel: 'noreferrer', className: 'block w-full py-3.5 text-center tracking-widest text-xs font-bold text-white border border-zinc-800 rounded-full bg-gradient-to-r from-transparent hover:bg-white/[0.02] to-transparent transition-all uppercase' }, 'District Drive'),
          React.createElement('a', { href: '#', className: 'block w-full py-3.5 text-center tracking-widest text-xs font-bold text-white border border-zinc-800 rounded-full bg-gradient-to-r from-transparent hover:bg-white/[0.02] to-transparent transition-all uppercase' }, 'Doc Formats')
        )
      )
    );
  };
  // Rebuilt Legacy Tab Section matches Image 1 and Image 2 layouts perfectly
  const renderLegacy = () => {
    const metrics = [
      { count: "14", label: "DIRS PRODUCED" },
      { count: "14", label: "CITATION AWARDS" },
      { count: "1970", label: "YEAR OF INCEPTION" },
      { count: "2x", label: "GOVERNOR SHIELDS" }
    ];

    return React.createElement('div', { className: 'space-y-24 py-6' },
      // Segment 1: Our Historic Legacy Summary Blocks (Image 1 Structure)
      React.createElement('section', { className: 'space-y-12' },
        React.createElement('div', { className: 'text-center' },
          React.createElement('h2', { className: 'text-5xl font-black tracking-tight text-white mb-4' }, 'Our Historic Legacy'),
          React.createElement('p', { className: 'text-sm text-zinc-400 font-medium max-w-xl mx-auto' }, 
            'Founded in 1970, ICAC holds an unmatched historical record in the Sri Lankan youth movement.'
          )
        ),
        React.createElement('div', { className: 'grid lg:grid-cols-2 gap-12 items-center pt-6' },
          React.createElement('div', { className: 'space-y-6 text-zinc-300 text-sm leading-relaxed' },
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
              React.createElement('div', { key: i, className: `p-8 rounded-xl text-center ${glassStyle}` },
                React.createElement('h3', { className: 'text-3xl font-black text-yellow-500 mb-1' }, m.count),
                React.createElement('span', { className: 'text-[10px] font-bold text-zinc-400 uppercase tracking-widest block' }, m.label)
              )
            )
          )
        )
      ),

      // Segment 2: Hall of Fame Configuration (Image 2 Card Layout)
      React.createElement('section', { className: 'space-y-8' },
        React.createElement('h3', { className: 'text-2xl font-black text-white tracking-tight' }, 'The Hall of Fame: Past DIRs'),
        React.createElement('div', { className: 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' },
          pastDirs.map((dir, idx) =>
            React.createElement('div', { key: idx, className: `p-6 rounded-xl space-y-3 hover:border-zinc-700 transition-all ${glassStyle}` },
              React.createElement('span', { className: 'text-[10px] font-bold text-yellow-500 block font-mono tracking-wider' }, `(${dir.year})`),
              React.createElement('h4', { className: 'text-sm font-bold text-white leading-tight' }, dir.name)
            )
          )
        )
      )
    );
  };

  const renderRoster = () => {
    const renderAvatar = (imgUrl) => {
      return React.createElement('div', { className: 'w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex-shrink-0 overflow-hidden flex items-center justify-center' },
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

    return React.createElement('section', { className: 'space-y-16 py-4' },
      React.createElement('div', { className: 'text-center' },
        React.createElement('h2', { className: 'text-3xl font-black text-white tracking-tight' }, 'Executive Committee')
      ),
      React.createElement('div', { className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6' },
        execCommittee.map((member, index) =>
          React.createElement('div', { key: index, className: `p-5 rounded-xl flex items-center space-x-4 ${glassStyle}` },
            renderAvatar(member.img),
            React.createElement('div', null,
              React.createElement('h4', { className: 'text-sm font-bold text-white' }, member.name),
              React.createElement('p', { className: 'text-[10px] text-yellow-500 font-bold tracking-wider uppercase mt-1' }, member.role)
            )
          )
        )
      ),

      React.createElement('div', { className: 'text-center pt-6' },
        React.createElement('h2', { className: 'text-3xl font-black text-white tracking-tight' }, 'Director Board')
      ),
      React.createElement('div', { className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6' },
        directorBoard.map((dir, index) =>
          React.createElement('div', { key: index, className: `p-5 rounded-xl flex items-center space-x-4 ${glassStyle}` },
            renderAvatar(dir.img),
            React.createElement('div', null,
              React.createElement('h4', { className: 'text-sm font-bold text-white' }, dir.name),
              React.createElement('p', { className: 'text-[10px] text-yellow-500 font-bold tracking-wider uppercase mt-1' }, dir.role)
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

    return React.createElement('section', { className: 'space-y-12 py-4' },
      React.createElement('div', { className: 'flex flex-wrap justify-center gap-2 max-w-3xl mx-auto' },
        categories.map((cat) =>
          React.createElement('button', {
            key: cat.id,
            onClick: () => setProjectFilter(cat.id),
            className: `px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${projectFilter === cat.id ? 'bg-red-700 text-white shadow-lg shadow-red-900/30' : 'bg-zinc-900 text-zinc-400 hover:text-white'}`
          }, cat.label)
        )
      ),

      React.createElement('div', { className: 'mt-12' },
        React.createElement('h2', { className: 'text-4xl font-black text-white mb-2 tracking-tight' }, 'Showing All Flagship Projects'),
        React.createElement('p', { className: 'text-xs text-zinc-500 font-medium' }, `Displaying ${filtered.length} active initiatives under this selection.`)
      ),

      React.createElement('div', { className: 'grid md:grid-cols-3 gap-6' },
        filtered.map((proj, idx) =>
          React.createElement('div', { key: idx, className: `rounded-2xl overflow-hidden group hover:scale-[1.01] transition-transform ${glassStyle}` },
            React.createElement('div', { className: `h-44 bg-gradient-to-br ${proj.gradient} p-6 flex flex-col justify-between border-b border-white/[0.05]` },
              React.createElement('span', { className: 'bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold tracking-widest text-white max-w-max uppercase' }, proj.tag),
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

  // Main system engine injection mapping the absolute locked parallax styling configuration
  return React.createElement('div', { 
    className: 'min-h-screen text-zinc-100 font-sans antialiased relative selection:bg-red-800 selection:text-white',
    style: {
      backgroundColor: '#000000',
      backgroundImage: 'radial-gradient(circle at 50% 50%, #2a080c 0%, #000000 80%)',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  },
    renderHeader(),
    React.createElement('main', { className: 'max-w-7xl mx-auto px-8 py-12 relative z-10' },
      activeTab === 'home' && renderHome(),
      activeTab === 'roster' && renderRoster(),
      activeTab === 'legacy' && renderLegacy(),
      activeTab === 'projects' && renderProjects()
    ),
    React.createElement('footer', { className: 'border-t border-zinc-900 mt-24 py-8 text-center text-xs text-zinc-600 relative z-10' },
      '© ' + new Date().getFullYear() + ' Interact Club of Ananda College. All Rights Reserved.'
    )
  );
}
