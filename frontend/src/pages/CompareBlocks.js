import React, { useState } from 'react';
import { fetchBlockData } from '../services/api';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CompareBlocks = () => {
  const [block1, setBlock1] = useState(null);
  const [block2, setBlock2] = useState(null);
  const [hash1, setHash1] = useState('');
  const [hash2, setHash2] = useState('');
  const [error, setError] = useState('');

  const handleCompare = async () => {
    setError('');
    try {
      const data1 = await fetchBlockData(hash1);
      setTimeout(5000);
      const data2 = await fetchBlockData(hash2);
      setBlock1(data1);
      setBlock2(data2);
    } catch (err) {
      setError('Greška pri dohvaćanju podataka. Provjerite hash-eve i pokušajte ponovno.');
    }
  };

  const chartData = {
    labels: ['Blok 1', 'Blok 2'],
    datasets: [
      {
        label: 'Potrošnja energije (kWh)',
        data: [
          parseFloat(block1?.calculations.energyConsumption) || 0,
          parseFloat(block2?.calculations.energyConsumption) || 0,
        ],
        backgroundColor: ['#007bff', '#28a745'],
      },
      {
        label: 'CO2 utjecaj (kg)',
        data: [
          parseFloat(block1?.calculations.co2Impact) || 0,
          parseFloat(block2?.calculations.co2Impact) || 0,
        ],
        backgroundColor: ['#ff6347', '#ffc107'],
      },
      {
        label: 'Trošak energije (€)',
        data: [
          parseFloat(block1?.calculations.energyCost) || 0,
          parseFloat(block2?.calculations.energyCost) || 0,
        ],
        backgroundColor: ['#8a2be2', '#5f9ea0'],
      },
      {
        label: 'Vrijednost Bitcoina (€)',
        data: [
          parseFloat(block1?.calculations.bitcoinValue) || 0,
          parseFloat(block2?.calculations.bitcoinValue) || 0,
        ],
        backgroundColor: ['#ff8c00', '#adff2f'],
      },
    ],
  };

  return (
    <div className="compare-container">
      <h1>Usporedba blokova</h1>
      <div>
        <input
          type="text"
          placeholder="Hash bloka 1"
          value={hash1}
          onChange={(e) => setHash1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Hash bloka 2"
          value={hash2}
          onChange={(e) => setHash2(e.target.value)}
        />
        <button onClick={handleCompare}>Usporedi</button>
      </div>
      {error && <p className="error">{error}</p>}
      {block1 && block2 && (
        <div>
          <div className="block-data">
            <div className="block">
              <h3>Blok 1</h3>
              <p>Hash: {block1.block.hash}</p>
              <p>Potrošnja energije: {block1.calculations.energyConsumption} kWh</p>
              <p>CO2 utjecaj: {block1.calculations.co2Impact} kg</p>
              <p>Trošak energije: {block1.calculations.energyCost} €</p>
              <p>Vrijednost Bitcoina: {block1.calculations.bitcoinValue} €</p>
            </div>
            <div className="block">
              <h3>Blok 2</h3>
              <p>Hash: {block2.block.hash}</p>
              <p>Potrošnja energije: {block2.calculations.energyConsumption} kWh</p>
              <p>CO2 utjecaj: {block2.calculations.co2Impact} kg</p>
              <p>Trošak energije: {block2.calculations.energyCost} €</p>
              <p>Vrijednost Bitcoina: {block2.calculations.bitcoinValue} €</p>
            </div>
          </div>
          <div className="chart-container">
            <Bar data={chartData} key={`${block1?.block.hash}-${block2?.block.hash}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareBlocks;
