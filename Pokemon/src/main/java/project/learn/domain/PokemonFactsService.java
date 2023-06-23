package project.learn.domain;

import org.springframework.stereotype.Service;
import project.learn.data.PokemonFactsRepository;
import project.learn.data.PokemonTypeRepository;
import project.learn.models.PokemonFacts;
import project.learn.models.PokemonType;

@Service
public class PokemonFactsService {

    private final PokemonFactsRepository repository;

    private  final PokemonTypeRepository typeRepository;


    public PokemonFactsService(PokemonFactsRepository repository, PokemonTypeRepository typeRepository) {
        this.repository = repository;
        this.typeRepository = typeRepository;
    }

    public PokemonFacts findByFactId(int FactId) {
        return repository.findByFactId(FactId);
    }

    public PokemonType findByTypeName (String typeName) {
        PokemonType pokemonType = typeRepository.findByType(typeName);
        return pokemonType;
    }


}
