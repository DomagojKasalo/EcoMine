import React from 'react';

const Calculations = ({ calculations }) => {
  if (!calculations) {
    return null; 
  }

  return (
    <div className="calculations">
      <h2>Izračunati podaci</h2>
      <ul>
        <li>
          <strong>Hash rate:</strong> {calculations.hashRate} H/s
        </li>
        <li>
          <strong>Potrošnja energije:</strong> {calculations.energyConsumption} kWh
        </li>
        <li>
          <strong>Trošak energije:</strong> {calculations.energyCost} €
        </li>
        <li>
          <strong>CO2 utjecaj:</strong> {calculations.co2Impact} kg CO2
        </li>
        <li>
          <strong>Vrijednost Bitcoina:</strong> {calculations.bitcoinValue} €
        </li>
      </ul>
    </div>
  );
};

export default Calculations;
