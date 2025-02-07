import React from 'react';

const BlockDetails = ({ block, calculations }) => {
  if (!block || !calculations) {
    return null;
  }

  return (
    <div className="block-details">
      <h2>Osnovne informacije o bloku</h2>
      <ul>
        <li>
          <strong>Hash:</strong> {block.hash}
        </li>
        <li>
          <strong>Visina:</strong> {block.height}
        </li>
        <li>
          <strong>Vrijeme:</strong> {block.time}
        </li>
        <li>
          <strong>Težina:</strong> {block.difficulty}
        </li>
        <li>
          <strong>Veličina:</strong> {block.size} bajtova
        </li>
        <li>
          <strong>Broj transakcija:</strong> {block.transactionCount}
        </li>
      </ul>
      <h2>Dodatne informacije</h2>
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

export default BlockDetails;
