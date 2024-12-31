import React, { useState, useRef } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import config from './search-engines.json';

const SearchBar = () => {
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEngineMenuOpen, setIsEngineMenuOpen] = useState(false);
  const [selectedEngine, setSelectedEngine] = useState(config.engines[0]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const searchUrl = new URL(selectedEngine.baseUrl);
      searchUrl.searchParams.set(selectedEngine.queryParam, searchQuery);
      
      if (config.config.openInNewTab) {
        window.open(searchUrl.toString(), '_blank');
      } else {
        window.location.href = searchUrl.toString();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleEngineSelect = (engine) => {
    setSelectedEngine(engine);
    setIsEngineMenuOpen(false);
  };

  const SearchEngineIcon = ({ engine }) => {
    console.log("engine: " + engine);
  
    // Extrahiere den Hostnamen aus der baseUrl
    const url = new URL(engine.baseUrl);
    const faviconUrl = `${url.origin}/favicon.ico`;
  
    return (
      <img 
        src={faviconUrl} 
        alt={engine.id} 
        className="w-4 h-4 rounded-sm"
      />
    );
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-4xl mx-auto">
      <div className="relative flex items-center h-12 bg-gray-800 rounded-lg">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsEngineMenuOpen(!isEngineMenuOpen)}
            className="flex items-center h-full px-3 hover:bg-gray-700"
          >
            <SearchEngineIcon engine={selectedEngine} />
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>

          {isEngineMenuOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50">
              {config.engines.map((engine) => (
                <button
                  key={engine.id}
                  type="button"
                  onClick={() => handleEngineSelect(engine)}
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-700 text-left"
                >
                  <SearchEngineIcon engine={engine} />
                  <span>{engine.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Suche mit ${selectedEngine.name}`}
          className="flex-1 bg-transparent border-0 px-4 py-2 outline-none text-white placeholder-gray-400"
        />
        
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              inputRef.current?.focus();
            }}
            className="px-2 hover:bg-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <button
          type="submit"
          className="h-12 px-4 hover:bg-gray-700 rounded-r-lg"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;