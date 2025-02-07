const sendRpcRequest = require('../utils/rpcClient');
const getHistoricalBitcoinPrice = require('../utils/cryptoCompareClient');
const { getEfficiencyByYear } = require('../utils/efficiency');

const CO2_EMISSION_PER_KWH = 0.4;
const ELECTRICITY_PRICE_PER_KWH = 0.13;

exports.getBlockDetails = async (req, res) => {
  try {
    let { hash } = req.params;
    if (!isNaN(hash)) {
      hash = await sendRpcRequest('getblockhash', [parseInt(hash, 10)]);
    }

    const block = await sendRpcRequest('getblock', [hash]);
    if (!block) {
      return res.status(404).json({ error: 'Blok nije pronađen.' });
    }

    const previousBlock = await sendRpcRequest('getblock', [block.previousblockhash]);
    const actualTime = block.time - previousBlock.time;

    if (actualTime <= 0) {
      return res.status(400).json({ error: 'Neispravni podaci o vremenu između blokova.' });
    }

    const hashRate = (block.difficulty * Math.pow(2, 32)) / actualTime;

    const blockYear = new Date(block.time * 1000).getFullYear();
    const efficiency = getEfficiencyByYear(blockYear);

    const energyConsumption = ((hashRate / 1e9) * efficiency * actualTime) / 3.6e6;

    const energyCost = energyConsumption * ELECTRICITY_PRICE_PER_KWH;

    const co2Impact = energyConsumption * CO2_EMISSION_PER_KWH;

    const blockDate = new Date(block.time * 1000);
    const formattedDate = `${blockDate.getDate()}-${blockDate.getMonth() + 1}-${blockDate.getFullYear()}`;
    const bitcoinPrice = await getHistoricalBitcoinPrice(formattedDate);
    //const bitcoinPrice = 200;

    res.json({
      block: {
        hash: block.hash,
        height: block.height,
        time: blockDate.toISOString(),
        difficulty: block.difficulty,
        size: block.size,
        transactionCount: block.tx.length,
      },
      calculations: {
        hashRate: hashRate.toFixed(2),
        energyConsumption: energyConsumption.toFixed(2),
        energyCost: energyCost.toFixed(2),
        co2Impact: co2Impact.toFixed(2),
        bitcoinValue: bitcoinPrice ? bitcoinPrice.toFixed(2) : 'N/A',
      },
    });
  } catch (error) {
    console.error('Greška pri dohvaćanju bloka:', error.message);
    res.status(500).json({ error: 'Greška pri dohvaćanju podataka.' });
  }
};
