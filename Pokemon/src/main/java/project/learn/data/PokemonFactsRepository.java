package project.learn.data;

import org.springframework.transaction.annotation.Transactional;
import project.learn.models.PokemonFacts;

public interface PokemonFactsRepository {

    @Transactional
    PokemonFacts findByFactId(int factId);


}
