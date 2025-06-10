import CounterSimulator from "../components/CounterSimulator";

export default function Simulator() {
  return (
    <div className="page-container">
      <h1>Traffic Simulator</h1>
      <p>This page simulates vehicle flow at a junction.</p>
      <traf_simulator />
    </div>
  );
}
