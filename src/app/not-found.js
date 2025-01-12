// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{ backgroundImage: `url(${'/background.jpg'})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />


      <div className="relative flex flex-col items-center justify-center h-screen bg-transparent z-10">
        <h1 className="text-8xl font-bold text-white">Coming Soon</h1>
        <Link href="/" className="mt-6 px-4 py-2 bg-transparent text-white rounded-lg hover:bg-white/20 border border-white transition-colors duration-500">
          Go back home
        </Link>
      </div>
    </div>
  );
}
