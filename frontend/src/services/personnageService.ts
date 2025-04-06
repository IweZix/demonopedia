import axios from 'axios';
import Personnage from '@/types/Personnage';

/**
 * Fetches all personnages from the API
 * @returns {Promise<Personnage[]>} A promise that resolves to an array of personnages
 */
export async function fetchPersonnages(): Promise<Personnage[]> {
  try {
    const response = await axios.get('/api/personnages');
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while fetching personnages');
  }
}

/**
 * Fetches a personnage by its id
 * @param id The id of the personnage to fetch
 * @returns {Promise<Personnage>} A promise that resolves to the fetched personnage
 */
export async function fetchPersonnageById(id: number): Promise<Personnage> {
  try {
    const response = await axios.get(`/api/personnages/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while fetching personnage');
  }
}
