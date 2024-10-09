import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LiveUpdates = () => {
  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    const fetchLiveUpdates = async () => {
      const response = await axios.get('https://indianrailwaysapi.com/api/train/liveStatus?trainNumber=11019&apikey=YOUR_API_KEY');
      setTrainData(response.data);
    };
    fetchLiveUpdates();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Live Train Updates</h1>
      <ul className="mt-4">
        {trainData.map((train, index) => (
          <li key={index} className="border-b p-2">
            <p><strong>Train:</strong> {train.train_name} ({train.train_number})</p>
            <p><strong>Current Location:</strong> {train.current_station.name}</p>
            <p><strong>Arrival Time:</strong> {train.expected_arrival_time}</p>
            <p><strong>Status:</strong> {train.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveUpdates;
