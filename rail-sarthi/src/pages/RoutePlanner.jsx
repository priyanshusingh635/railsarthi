import React, { useState } from 'react';
import axios from 'axios';

const RoutePlanner = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [route, setRoute] = useState(null);

  const handleRouteSearch = async () => {
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";
    const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`);
    setRoute(response.data.routes[0].legs[0]);  // Get the first route's details
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Plan Your Journey</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter Starting Station"
          className="border p-2 w-full"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Destination Station"
          className="border p-2 w-full mt-2"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button className="btn-primary mt-4" onClick={handleRouteSearch}>
          Search Route
        </button>
      </div>
      {route && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Route Details</h2>
          <p><strong>Distance:</strong> {route.distance.text}</p>
          <p><strong>Duration:</strong> {route.duration.text}</p>
          <p><strong>Start Address:</strong> {route.start_address}</p>
          <p><strong>End Address:</strong> {route.end_address}</p>
        </div>
      )}
    </div>
  );
};

export default RoutePlanner;
