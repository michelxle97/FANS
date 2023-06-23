package project.learn.models;

public class PokemonFacts {

    private int factId;

    private String fact;

    private int typeId;

    public PokemonFacts (){

    }

    public PokemonFacts(int factId, String fact, int typeId) {
        this.factId = factId;
        this.fact = fact;
        this.typeId = typeId;
    }

    public int getFactId() {
        return factId;
    }

    public void setFactId(int factId) {
        this.factId = factId;
    }

    public String getFact() {
        return fact;
    }

    public void setFact(String fact) {
        this.fact = fact;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public PokemonType getTypeId(PokemonType pokemonType) {
        return pokemonType;
    }
}
