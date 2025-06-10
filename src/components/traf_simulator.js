import { useState, useEffect } from 'react';

export default function traf_simulator() {
  const [light, setLight] = useState('red');

  useEffect(() => {
    const timer = setInterval(() => {
      setLight((prevLight) => {
        if (prevLight === 'red') return 'green';
        if (prevLight === 'green') return 'yellow';
        return 'red';
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 space-y-2">
      <h2 className="text-xl font-semibold mb-4">🚦 Live Traffic Signal</h2>
      <div className="w-20 h-52 bg-gray-800 rounded-xl flex flex-col justify-around items-center py-4 shadow-lg">
        <div className={`w-10 h-10 rounded-full ${light === 'red' ? 'bg-red-500' : 'bg-red-200'}`} />
        <div className={`w-10 h-10 rounded-full ${light === 'yellow' ? 'bg-yellow-400' : 'bg-yellow-200'}`} />
        <div className={`w-10 h-10 rounded-full ${light === 'green' ? 'bg-green-500' : 'bg-green-200'}`} />
      </div>
    </div>
  );
}
