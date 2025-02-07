const axios = require('axios');

const CRYPTOCOMPARE_API_BASE_URL = 'https://min-api.cryptocompare.com/data/v2';
const API_KEY = 'b0e35e6bc81923794b361c71a772bb1d84325d525866e9906955be1115b86b5c';

const getHistoricalBitcoinPrice = async (date) => {
  try {
    const unixTimestamp = Math.floor(new Date(date).getTime() / 1000);

    const response = await axios.get(
      `${CRYPTOCOMPARE_API_BASE_URL}/histoday`, 
      {
        params: {
          fsym: 'BTC',        
          tsym: 'EUR',        
          toTs: unixTimestamp, 
          limit: 1,
          api_key: API_KEY,   
        },
      }
    );

    const historicalData = response.data?.Data?.Data[0];
    if (!historicalData || !historicalData.close) {
      throw new Error('Cijena nije pronađena za zadani datum.');
    }

    return historicalData.close;
  } catch (error) {
    console.error('Greška pri dohvaćanju povijesne cijene Bitcoina:', error.message);
    throw new Error('Nije moguće dohvatiti povijesnu cijenu Bitcoina.');
  }
};

module.exports = getHistoricalBitcoinPrice;
