package project.learn.domain;

import org.springframework.stereotype.Service;
import project.learn.data.PokemonFactsRepository;
import project.learn.models.PokemonFacts;
import project.learn.models.PokemonType;

@Service
public class PokemonFactsService {

    private final PokemonFactsRepository repository;


    public PokemonFactsService(PokemonFactsRepository repository) {
        this.repository = repository;
    }

    public PokemonFacts findByFactId(int FactId) {
        return repository.findByFactId(FactId);
    }

    public  PokemonFacts findByTypeName (String factName) {
        return repository.findByFactName(factName);
    }


}
