package project.learn.data;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import project.learn.models.PokemonType;
@Repository
public class PokemonTypeJdbcTemplateRepository implements  PokemonTypeRepository{

    private final JdbcTemplate jdbcTemplate;

    public PokemonTypeJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public PokemonType findById(int typeId) {
        final String sql = "select pokemon_type_id, type_name, type_description "
                + "from pokemon_type "
                + "where pokemon_type_id = ?;";
        PokemonType pokemonType = jdbcTemplate.query(sql, new PokemonTypeMapper(), typeId)
                .stream()
                .findFirst()
                .orElse(null);

        return pokemonType;
    }

    @Override
    public PokemonType findByType(String type) {
        final String sql = "select pokemon_type_id, type_name, type_description "
                + "from pokemon_type "
                + "where type_name = ?;";
        PokemonType pokemonType = jdbcTemplate.query(sql, new PokemonTypeMapper(), type)
                .stream()
                .findFirst()
                .orElse(null);

        return pokemonType;
    }
}
