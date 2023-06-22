import { useEffect, useState } from "react";
import { getPokemonById } from "../services/pokemonApiV2";
import "./GuessPokemon.css"

function GuessPokemon() {

    const [pokemonSprite, setPokemonSprite] = useState('')
    const [guessed, setGuessed] = useState(false);
    const [pokemonName, setPokemonName] = useState('');
    const [myGuess, setMyGuess] = useState('')


    const randomPokemonNumber = () => {
        let num = Math.floor(Math.random() * 1010) + 1;
        console.log(num);
        return num;
    }
    useEffect(() => {
        getPokemonById(randomPokemonNumber())
            .then(data => {
                setPokemonSprite(data.sprites.front_default);
                setPokemonName(data.species.name);
            })
            .catch(e => console.log(e));
    }, [])

    const getPokemon = () => {
        getPokemonById(randomPokemonNumber())
            .then(data => {
                setPokemonSprite(data.sprites.front_default)
                setPokemonName(data.species.name);
                setGuessed(false);
            })
            .catch(e => console.log(e));
    }

    const makeGuess = () => {
        console.log(myGuess);
        console.log(pokemonName);
        if (myGuess.toUpperCase() === pokemonName.toUpperCase()) {
            setGuessed(true);
        }
    }

    const conditionalStyle = () => {
        if (guessed) {
            return "normal-pokemon";
        }
        return "dark-pokemon";
    }

    return (
        <div>
            <h1>WHO'S THAT POKEMON?</h1>
            <div className="card">
                <img className={conditionalStyle()} src={pokemonSprite}></img>
                <div className="card-body">
                    <button className={"btn btn-primary"} onClick={getPokemon}>New Pokemon</button>
                    <button className={"btn btn-secondary"} onClick={makeGuess}>Make Guess!</button>
                </div>
            </div>

            {guessed ? <h4>ITS {pokemonName.toUpperCase()}</h4> : <div>
                <form>
                    <input value={myGuess} onChange={e => setMyGuess(e.target.value)} />
                </form>
            </div>}
        </div>
    )
}

export default GuessPokemon;