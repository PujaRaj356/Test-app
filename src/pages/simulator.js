import CounterSimulator from '../components/CounterSimulator';
import CongestionPredictor from '../components/CongestionPredictor';

export default function Simulator() {
  return (
    <div className="simulator-page" style={{ backgroundColor: "#eef4fa", minHeight: "100vh" }}>
      <div className="page-container">
        <h1>Traffic Light Simulator</h1>
        <p>This component simulates a real-world traffic light cycle.</p>
        
        <CounterSimulator />

        <h1 style={{ marginTop: '60px' }}>Congestion Prediction Widget</h1>
        <p>This tool predicts traffic congestion based on time, date, and location.</p>

        <CongestionPredictor />
      </div>
    </div>
  );
}
