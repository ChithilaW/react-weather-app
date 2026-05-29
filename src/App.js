import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [projectFilter, setProjectFilter] = useState('all');

  // Exact Board data with structural matching for profile grids
  const execCommittee = [
    { role: "President", name: "Int. Kemith Rajapakse" },
    { role: "Secretary", name: "Int. Gagul Jayawardena" },
    { role: "Treasurer", name: "Int. Nathan Malwana" },
    { role: "Vice President", name: "Int. Nethuka Dahanayaka" },
    { role: "Vice President", name: "Int. Yasith Wickramasinghe" },
    { role: "Sergeant at Arms", name: "Int. Nethula Edirimanne" },
    { role: "Sergeant at Arms", name: "Int. Hiruja Wanniarachchi" },
    { role: "Editor", name: "Int. Kaviru Thineth" },
    { role: "Head of Directors", name: "Int. Ronal Jayarathna" },
    { role: "Assistant Secretary", name: "Int. Sesath Cabbral" },
    { role: "Assistant Treasurer", name: "Int. Nilush Liyanage" }
  ];

  const directorBoard = [
    { name: "Int. Gayanuka Fernando", role: "DIRECTOR OF FINANCE", avenue: "finance" },
    { name: "Int. Thinura Jayasinghe", role: "CO-DIRECTOR OF COMMUNITY SERVICE", avenue: "community" },
    { name: "Int. Chithila Wanniarachchi", role: "CO-DIRECTOR OF COMMUNITY SERVICE", avenue: "community" },
    { name: "Int. Susith Gallage", role: "CO-DIRECTOR OF CLUB SERVICE", avenue: "club" },
    { name: "Int. Binul De Silva", role: "CO-DIRECTOR OF CLUB SERVICE", avenue: "club" },
    { name: "Int. Javinu Sewhas", role: "CO-DIRECTOR OF GREENLIFE", avenue: "greenlife" },
    { name: "Int. Sanuth Dulwan", role: "CO-DIRECTOR OF GREENLIFE", avenue: "greenlife" },
    { name: "Int. Damsas Jayasinghe", role: "CO-DIRECTOR OF INTERNATIONAL UNDERSTANDING", avenue: "international" },
    { name: "Int. Onitha Thilakarathne", role: "CO-DIRECTOR OF INTERNATIONAL UNDERSTANDING", avenue: "international" },
    { name: "Int. Binara Supun", role: "CO-DIRECTOR OF PUBLIC RELATIONS", avenue: "pr" },
    { name: "Int. Ahas Karunaratne", role: "CO-DIRECTOR OF PUBLIC RELATIONS", avenue: "pr" }
  ];

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

  // Projects loaded from your third image update screen
  const flagshipProjects = [
    { name: "RACE FOR CHANGE", tag: "FUNDRAISER", avenue: "FINANCE", id: "finance", gradient: "from-orange-500 to-amber-900" },
    { name: "SPLISH SPLASH", tag: "INFRASTRUCTURE", avenue: "COMMUNITY SERVICE", id: "community", gradient: "from-red-600 to-neutral-900" },
    { name: "HOPE", tag: "WELFARE", avenue: "COMMUNITY SERVICE", id: "community", gradient: "from-orange-600 to-red-950" }
  ];
  const renderHeader = () => {
    return React.createElement('header', { className: 'sticky top-0 z-50 bg-[#0a0f1d]/90 backdrop-blur border-b border-gray-900 px-8 py-5 flex flex-wrap justify-between items-center' },
      React.createElement('div', { className: 'flex items-center' },
        React.createElement('span', { className: 'text-lg font-bold tracking-tight text-white' }, 'Interact Club of Ananda College')
      ),
      React.createElement('nav', { className: 'flex items-center space-x-6 mt-4 sm:mt-0' },
        ['about', 'history', 'avenues', 'projects', 'roster'].map((tab) =>
          React.createElement('button', {
            key: tab,
            onClick: () => setActiveTab(tab === 'about' || tab === 'avenues' ? 'home' : tab),
            className: 'text-sm text-gray-300 hover:text-white transition-colors capitalize'
          }, tab)
        ),
        React.createElement('a', { href: '#', className: 'px-4 py-2 bg-red-700 hover:bg-red-800 text-white text-xs font-semibold rounded-full tracking-wide transition-all' }, 'Register for R4C')
      )
    );
  };

  const renderHome = () => {
    return React.createElement('div', { className: 'space-y-24' },
      // Affiliations Section from your first image layout
      React.createElement('section', { className: 'text-center max-w-4xl mx-auto py-16 px-4' },
        React.createElement('span', { className: 'text-xs font-bold text-yellow-500 uppercase tracking-widest block mb-3' }, 'REGISTRATION & DOCUMENTATION'),
        React.createElement('h2', { className: 'text-5xl font-black text-white tracking-tight mb-6' }, 'Affiliations'),
        React.createElement('p', { className: 'text-sm text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed' }, 
          'Use the following links to register to join the Interact Club of Ananda College. ',
          React.createElement('span', { className: 'block text-xs text-gray-500 mt-1' }, '(Only applicable to students of Ananda College)')
        ),
        React.createElement('div', { className: 'max-w-md mx-auto space-y-4' },
          React.createElement('a', { href: '#', className: 'block w-full py-4 text-center tracking-widest text-xs font-bold text-white border border-gray-800 rounded-full bg-gradient-to-r from-transparent hover:from-neutral-900 to-transparent transition-all uppercase' }, 'Register Now'),
          React.createElement('a', { href: 'https://google.com', target: '_blank', rel: 'noreferrer', className: 'block w-full py-4 text-center tracking-widest text-xs font-bold text-white border border-gray-800 rounded-full bg-gradient-to-r from-transparent hover:from-neutral-900 to-transparent transition-all uppercase' }, 'District Drive'),
          React.createElement('a', { href: '#', className: 'block w-full py-4 text-center tracking-widest text-xs font-bold text-white border border-gray-800 rounded-full bg-gradient-to-r from-transparent hover:from-neutral-900 to-transparent transition-all uppercase' }, 'Doc Formats')
        )
      )
    );
  };
  const renderRoster = () => {
    return React.createElement('section', { className: 'space-y-16 animate-fadeIn py-8' },
      React.createElement('div', { className: 'text-center' },
        React.createElement('h2', { className: 'text-3xl font-extrabold text-white' }, 'Executive Committee')
      ),
      React.createElement('div', { className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6' },
        execCommittee.map((member, index) =>
          React.createElement('div', { key: index, className: 'bg-[#0f1626] border border-gray-900 p-6 rounded-xl flex items-center space-x-4' },
            React.createElement('div', { className: 'w-12 h-12 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center' },
              React.createElement('svg', { className: 'w-6 h-6 text-gray-500', fill: 'currentColor', viewBox: '0 0 24 24' },
                React.createElement('path', { d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z' })
              )
            ),
            React.createElement('div', null,
              React.createElement('h4', { className: 'text-sm font-bold text-white' }, member.name),
              React.createElement('p', { className: 'text-xs text-gray-500 font-medium tracking-wide uppercase mt-0.5' }, member.role)
            )
          )
        )
      ),
      // Director board view matching your second image
      React.createElement('div', { className: 'text-center pt-10' },
        React.createElement('h2', { className: 'text-3xl font-extrabold text-white' }, 'Director Board')
      ),
      React.createElement('div', { className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6' },
        directorBoard.map((dir, index) =>
          React.createElement('div', { key: index, className: 'bg-[#0f1626] border border-gray-900/60 p-6 rounded-xl flex items-center space-x-4' },
            React.createElement('div', { className: 'w-12 h-12 rounded-full bg-gray-800/80 flex-shrink-0 flex items-center justify-center' },
              React.createElement('svg', { className: 'w-6 h-6 text-gray-500', fill: 'currentColor', viewBox: '0 0 24 24' },
                React.createElement('path', { d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z' })
              )
            ),
            React.createElement('div', null,
              React.createElement('h4', { className: 'text-sm font-bold text-white' }, dir.name),
              React.createElement('p', { className: 'text-[10px] text-yellow-600 font-bold tracking-wider uppercase mt-1' }, dir.role)
            )
          )
        )
      )
    );
  };

  const renderLegacy = () => {
    return React.createElement('section', { className: 'max-w-2xl mx-auto py-8 animate-fadeIn' },
      React.createElement('h3', { className: 'text-2xl font-bold text-white text-center mb-8' }, 'Legacy of ICAC'),
      React.createElement('div', { className: 'bg-[#0f1626] border border-gray-900 rounded-xl overflow-hidden' },
        React.createElement('table', { className: 'w-full text-left' },
          React.createElement('tbody', { className: 'divide-y divide-gray-900 text-sm' },
            pastDirs.map((dir, idx) =>
              React.createElement('tr', { key: idx, className: 'hover:bg-neutral-900/40' },
                React.createElement('td', { className: 'px-6 py-4 text-gray-200 font-medium' }, dir.name),
                React.createElement('td', { className: 'px-6 py-4 text-right text-red-500 font-mono' }, dir.year)
              )
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

    return React.createElement('section', { className: 'space-y-12 py-6 animate-fadeIn' },
      // Horizontal filtering element array layout matching image three
      React.createElement('div', { className: 'flex flex-wrap justify-center gap-2 max-w-3xl mx-auto' },
        categories.map((cat) =>
          React.createElement('button', {
            key: cat.id,
            onClick: () => setProjectFilter(cat.id),
            className: `px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${projectFilter === cat.id ? 'bg-red-700 text-white' : 'bg-gray-900 text-gray-400 hover:text-white'}`
          }, cat.label)
        )
      ),

      React.createElement('div', { className: 'mt-12' },
        React.createElement('h2', { className: 'text-4xl font-black text-white mb-2' }, 'Showing All Flagship Projects'),
        React.createElement('p', { className: 'text-xs text-gray-500 font-medium' }, `Displaying ${filtered.length} active initiatives under this selection.`)
      ),

      // Project UI Cards Layout
      React.createElement('div', { className: 'grid md:grid-cols-3 gap-6' },
        filtered.map((proj, idx) =>
          React.createElement('div', { key: idx, className: 'bg-[#0f1626] rounded-2xl border border-gray-900 overflow-hidden group hover:scale-[1.01] transition-transform' },
            React.createElement('div', { className: `h-44 bg-gradient-to-br ${proj.gradient} p-6 flex flex-col justify-between` },
              React.createElement('span', { className: 'bg-black/40 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold tracking-widest text-white max-w-max uppercase' }, proj.tag),
              React.createElement('h3', { className: 'text-2xl font-black tracking-tight text-white' }, proj.name)
            ),
            React.createElement('div', { className: 'p-5 bg-black/20' },
              React.createElement('span', { className: 'text-[10px] font-bold text-yellow-600 tracking-wider uppercase' }, proj.avenue)
            )
          )
        )
      )
    );
  };

  // Assembling all layout pieces using deep background themes
  return React.createElement('div', { className: 'min-h-screen bg-[#070b14] text-gray-100 font-sans antialiased' },
    renderHeader(),
    React.createElement('main', { className: 'max-w-7xl mx-auto px-8 py-12' },
      activeTab === 'home' && renderHome(),
      activeTab === 'roster' && renderRoster(),
      activeTab === 'legacy' && renderLegacy(),
      activeTab === 'projects' && renderProjects()
    ),
    React.createElement('footer', { className: 'border-t border-gray-900/50 mt-24 py-8 text-center text-xs text-gray-600' },
      '© ' + new Date().getFullYear() + ' Interact Club of Ananda College. All Rights Reserved.'
    )
  );
}
