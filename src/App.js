import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Executive Committee Data Array
  const execCommittee = [
    { role: "President", name: "Int. Kemith Rajapakse" },
    { role: "Secretary", name: "Int. Gagul Jayawardena" },
    { role: "Treasurer", name: "Int. Nathan Malwana" },
    { role: "Vice Presidents", name: "Int. Nethuka Dahanayaka & Int. Yasith Wickramasinghe" },
    { role: "Sergeants at Arms", name: "Int. Nethula Edirimanne & Int. Hiruja Wanniarachchi" },
    { role: "Editor", name: "Int. Kaviru Thineth" },
    { role: "Head of Directors", name: "Int. Ronal Jayarathna" },
    { role: "Assistant Secretary", name: "Int. Sesath Cabbral" },
    { role: "Assistant Treasurer", name: "Int. Nilush Liyanage" }
  ];

  // Board of Directors Data Array
  const directorBoard = [
    { avenue: "Finance", officers: "Int. Gayanuka Fernando" },
    { avenue: "International Understanding", officers: "Int. Damsas Jayasinghe & Int. Onitha Thilakarathne" },
    { avenue: "Community Service", officers: "Int. Thinura Jayasinghe & Int. Chithila Wanniarachchi" },
    { avenue: "Greenlife", officers: "Int. Javinu Sewhas & Int. Sanuth Dulwan" },
    { avenue: "Club Service", officers: "Int. Susith Gallage & Int. Binul De Silva" },
    { avenue: "Public Relations", officers: "Int. Binara Supun & Int. Ahas Karunaratne" }
  ];

  // Past DIRs Data Array from Image
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

  // Flagship Projects Data Array
  const flagshipProjects = [
    { name: "Sankalpana", desc: "The premier cultural and musical extravaganza showcasing student talents while raising funds for community service initiatives." },
    { name: "Cast in Maroon", desc: "A massive intra-school and inter-school community infrastructure project aiming to uplift rural educational standards." },
    { name: "Green Pulse", desc: "The mega environmental sustainability campaign focusing on reforestation and waste management solutions across the city." }
  ];
  // Render function for the App Header Navigation
  const renderHeader = () => {
    return React.createElement('header', { className: 'sticky top-0 z-50 bg-neutral-900/90 backdrop-blur border-b border-neutral-800 px-6 py-4 flex flex-wrap justify-between items-center' },
      React.createElement('div', { className: 'flex items-center space-x-3' },
        React.createElement('div', { className: 'w-10 h-10 bg-red-800 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg' }, 'A'),
        React.createElement('div', null,
          React.createElement('h1', { className: 'text-lg font-bold tracking-wide text-white' }, 'INTERACT CLUB'),
          React.createElement('p', { className: 'text-xs text-red-500 font-medium' }, 'ANANDA COLLEGE')
        )
      ),
      React.createElement('nav', { className: 'flex space-x-1 mt-4 sm:mt-0' },
        ['home', 'board', 'legacy', 'projects'].map((tab) =>
          React.createElement('button', {
            key: tab,
            onClick: () => setActiveTab(tab),
            className: `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 capitalize ${activeTab === tab ? 'bg-red-800 text-white shadow-md' : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'}`
          }, tab)
        )
      )
    );
  };

  // Render function for Home and History Section
  const renderHome = () => {
    return React.createElement('section', { className: 'space-y-12 animate-fadeIn' },
      React.createElement('div', { className: 'text-center py-12 bg-gradient-to-b from-red-950/20 to-transparent rounded-3xl border border-neutral-900' },
        React.createElement('h2', { className: 'text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4' }, 'Viveka Babhati Wisdom Shines'),
        React.createElement('p', { className: 'text-lg text-neutral-400 max-w-2xl mx-auto px-4' }, 'Chartered in the year 1981, the Interact Club of Ananda College stands as a beacon of leadership, community development, and international understanding within Interact District 3220.'),
        React.createElement('div', { className: 'mt-8 flex flex-wrap justify-center gap-4 px-4' },
          React.createElement('a', { href: 'https://google.com', target: '_blank', rel: 'noreferrer', className: 'px-6 py-3 bg-red-800 hover:bg-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-red-900/30 transition-all duration-200 text-sm' }, 'Go to District Drive'),
          React.createElement('a', { href: '#', className: 'px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold rounded-xl border border-neutral-700 transition-all duration-200 text-sm' }, 'Official Doc Formats')
        )
      ),
      React.createElement('div', { className: 'grid md:grid-cols-2 gap-8 items-stretch' },
        React.createElement('div', { className: 'bg-neutral-900 p-8 rounded-2xl border border-neutral-800' },
          React.createElement('h3', { className: 'text-2xl font-bold text-white mb-4' }, 'Our History'),
          React.createElement('p', { className: 'text-neutral-400 leading-relaxed text-sm' }, 'For over four decades, the Interact Club of Ananda College has consistently cultivated outstanding personalities, steering the club towards sustainable heights. Since 1981, ICAC has focused heavily on shifting paradigms through regional community engagement and continuous soft-skill development modules for youth leaders.')
        ),
        React.createElement('div', { className: 'bg-neutral-900 p-8 rounded-2xl border border-neutral-800' },
          React.createElement('h3', { className: 'text-2xl font-bold text-white mb-4' }, 'District Footprint'),
          React.createElement('p', { className: 'text-neutral-400 leading-relaxed text-sm' }, 'Operating proudly under Interact District 3220 (Sri Lanka & Maldives), the club holds an unmatched benchmark record of fostering a high density of District Interact Representatives (DIRs) and executive board members who structure systemic changes across the district grid annually.')
        )
      )
    );
  };
  // Render function for Current Board Section
  const renderBoard = () => {
    return React.createElement('section', { className: 'space-y-12 animate-fadeIn' },
      React.createElement('div', { className: 'text-center' },
        React.createElement('h2', { className: 'text-3xl font-extrabold text-white' }, 'Board of Officials'),
        React.createElement('p', { className: 'text-neutral-400 mt-2 text-sm' }, 'Sovereign leadership driving the execution of workflows for the current term')
      ),
      React.createElement('div', null,
        React.createElement('h3', { className: 'text-xl font-bold text-red-500 mb-6 border-b border-neutral-800 pb-2 uppercase tracking-wider' }, 'Executive Committee'),
        React.createElement('div', { className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4' },
          execCommittee.map((member, index) =>
            React.createElement('div', { key: index, className: 'bg-neutral-900 p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all' },
              React.createElement('span', { className: 'text-xs font-semibold text-neutral-500 uppercase tracking-widest block mb-1' }, member.role),
              React.createElement('span', { className: 'text-base font-bold text-white' }, member.name)
            )
          )
        )
      ),
      React.createElement('div', { className: 'pt-6' },
        React.createElement('h3', { className: 'text-xl font-bold text-red-500 mb-6 border-b border-neutral-800 pb-2 uppercase tracking-wider' }, 'Director Board'),
        React.createElement('div', { className: 'grid sm:grid-cols-2 gap-4' },
          directorBoard.map((dir, index) =>
            React.createElement('div', { key: index, className: 'bg-neutral-900 p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all' },
              React.createElement('span', { className: 'text-xs font-semibold text-neutral-500 uppercase tracking-widest block mb-1' }, `Avenue of ${dir.avenue}`),
              React.createElement('span', { className: 'text-base font-bold text-white' }, dir.officers)
            )
          )
        )
      )
    );
  };

  // Render function for Legacy (Past DIRs) Table Section
  const renderLegacy = () => {
    return React.createElement('section', { className: 'space-y-8 animate-fadeIn' },
      React.createElement('div', { className: 'text-center max-w-3xl mx-auto' },
        React.createElement('h2', { className: 'text-3xl font-extrabold text-white mb-4' }, 'Legacy of ICAC'),
        React.createElement('p', { className: 'text-neutral-400 text-sm leading-relaxed' }, 'Since the chartering year of 1981, the Interact Club of Ananda College has produced 14 District Interact Representatives, 10 District Interact Secretaries and many more notable dignitaries within the Interact District 3220 of Sri Lanka and Maldives, recording the highest number of DIRs ever produced by a singular club in this district.')
      ),
      React.createElement('div', { className: 'bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden shadow-xl max-w-2xl mx-auto' },
        React.createElement('div', { className: 'overflow-x-auto' },
          React.createElement('table', { className: 'w-full text-left border-collapse' },
            React.createElement('thead', null,
              React.createElement('tr', { className: 'bg-neutral-800/50 text-neutral-400 text-xs uppercase tracking-wider font-semibold border-b border-neutral-800' },
                React.createElement('th', { className: 'px-6 py-4' }, 'Past DIRs Produced by ICAC'),
                React.createElement('th', { className: 'px-6 py-4 text-right' }, 'Year')
              )
            ),
            React.createElement('tbody', { className: 'divide-y divide-neutral-800/60 text-sm' },
              pastDirs.map((dir, idx) =>
                React.createElement('tr', { key: idx, className: 'hover:bg-neutral-800/30 transition-colors' },
                  React.createElement('td', { className: 'px-6 py-4 font-medium text-neutral-200' }, dir.name),
                  React.createElement('td', { className: 'px-6 py-4 text-right text-red-400 font-mono font-medium' }, `(${dir.year})`)
                )
              )
            )
          )
        )
      )
    );
  };
  // Render function for Flagship Projects Section
  const renderProjects = () => {
    return React.createElement('section', { className: 'space-y-8 animate-fadeIn' },
      React.createElement('div', { className: 'text-center' },
        React.createElement('h2', { className: 'text-3xl font-extrabold text-white' }, 'Flagship Projects'),
        React.createElement('p', { className: 'text-neutral-400 mt-2 text-sm' }, 'Pioneering movements defining standard excellence in community and school service')
      ),
      React.createElement('div', { className: 'grid md:grid-cols-3 gap-6' },
        flagshipProjects.map((proj, idx) =>
          React.createElement('div', { key: idx, className: 'bg-neutral-900 rounded-2xl border border-neutral-800 p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200' },
            React.createElement('div', null,
              React.createElement('div', { className: 'w-12 h-12 bg-red-950/50 border border-red-800 rounded-xl flex items-center justify-center text-red-500 font-bold text-lg mb-4' }, `0${idx + 1}`),
              React.createElement('h3', { className: 'text-xl font-bold text-white mb-2' }, proj.name),
              React.createElement('p', { className: 'text-neutral-400 text-sm leading-relaxed' }, proj.desc)
            ),
            React.createElement('button', { className: 'mt-6 w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold rounded-lg transition-colors' }, 'Learn More')
          )
        )
      )
    );
  };

  // Main Return Statement assembling the components
  return React.createElement('div', { className: 'min-h-screen bg-neutral-950 text-neutral-100 font-sans' },
    renderHeader(),
    React.createElement('main', { className: 'max-w-6xl mx-auto px-6 py-12' },
      activeTab === 'home' && renderHome(),
      activeTab === 'board' && renderBoard(),
      activeTab === 'legacy' && renderLegacy(),
      activeTab === 'projects' && renderProjects()
    ),
    React.createElement('footer', { className: 'border-t border-neutral-900 mt-24 py-8 px-6 text-center text-xs text-neutral-600' },
      `© ${new Date().getFullYear()} Interact Club of Ananda College. All Rights Reserved.`
    )
  );
}
