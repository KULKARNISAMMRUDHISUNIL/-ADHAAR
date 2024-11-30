import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-red-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Droplet className="h-8 w-8" />
          <span className="text-2xl font-bold">रक्तADHAAR</span>
        </Link>
        <nav className="flex space-x-6">
          <Link to="/register" className="bg-white text-red-800 px-4 py-2 rounded-lg font-semibold hover:bg-red-100">
            BE A DONOR
          </Link>
          <Link to="/search" className="bg-white text-red-800 px-4 py-2 rounded-lg font-semibold hover:bg-red-100">
            FIND DONOR
          </Link>
          <Link to="/tips" className="hover:text-red-200">Tips</Link>
        </nav>
      </div>
    </header>
  );
}