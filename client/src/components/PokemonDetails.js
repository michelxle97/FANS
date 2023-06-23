import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import './PokemonDetails.css';

const PokemonDetails = () => {

    const { name } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const location = useLocation();


    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await response.json();
                setPokemonDetails(data);
            } catch (error) {
                console.error(`Error fetching Pokémon details for ${name}:`, error);
            }
        };

        fetchPokemonDetails();
    }, [name]);

    if (!pokemonDetails) {
        return <div>Loading...</div>;
    }
    const { weight, sprites, height, base_experience, types } = pokemonDetails;


    return (
        <div className='container' id='container'>
            <h3 className='pokemon-details'>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <p className='pokemon-details'>Weight: {weight}</p>
            <p className='pokemon-details'>Height in decimeters: {height} </p>
            <p className='pokemon-details'>Base XP: {base_experience}</p>
            <p className='pokemon-details'>Type(s): {pokemonDetails.types.map((type) => type.type.name + " | ")}</p>

            <img src={sprites.front_default} alt={name} />
            <img src={sprites.back_default} alt={name} />

            <Link
                to={{
                    pathname: '/pokemon'
                }}
            >
                Go Back to Pokemon List
            </Link>


        </div>
    );

}

export default PokemonDetails;

