import { useState, useEffect } from 'react';

export default function CounterSimulator() {
  const [light, setLight] = useState('red');

  useEffect(() => {
    const timer = setInterval(() => {
      setLight((prev) => {
        if (prev === 'red') return 'green';
        if (prev === 'green') return 'yellow';
        return 'red';
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="simulator-box">
      <h2>🚦 Live Traffic Signal</h2>
      <div className="traffic-light-box">
        <div className={`circle ${light === 'red' ? 'active-red' : 'dim-red'}`}></div>
        <div className={`circle ${light === 'yellow' ? 'active-yellow' : 'dim-yellow'}`}></div>
        <div className={`circle ${light === 'green' ? 'active-green' : 'dim-green'}`}></div>
      </div>
    </div>
  );
}
