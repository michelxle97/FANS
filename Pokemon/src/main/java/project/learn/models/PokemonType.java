package project.learn.models;

public class PokemonType {
    private int typeId;

    private  String name;

    private String description;

    public PokemonType(){

    }

    public PokemonType(int typeId, String name, String description) {
        this.typeId = typeId;
        this.name = name;
        this.description = description;
    }

    public int getId() {
        return typeId;
    }

    public void setId(int typeId) {
        this.typeId = typeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
