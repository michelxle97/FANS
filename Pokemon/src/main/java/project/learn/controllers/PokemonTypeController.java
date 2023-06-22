package project.learn.controllers;

import org.springframework.web.bind.annotation.*;
import project.learn.domain.PokemonTypeService;
import project.learn.models.PokemonType;

@RestController
@RequestMapping("/api/pokemon_type")
@CrossOrigin
public class PokemonTypeController {
    private final PokemonTypeService service;

    public PokemonTypeController(PokemonTypeService service) {
        this.service = service;
    }

    @GetMapping("/{typeId}")
    public PokemonType findById(@PathVariable int typeId) {
        return service.findById(typeId);
    }

    @GetMapping("/type-name/{typeName}")
    public PokemonType findByName(@PathVariable String typeName) {
        return service.findByName(typeName);
    }


}
