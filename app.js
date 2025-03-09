import React, { useState, useEffect } from 'react';
import Map from './components/Map';

const startingPoint = { lat: -1.939826787816454, lng: 30.0445426438232 };

function App() {
  const [currentLocation, setCurrentLocation] = useState(startingPoint);
  const [nextStop, setNextStop] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const newLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
          setCurrentLocation(newLocation);
        },
        (error) => console.error('Geolocation error:', error),
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      );
    }
  }, []);

  return (
    <div>
      <Map currentLocation={currentLocation} onLocationChange={setCurrentLocation} nextStop={nextStop} />
    </div>
  );
}

export default App;
