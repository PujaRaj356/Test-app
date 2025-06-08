export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 py-16">
      <div className="container mx-auto px-8 bg-white rounded-lg shadow-md p-10">
        <h1 className="text-3xl font-bold text-green-700 mb-6">About TrafficPulse</h1>
        
        <p className="text-gray-700 mb-4">
          🚗 <strong>TrafficPulse</strong> is an AI-based system designed to intelligently manage and reduce traffic congestion using real-time data.
        </p>
        <hr className="my-4" />
        <p className="text-gray-700 mb-4">
          📊 Our smart algorithms monitor vehicle patterns and adjust signal timings to streamline traffic flow, reduce carbon emissions, and save commuters time.
        </p>
        <hr className="my-4" />
        <p className="text-gray-700">
          🌱 Our mission is to create safer, greener, and smarter road systems through innovation and data-driven insights.
        </p>
      </div>
    </div>
  );
}
