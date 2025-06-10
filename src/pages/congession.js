// pages/congession.js
import CongestionPredictor from '../components/CongestionPredictor';

export default function CongessionPage() {
  return (
    <div className="page-container" style={{ backgroundColor: "#f0f7f8", minHeight: "100vh" }}>
      <h1>📊 Congestion Predictor</h1>
      <p>Enter date, time, and location to predict traffic congestion.</p>
      <CongestionPredictor />
    </div>
  );
}
