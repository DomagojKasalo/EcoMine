import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchBlockData = async (hash) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/block/${hash}`);
    return response.data; 
  } catch (error) {
    console.error('Greška pri dohvaćanju podataka o bloku:', error.message);
    throw error; 
  }
};
