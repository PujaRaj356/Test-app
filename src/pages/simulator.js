import CounterSimulator from '../components/CounterSimulator';

export default function Simulator() {
  return (
    <div className="simulator-page">
      <div className="page-container">
        <h1>Traffic Light Simulator</h1>
        <p>This component simulates a real-world traffic light cycle.</p>
        <CounterSimulator />
      </div>
    </div>
  );
}
