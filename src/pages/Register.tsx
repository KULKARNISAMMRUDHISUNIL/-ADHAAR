import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDonor } from '../utils/storage';
import toast from 'react-hot-toast';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    city: '',
    area: '',
    bloodType: '',
    healthQuestions: {
      recentIllness: false,
      medications: false,
      recentSurgery: false,
      lastDonation: false,
      travelHistory: false,
      chronicConditions: false,
      pregnancyHistory: false,
      alcoholConsumption: false
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHealthQuestionChange = (name: string) => {
    setFormData(prev => ({
      ...prev,
      healthQuestions: {
        ...prev.healthQuestions,
        [name]: !prev.healthQuestions[name as keyof typeof prev.healthQuestions]
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.dateOfBirth || !formData.gender || 
        !formData.phone || !formData.email || !formData.city || 
        !formData.area || !formData.bloodType) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    try {
      await addDonor(formData);
      toast.success('Registration successful!');
      navigate('/thank-you');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=2000")',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-red-800 mb-6">Donor Registration</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Blood Type *
                  </label>
                  <select
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  >
                    <option value="">Select Blood Type</option>
                    {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Area/Locality *
                  </label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Health Screening Section */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Health Screening</h3>
              <div className="space-y-3">
                {[
                  { name: 'recentIllness', label: 'Have you had any recent illnesses or infections?' },
                  { name: 'medications', label: 'Are you currently taking any medications?' },
                  { name: 'recentSurgery', label: 'Have you had surgery in the last 6 months?' },
                  { name: 'lastDonation', label: 'Have you donated blood in the last 3 months?' },
                  { name: 'travelHistory', label: 'Have you traveled to any disease-prone areas recently?' },
                  { name: 'chronicConditions', label: 'Do you have any chronic medical conditions?' },
                  { name: 'pregnancyHistory', label: 'For females: Are you pregnant or have been pregnant in the last 6 months?' },
                  { name: 'alcoholConsumption', label: 'Have you consumed alcohol in the last 24 hours?' }
                ].map(question => (
                  <div key={question.name} className="flex items-start">
                    <input
                      type="checkbox"
                      id={question.name}
                      checked={formData.healthQuestions[question.name as keyof typeof formData.healthQuestions]}
                      onChange={() => handleHealthQuestionChange(question.name)}
                      className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor={question.name} className="ml-2 text-sm text-gray-700">
                      {question.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-6 py-2 border border-red-800 text-red-800 rounded-lg hover:bg-red-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700"
              >
                Register as Donor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}