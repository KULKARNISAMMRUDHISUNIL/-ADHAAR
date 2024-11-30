import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function ThankYou() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=2000")',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="bg-red-800 text-white py-2 overflow-hidden">
        <marquee behavior="scroll" direction="left" className="text-xl font-bold">
          Thank You for Being a Life Saver! - Your Donation Makes a Difference - Together We Save Lives - रक्तADHAAR Appreciates Your Noble Gesture
        </marquee>
      </div>

      <div className="flex-1 flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 text-center">
            <div className="animate-pulse mb-6">
              <Heart className="w-16 h-16 text-red-800 mx-auto" />
            </div>
            
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-red-800 mb-4">
                Thank You for Your Life-Saving Donation!
              </h1>
              <p className="text-gray-700 mb-6">
                Your generous donation today is a gift of hope for those in need. 
                You've made a difference in the lives of many, and we couldn't be 
                more grateful for your selflessness.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-red-800 mb-4">What's Next?</h2>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-red-800 mt-1 mr-2 flex-shrink-0" />
                  <span>Stay Safe: Make sure to rest and hydrate. Your well-being is important to us.</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-red-800 mt-1 mr-2 flex-shrink-0" />
                  <span>Track Your Impact: We'll notify you once your donation has been used to help someone in need.</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-red-800 mt-1 mr-2 flex-shrink-0" />
                  <span>Spread the Word: Encourage others to join you in giving the gift of life.</span>
                </li>
              </ul>
            </div>

            <div className="space-x-4">
              <Link
                to="/"
                className="inline-block bg-red-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
              >
                Return Home
              </Link>
              <Link
                to="/tips"
                className="inline-block bg-white text-red-800 px-6 py-3 rounded-lg font-bold border-2 border-red-800 hover:bg-red-50 transition"
              >
                View Post-Donation Tips
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}