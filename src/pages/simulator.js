import CongestionPredictor from '../components/CongestionPredictor';

export default function SimulatorPage() {
  return (
    <div className="page-container" style={{ backgroundColor: "#eef4fa", minHeight: "100vh" }}>
      <h1>🚦 Traffic Light Simulator</h1>
      <p>This component simulates a real-world traffic light cycle.</p>

      

      <CongestionPredictor />
    </div>
  );
}