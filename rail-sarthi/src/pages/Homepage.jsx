import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">Rail Sarthi</h1>
      <p className="text-center mt-4">
        Simplifying train travel for first-time users in Mumbai. Navigate routes with ease.
      </p>
      <div className="flex justify-center mt-8">
        <a href="/route-planner" className="btn-primary">Plan Your Route</a>
        <a href="/live-updates" className="btn-secondary ml-4">Live Updates</a>
      </div>
    </div>
  );
};

export default HomePage;
