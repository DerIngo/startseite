import React from 'react';
import SearchBar from './SearchBar';
import LinkGroups from './LinkGroups';
import Widgets from './Widgets';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <SearchBar />
      
      <div className="flex gap-4 mt-8">
        <LinkGroups />
        <Widgets />
      </div>
    </div>
  );
};

export default App;