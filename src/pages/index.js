import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center text-center">
      <main>
        <h1 className="text-3xl font-bold mb-6 text-black">Welcome to the Homepage</h1>
        
        <div className="space-x-4">
          <Link href="/contact">
            <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Contact</a>
          </Link>
          <Link href="/about">
            <a className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">About</a>
          </Link>
        </div>
      </main>
    </div>
  );
}