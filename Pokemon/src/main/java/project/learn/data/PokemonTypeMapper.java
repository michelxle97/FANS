package project.learn.data;

import project.learn.models.PokemonType;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PokemonTypeMapper implements RowMapper<PokemonType> {
    @Override
    public PokemonType mapRow(ResultSet rs, int rowNum) throws SQLException {
        PokemonType pokemonType = new PokemonType();

        pokemonType.setId(rs.getInt("pokemon_type_id"));
        pokemonType.setName(rs.getString("type_name"));
        pokemonType.setDescription(rs.getString("type_description"));

        return pokemonType;

    }
}
