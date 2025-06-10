import { useState, useEffect } from 'react';

export default function CounterSimulator() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Traffic is smooth.");

  useEffect(() => {
    if (count > 20) setMessage("Heavy congestion!");
    else if (count > 10) setMessage("Moderate traffic.");
    else if (count < 0) setMessage("Invalid count!");
    else setMessage("Traffic is smooth.");
  }, [count]);

  return (
    <div className="simulator-box">
      <h2>Traffic Flow Simulator</h2>
      <p>Vehicles Detected: {count}</p>
      <div className="btn-group">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
      <p>{message}</p>
    </div>
  );
}
