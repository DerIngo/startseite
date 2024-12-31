import React from 'react';

const WeatherWidget = () => (
  <div className="bg-gray-800 p-4 rounded-lg">
    <h2 className="text-lg mb-2">Wetter</h2>
    <div className="flex items-center">
      <span className="text-3xl mr-2">☁️</span>
      <div>
        <p className="text-2xl">1°C</p>
        <p className="text-sm text-gray-400">Leverkusen</p>
      </div>
    </div>
  </div>
);

const StocksWidget = () => (
  <div className="bg-gray-800 p-4 rounded-lg">
    <h2 className="text-lg mb-2">Aktien</h2>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>TSLA</span>
        <span className="text-green-500">+1.38%</span>
      </div>
      <div className="flex justify-between">
        <span>AAPL</span>
        <span className="text-red-500">-0.42%</span>
      </div>
    </div>
  </div>
);

const Widgets = () => {
  return (
    <div className="w-1/3 space-y-4">
      <WeatherWidget />
      <StocksWidget />
    </div>
  );
};

export default Widgets;