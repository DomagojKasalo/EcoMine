import React, { useState } from 'react';

const BlockForm = ({ onSearch }) => {
  const [hash, setHash] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hash.trim() === '') {
      alert('Molimo unesite hash bloka.');
      return;
    }
    onSearch(hash); 
    setHash(''); 
  };

  return (
    <div className="block-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="hashInput">Unesite hash bloka:</label>
        <input
          type="text"
          id="hashInput"
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          placeholder="Unesite hash bloka"
        />
        <button type="submit">Pretraži</button>
      </form>
    </div>
  );
};

export default BlockForm;
