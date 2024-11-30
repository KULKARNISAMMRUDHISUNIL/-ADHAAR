import React from 'react';
import { Heart } from 'lucide-react';

export default function Tips() {
  const tips = [
    {
      title: "Before Donation",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80",
      items: [
        "Get adequate sleep the night before",
        "Eat a healthy meal within 2-3 hours of donation",
        "Drink plenty of water",
        "Avoid fatty foods",
        "Bring valid ID and donor card"
      ]
    },
    {
      title: "During Donation",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80",
      items: [
        "Wear comfortable clothing",
        "Relax and stay calm",
        "Inform staff of any discomfort",
        "Follow all instructions carefully"
      ]
    },
    {
      title: "After Donation",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      items: [
        "Rest for 10-15 minutes",
        "Drink extra fluids",
        "Avoid strenuous activities",
        "Keep the bandage on for several hours",
        "Eat iron-rich foods"
      ]
    }
  ];

  const nutritionTips = [
    {
      title: "Iron-Rich Foods",
      image: "https://images.unsplash.com/photo-1607877742574-a483d974d3cd?auto=format&fit=crop&q=80",
      items: [
        "Lean red meat",
        "Spinach and leafy greens",
        "Beans and lentils",
        "Fish and seafood",
        "Iron-fortified cereals"
      ]
    },
    {
      title: "Hydration",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80",
      items: [
        "Water (8-10 glasses daily)",
        "Fresh fruit juices",
        "Coconut water",
        "Herbal teas",
        "Avoid alcohol"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-800 mb-4">
            Tips for Healthy Blood Donation
          </h1>
          <p className="text-xl text-gray-700">
            Follow these guidelines to ensure a safe and successful donation experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tips.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="text-red-800 w-6 h-6 mr-2" />
                  <h2 className="text-2xl font-bold text-red-800">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-red-800 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-red-800 text-center mb-8">
          Nutrition Guidelines
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {nutritionTips.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="text-red-800 w-6 h-6 mr-2" />
                  <h2 className="text-2xl font-bold text-red-800">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-red-800 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}