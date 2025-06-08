export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-200 py-16">
      <div className="container mx-auto px-8 bg-white rounded-lg shadow-md p-10">
        <h1 className="text-3xl font-bold text-yellow-700 mb-6">Contact Us</h1>
        
        <p className="text-gray-700 mb-4">
          If you have any questions, feedback, or partnership inquiries, feel free to reach out.
        </p>

        <ul className="space-y-3 text-gray-800">
          <li>📧 <strong>Email:</strong> contact@trafficpulse.ai</li>
          <li>📞 <strong>Phone:</strong> +91 98765 43210</li>
          <li>📍 <strong>Address:</strong> TrafficPulse HQ, Urban Mobility Center, Chennai, India</li>
        </ul>
      </div>
    </div>
  );
}
