import React from 'react';
import { Heart, Users, Search, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?auto=format&fit=crop&q=80&w=2000")',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="bg-red-800 text-white py-2 overflow-hidden">
        <marquee behavior="scroll" direction="left" className="text-xl font-bold">
          Welcome to रक्तADHAAR - Connecting Life-Saving Donors with Those in Need - Every Drop Counts - Join Us in Saving Lives
        </marquee>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">Welcome to रक्तADHAAR</h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
            Connecting life-saving donors with those in need. Every drop counts in our mission to save lives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6">
            <img
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80"
              alt="Blood Donation Process"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-red-800 mb-2">Our Mission</h2>
            <p className="text-gray-700">
              रक्तADHAAR plays a vital role in connecting blood donors with those in need. 
              We maintain a comprehensive database of donors and facilitate quick access to 
              life-saving blood donations.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80"
              alt="Blood Bank"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-red-800 mb-2">How It Works</h2>
            <p className="text-gray-700">
              Register as a donor, search for donors in your area, and connect directly 
              with potential donors. Our platform makes it easy to find the right blood 
              type when you need it most.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6">
            <img
              src="https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80"
              alt="Impact"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-red-800 mb-2">Our Impact</h2>
            <p className="text-gray-700">
              Every donation helps save lives. Join our growing community of donors 
              and make a difference in someone's life today. Your contribution matters.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Users, text: "Growing Donor Network", number: "1000+" },
            { icon: Search, text: "Easy Donor Search", number: "24/7" },
            { icon: Activity, text: "Lives Impacted", number: "5000+" },
            { icon: Heart, text: "Success Rate", number: "99%" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center">
              <stat.icon className="w-12 h-12 text-red-800 mx-auto mb-4" />
              <div className="text-3xl font-bold text-red-800 mb-2">{stat.number}</div>
              <div className="text-gray-700">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}