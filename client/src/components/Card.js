import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchFactByTypeName } from "../services/pokemonFactService";
import './Card.css';

const PokemonCard = ({ name }) => {
  const [facts, setFacts] = useState(null);

  const handleClick = async () => {
    try {
      const factsData = await fetchFactByTypeName(name); // Use fetchFactByTypeName function
      setFacts(factsData);
    } catch (error) {
      console.error('Error fetching Pokémon facts:', error);
    }
  };

  const getTypeColor = () => {
    let temp = name + " pokemon-card";
    console.log(temp);
    return temp;
  }

  return (
    <div className={getTypeColor()}>
      <p>{name}</p>
      <Link to={`/pokemon/${name}`} className="pokemon-facts-link" onClick={handleClick}>
        Facts about this type of Pokémon
      </Link>
      {facts && (
        <div className="pokemon-facts">
          <h3>Facts about {name}</h3>
          <p>{facts}</p>
        </div>
      )}
    </div>
  );
};

const PokemonCards = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonsByType = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        const data = await response.json();
        const types = data.results.slice(0, 18);
        const pokemons = types.map((type) => type.name);
        setPokemonList(pokemons);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    };

    fetchPokemonsByType();
  }, []);

  return (
    <div className="pokemon-card-container">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} name={pokemon} />
      ))}
    </div>
  );
};

export default PokemonCards;