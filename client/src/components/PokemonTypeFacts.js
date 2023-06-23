import { getPokemonById } from "../services/pokemonApiV2";
import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from 'react-router-dom';
import { getTypeInfo, getTypeDescription } from "../services/pokemonFactService";
import './PokemonTypeFacts.css'

function PokemonTypeFacts () {

    // const [selectedType, setSelectedType] = useState('');
    // const [pokemonList, setPokemonList] = useState([]);
    const [typeInfo, setTypeInfo ] = useState({})
    const [typeDescription, setTypeDescription] = useState('')
    const { name } = useParams();



    useEffect(() => {
        console.log(name);
        getTypeInfo(name)
            .then(data => {
                setTypeInfo(data);
                console.log(data);
                getTypeDescription(data.id)
                    .then(dat => {
                        console.log(dat);
                        setTypeDescription(dat.fact);
                    })
            })
            .catch(e => console.log(e));
    }, [name])

    return(
        <div className="inner">
            <h1>{name}</h1>
            <p>{typeInfo.description}</p>
            <p>{typeDescription}</p>
        </div>
    )
}

export default PokemonTypeFacts;