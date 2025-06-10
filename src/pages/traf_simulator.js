import traf_simulator from '../components/traf_simulator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-10">Welcome to TrafficPulse</h1>
      <traf-simulator />
    </div>
  );
}
