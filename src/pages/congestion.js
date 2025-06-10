
import CongestionPredictor from '../components/CongestionPredictor';

export default function CongestionPage() {
  return (
    <div className='simulator-page'>
      <h1>📊 Congestion Predictor</h1>
      <p>Enter date, time, and location to predict traffic congestion.</p>
      <CongestionPredictor />
    </div>
  );
}
