import { useState } from 'react';

export default function CongestionPredictor() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [level, setLevel] = useState(null);

  const predictCongestion = () => {
    if (!date || !time || !location) {
      alert("Please fill all fields.");
      return;
    }

    const hour = parseInt(time.split(':')[0], 10);
    if (hour >= 7 && hour <= 9) setLevel("High");
    else if (hour >= 17 && hour <= 19) setLevel("Medium");
    else setLevel("Low");
  };

  return (
    <div className="simulator-box" style={{ marginTop: "40px" }}>
      <h2>📊 Congestion Prediction</h2>
      <p>Enter date, time and location to see predicted traffic levels.</p>

      <div style={{ margin: "20px 0" }}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={inputStyle}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div className="btn-group">
        <button onClick={predictCongestion}>Predict</button>
      </div>

      {level && (
        <div style={{ marginTop: "20px" }}>
          <strong>Expected Congestion:</strong>
          <div className={`bar ${level.toLowerCase()}`}>{level}</div>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  margin: "5px",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};





