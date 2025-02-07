const express = require('express');
const axios = require('axios');

const router = express.Router();

const CRYPTOCOMPARE_API_BASE_URL = 'https://min-api.cryptocompare.com/data/pricehistorical';
const API_KEY = 'b0e35e6bc81923794b361c71a772bb1d84325d525866e9906955be1115b86b5c';

router.get('/test/crypto', async (req, res) => {
  try {
    const { fsym, tsyms, date } = req.query;

    // Pretvorba datuma u timestamp (Unix format)
    const timestamp = Math.floor(new Date(date).getTime() / 1000);

    const response = await axios.get(CRYPTOCOMPARE_API_BASE_URL, {
      params: {
        fsym,       // Kratica za kriptovalutu (npr. BTC)
        tsyms,      // Kratica za fiat valutu (npr. EUR)
        ts: timestamp,  // Unix timestamp za povijesni podatak
        api_key: API_KEY, // Vaš API ključ
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Greška pri dohvaćanju podataka iz CryptoCompare:', error.message);
    res.status(500).json({ error: 'Nije moguće dohvatiti podatke iz CryptoCompare API-ja.' });
  }
});

module.exports = router;
