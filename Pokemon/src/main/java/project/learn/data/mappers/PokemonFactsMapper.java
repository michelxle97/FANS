package project.learn.data.mappers;

import project.learn.models.PokemonFacts;

import org.springframework.jdbc.core.RowMapper;
import project.learn.models.PokemonType;

import javax.swing.tree.TreePath;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PokemonFactsMapper implements RowMapper<PokemonFacts> {

    @Override
    public PokemonFacts mapRow(ResultSet rs, int rowNum) throws SQLException {
        PokemonFacts pokemonFacts = new PokemonFacts();

        pokemonFacts.setFactId(rs.getInt("pokemon_fact_id"));
        pokemonFacts.setFact(rs.getString("pokemon_fact"));

        PokemonType pokemonType = new PokemonType();
        pokemonType.setId(rs.getInt("pokemon_type_id"));
        pokemonType.setName(rs.getString("type_name"));

        pokemonFacts.setTypeId(pokemonType.getId());

        return pokemonFacts;
    }
}
