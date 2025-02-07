import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlockForm from './components/BlockForm';
import BlockDetails from './components/BlockDetails';
import Loader from './components/Loader';
import CompareBlocks from './pages/CompareBlocks';
import { fetchBlockData } from './services/api';
import './App.css';

const Home = () => {
  const [block, setBlock] = useState(null); 
  const [calculations, setCalculations] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(''); 

  const handleSearch = async (hash) => {
    setIsLoading(true);
    setError('');
    setBlock(null);
    setCalculations(null);

    try {
      const data = await fetchBlockData(hash);
      setBlock(data.block); 
      setCalculations(data.calculations); 
    } catch (err) {
      setError('Greška pri dohvaćanju podataka o bloku. Provjerite hash i pokušajte ponovno.');
    } finally {
      setIsLoading(false);
    }
  };

  console.log('block', block);

  return (
    <div className="home">
      <header>
        <h1>Bitcoin Block Explorer</h1>
      </header>
      <main>
        <BlockForm onSearch={handleSearch} />
        {isLoading && <Loader />}
        {error && <p className="error">{error}</p>}
        {!isLoading && block && calculations && (
          <BlockDetails block={block} calculations={calculations} />
        )}
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Početna</Link>
          </li>
          <li>
            <Link to="/compare">Usporedba blokova</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<CompareBlocks />} />
      </Routes>
    </Router>
  );
};

export default App;
