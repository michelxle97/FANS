import React, { useEffect, useState } from 'react';
import { getPokemonByType } from "../services/pokemonApiV2";

const PokemonByType = () => {

    const [selectedType, setSelectedType] = useState('');
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {

        const fetchPokemonsByType = async () => {
            if (selectedType) {
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
                    const data = await response.json();
                    const pokemons = data.pokemon.map(pokemon => pokemon.pokemon.name);
                    setPokemonList(pokemons);
                } catch (error) {
                    console.error(`Error fetching Pokémon for type ${selectedType}:`, error);
                }
            }
        };

        fetchPokemonsByType();
    }, [selectedType]);

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    }

    return (
        <div className='container'>
            <h3>Pokemon List</h3>
            <select value={selectedType} onChange={handleTypeChange}>
                <option value="">Select a type</option>
                <option value="1">Normal</option>
                <option value="2">Fighting</option>
                <option value="3">Flying</option>
                <option value="4">Poison</option>
                <option value="5">Ground</option>
                <option value="6">Rock</option>
                <option value="7">Bug</option>
                <option value="8">Ghost</option>
                <option value="9">Steel</option>
                <option value="10">Fire</option>
                <option value="11">Water</option>
                <option value="12">Grass</option>
                <option value="13">Electric</option>
                <option value="14">Psy</option>
                <option value="15">Ice</option>
                <option value="16">Dragon</option>
                <option value="17">Dark</option>
                <option value="18">Fairy</option>
            </select>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonList.map((pokemon) => (
                        <tr key={pokemon}>
                            <td>{pokemon}</td>
                            <td>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PokemonByType;