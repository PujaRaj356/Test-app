export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">About TrafficPulse</h1>

      <p className="mb-6 text-lg">
        TrafficPulse is a smart AI-based solution designed to optimize traffic flow in real-time.
        Our system monitors vehicle patterns and adapts traffic light timings automatically to reduce congestion and delays.
      </p>

      <hr className="border-gray-300 mb-6" />

      <p className="mb-6 text-lg">
        With live updates and predictive analytics, TrafficPulse helps city traffic authorities manage routes efficiently and sustainably.
      </p>

      <hr className="border-gray-300 mb-6" />

      <p className="text-lg">
        Our goal is to create smoother, safer, and smarter roads using intelligent systems and real-time data.
      </p>
    </div>
  );
}
