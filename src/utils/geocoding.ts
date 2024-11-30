import type { Donor } from '../types/donor';

export const geocodeDonor = async (donor: Donor): Promise<Donor> => {
  try {
    // Add a delay to respect OpenStreetMap's usage policy
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        `${donor.area}, ${donor.city}`
      )}&addressdetails=1&limit=1`,
      {
        headers: {
          'User-Agent': 'RaktADHAAR Blood Bank Application'
        }
      }
    );
    
    const data = await response.json();
    
    if (data && data[0]) {
      return {
        ...donor,
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon)
      };
    }
    return donor;
  } catch (error) {
    console.error('Geocoding error:', error);
    return donor;
  }
};