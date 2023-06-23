package project.learn.data;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import project.learn.data.mappers.PokemonFactsMapper;
import project.learn.models.PokemonFacts;
import project.learn.models.PokemonType;

@Repository
public class PokemonFactsJdbcRepository implements PokemonFactsRepository{

    private final JdbcTemplate jdbcTemplate;

    public PokemonFactsJdbcRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public PokemonFacts findByFactId(int factId) {
        final String sql = "select pokemon_facts.pokemon_fact_id, pokemon_facts.pokemon_fact, " +
                "pokemon_facts.pokemon_type_id, pokemon_type.type_name " +
                "from pokemon_facts " +
                "join pokemon_type on pokemon_facts.pokemon_type_id = pokemon_type.pokemon_type_id " +
                "where pokemon_facts.pokemon_fact_id = ?";

        PokemonFacts pokemonFacts = jdbcTemplate.query(sql, new PokemonFactsMapper(), factId)
                .stream()
                .findFirst()
                .orElse(null);

        return pokemonFacts;
    }

    @Override
    public PokemonFacts findByFactName(String factName) {
        final String sql = "select pokemon_facts.pokemon_fact_id, pokemon_facts.pokemon_fact, " +
                "pokemon_facts.pokemon_type_id, pokemon_type.type_name " +
                "from pokemon_facts " +
                "join pokemon_type ON pokemon_facts.pokemon_type_id = pokemon_type.pokemon_type_id " +
                "where pokemon_facts.pokemon_fact = ?";

        PokemonFacts pokemonFacts = jdbcTemplate.query(sql, new PokemonFactsMapper(), factName)
                .stream()
                .findFirst()
                .orElse(null);

        return pokemonFacts;
    }


}
