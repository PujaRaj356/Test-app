// pages/index.js
import { useEffect } from 'react';
import Link from 'next/link';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../src/firebase/firebaseConfig';

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, 'users')); // change 'users' to your collection name

        querySnapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="container mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">🚦 Welcome to TrafficPulse</h1>
        <p className="text-gray-700 mb-8">AI-powered traffic optimization for smarter cities.</p>

        <div className="space-x-4 space-y-2 sm:space-y-0 sm:space-x-4 flex flex-wrap justify-center">
          <Link href="/simulator">
            <a className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">Traffic Simulator</a>
          </Link>
          <Link href="/congestion">
            <a className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">Congestion Predictor</a>
          </Link>
          <Link href="/contact">
            <a className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Contact</a>
          </Link>
          <Link href="/about">
            <a className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">About</a>
          </Link>
          <Link href="/query">
            <a className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition">Ask a Question</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
