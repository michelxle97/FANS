import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import GuessPokemon from './components/GuessPokemon';
import PokemonByType from './components/PokemonByType';



function App() {

  return (
    <div>
      <Navbar />
      <GuessPokemon />
      <PokemonByType />
    </div>

  );
}

export default App;
