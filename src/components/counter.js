import { useEffect, useState } from 'react';

export default function CounterComponent({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount || 0);
  const [message, setMessage] = useState("Start counting...");

  function incrementCount() {
    console.log("Incrementing count", count);
    setCount(count + 1);
  }

  function decrementCount() {
    console.log("Decrement count", count);
    setCount(count - 1);
  }

  useEffect(() => {
    console.log("useEffect called", count);
    if (count > 20) {
      setMessage("You are above 20!!!");
    } else if (count > 10) {
      setMessage("You are above 10!!!");
    } else if (count < 0) {
      setMessage("You are negative!!!");
    } else {
      setMessage("You are below 10!!!");
    }
  }, [count]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 text-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Counter Component</h1>
        
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={incrementCount}
            className="px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            +
          </button>
          <button
            onClick={decrementCount}
            className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            -
          </button>
        </div>

        <p className="text-xl font-semibold mb-4">Counter Count: {count}</p>

        <div>
          <h2 className="text-lg text-blue-700 font-medium">{message}</h2>
        </div>
      </div>
    </div>
  );
}
