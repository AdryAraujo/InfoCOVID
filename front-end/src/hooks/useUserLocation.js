import { useEffect, useState } from 'react';

function useUserLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          setError(error);
        }
      );
    } else {
      setError(new Error('Geolocation is not available in this browser.'));
    }
  }, []);

  return { location, error };
}

export default useUserLocation;