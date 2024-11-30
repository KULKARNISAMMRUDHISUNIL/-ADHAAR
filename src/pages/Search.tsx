import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { getFromLocalStorage } from '../utils/storage';
import type { Donor } from '../types/donor';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Custom heart-shaped marker icon
const icon = new Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkYzI2MjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oZWFydCI+PHBhdGggZD0iTTIwLjg0IDQuNjFhNS41IDUuNSAwIDAgMC03Ljc4IDBMMTIgNS42N2wtMS4wNi0xLjA2YTUuNSA1LjUgMCAwIDAtNy43OCA3Ljc4bDEuMDYgMS4wNkwxMiAyMS4yM2w3Ljc4LTcuNzggMS4wNi0xLjA2YTUuNSA1LjUgMCAwIDAgMC03Ljc4WiIgZmlsbD0iI2RjMjYyNiI+PC9wYXRoPjwvc3ZnPg==',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

function MapUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function Search() {
  const [searchCity, setSearchCity] = useState('');
  const [searchBloodType, setSearchBloodType] = useState('');
  const [filteredDonors, setFilteredDonors] = useState<Donor[]>([]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([20.5937, 78.9629]);
  const [mapZoom, setMapZoom] = useState(5);

  const handleSearch = async () => {
    const donors = getFromLocalStorage('donors') || [];
    const filtered = donors.filter((donor: Donor) => {
      const cityMatch = donor.city.toLowerCase().includes(searchCity.toLowerCase());
      const bloodMatch = !searchBloodType || donor.bloodType === searchBloodType;
      return cityMatch && bloodMatch;
    });
    setFilteredDonors(filtered);

    // Update map center if donors are found
    if (filtered.length > 0 && filtered[0].latitude && filtered[0].longitude) {
      setMapCenter([filtered[0].latitude, filtered[0].longitude]);
      setMapZoom(13); // Increased zoom level for better accuracy
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=2000")',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-8">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-red-800 animate-pulse" />
            <h2 className="text-2xl font-bold text-red-800 ml-2">Find Blood Donors</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <input
                type="text"
                placeholder="Enter City"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                onChange={(e) => setSearchCity(e.target.value)}
                value={searchCity}
              />
            </div>
            <div>
              <select
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                onChange={(e) => setSearchBloodType(e.target.value)}
                value={searchBloodType}
              >
                <option value="">All Blood Types</option>
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleSearch}
                className="flex-1 bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Heart className="w-4 h-4 mr-2" />
                Search Donors
              </button>
              <Link
                to="/"
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Back Home
              </Link>
            </div>
          </div>

          <div className="h-[500px] mb-8 rounded-lg overflow-hidden shadow-lg">
            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
            >
              <MapUpdater center={mapCenter} zoom={mapZoom} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {filteredDonors.map((donor) => (
                donor.latitude && donor.longitude ? (
                  <Marker 
                    key={donor.id} 
                    position={[donor.latitude, donor.longitude]}
                    icon={icon}
                  >
                    <Popup>
                      <div className="text-center">
                        <Heart className="w-6 h-6 text-red-800 mx-auto mb-2" />
                        <h3 className="font-bold text-lg mb-1">{donor.name}</h3>
                        <p className="text-red-800 font-semibold mb-1">Blood Type: {donor.bloodType}</p>
                        <p className="text-gray-600 mb-2">{donor.area}, {donor.city}</p>
                        <div className="flex justify-center space-x-3">
                          <a
                            href={`tel:${donor.phone}`}
                            className="text-red-800 hover:text-red-600 flex items-center"
                          >
                            📞 Call
                          </a>
                          <a
                            href={`mailto:${donor.email}`}
                            className="text-red-800 hover:text-red-600 flex items-center"
                          >
                            ✉️ Email
                          </a>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ) : null
              ))}
            </MapContainer>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDonors.map((donor) => (
              <div key={donor.id} className="border rounded-lg p-4 hover:shadow-lg transition bg-white group">
                <div className="flex items-center mb-2">
                  <Heart className="w-5 h-5 text-red-800 group-hover:animate-pulse" />
                  <h3 className="font-bold text-lg ml-2">{donor.name}</h3>
                </div>
                <p className="text-red-800 font-semibold">Blood Type: {donor.bloodType}</p>
                <p className="text-gray-600">Location: {donor.city}, {donor.area}</p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={`tel:${donor.phone}`}
                    className="text-red-800 hover:text-red-600 flex items-center"
                  >
                    <span className="mr-1">📞</span> Call
                  </a>
                  <a
                    href={`mailto:${donor.email}`}
                    className="text-red-800 hover:text-red-600 flex items-center"
                  >
                    <span className="mr-1">✉️</span> Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}