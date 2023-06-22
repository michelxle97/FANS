package project.learn.data;

import org.springframework.transaction.annotation.Transactional;
import project.learn.models.PokemonType;

public interface PokemonTypeRepository {
    @Transactional
    PokemonType findById(int typeId);

    @Transactional
    PokemonType findByType(String type);
}
