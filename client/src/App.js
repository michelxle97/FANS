import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import GuessPokemon from './components/GuessPokemon';
import PokemonByType from './components/PokemonByType';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import PokeHome from './components/PokeHome';
import PokemonCards from './components/Card';


function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PokeHome />} />
          <Route path="/guess" element={<GuessPokemon />} />
          <Route path="/pokemon" element={<PokemonByType />} />
          <Route path="/pokemonDetails/:name" element={<PokemonDetails />} />
          <Route path="/pokemonCards" element={<PokemonCards/>}/>
          <Route path="/pokemon/:name" element={<PokemonCards/>}/>
        </Routes>
      </div>
    </Router>





  );
}

export default App;
