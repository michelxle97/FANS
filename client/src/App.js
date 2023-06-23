import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import GuessPokemon from './components/GuessPokemon';
import PokemonByType from './components/PokemonByType';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';


function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<GuessPokemon />} />
          <Route path="/pokemon" element={<PokemonByType />} />
          <Route path="/pokemonDetails/:name" element={<PokemonDetails />} />
        </Routes>
      </div>
    </Router>





  );
}

export default App;
