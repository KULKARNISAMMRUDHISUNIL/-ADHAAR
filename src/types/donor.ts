export interface Donor {
  id: string;
  name: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  phone: string;
  email: string;
  city: string;
  area: string;
  bloodType: string;
  lastDonation?: string;
  latitude?: number;
  longitude?: number;
}