import React, { useState } from 'react';

const LinkGroups = () => {
  const [activeGroup, setActiveGroup] = useState('Social');
  
  const groups = [
    { id: 'social', name: 'Social' },
    { id: 'shopping', name: 'Shopping' },
    { id: 'news', name: 'News' }
  ];
  
  const tiles = [
    { id: 1, group: 'social', title: 'Facebook', icon: '🌐', url: 'https://facebook.com' },
    { id: 2, group: 'social', title: 'Twitter', icon: '🌐', url: 'https://twitter.com' },
    { id: 3, group: 'shopping', title: 'Amazon', icon: '🛒', url: 'https://amazon.de' }
  ];

  return (
    <div className="w-2/3">
      <div className="flex gap-2 mb-4">
        {groups.map(group => (
          <button
            key={group.id}
            onClick={() => setActiveGroup(group.name)}
            className={`px-4 py-2 rounded ${
              activeGroup === group.name
                ? 'bg-blue-600'
                : 'bg-gray-800'
            }`}
          >
            {group.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {tiles
          .filter(tile => tile.group === activeGroup.toLowerCase())
          .map(tile => (
            <div
              key={tile.id}
              className="bg-gray-800 p-4 rounded-lg flex flex-col items-center hover:bg-gray-700 cursor-pointer"
            >
              <span className="text-2xl mb-2">{tile.icon}</span>
              <span>{tile.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LinkGroups;