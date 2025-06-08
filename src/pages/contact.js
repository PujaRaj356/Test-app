export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Contact Us</h1>

      <p className="text-lg mb-6 text-center">
        Have questions, feedback, or need support? We're here to help.
      </p>

      <ul className="text-lg space-y-4">
        <li>
          <strong className="text-gray-700">Email:</strong>{' '}
          <span className="text-gray-900">contact@trafficpulse.ai</span>
        </li>
        <li>
          <strong className="text-gray-700">Phone:</strong>{' '}
          <span className="text-gray-900">+91 98765 43210</span>
        </li>
        <li>
          <strong className="text-gray-700">Address:</strong>{' '}
          <span className="text-gray-900">
            TrafficPulse HQ, Urban Mobility Center, Chennai, India
          </span>
        </li>
      </ul>
    </div>
  );
}
