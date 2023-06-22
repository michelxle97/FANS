package project.learn.domain;

import org.springframework.stereotype.Service;
import project.learn.data.PokemonTypeRepository;
import project.learn.models.PokemonType;

@Service
public class PokemonTypeService {

    private final PokemonTypeRepository repository;

    public PokemonTypeService(PokemonTypeRepository repository) {
        this.repository = repository;
    }

    public PokemonType findById(int typeId) {
        return repository.findById(typeId);
    }

    public  PokemonType findByName(String typeName) {
        return repository.findByType(typeName);
    }
}
