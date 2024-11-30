import { geocodeDonor } from './geocoding';
import type { Donor } from '../types/donor';

export const saveToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const addDonor = async (donor: Donor) => {
  const donors = getFromLocalStorage('donors') || [];
  const geolocatedDonor = await geocodeDonor({
    ...donor,
    id: Date.now().toString()
  });
  donors.push(geolocatedDonor);
  saveToLocalStorage('donors', donors);
};