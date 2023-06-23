package project.learn.controllers;

import org.springframework.web.bind.annotation.*;
import project.learn.domain.PokemonFactsService;
import project.learn.models.PokemonFacts;
import project.learn.models.PokemonType;

@RestController
@RequestMapping("/api/pokemon_fact")
@CrossOrigin
public class PokemonFactsController {

    private final PokemonFactsService service;

    public PokemonFactsController(PokemonFactsService service) {
        this.service = service;
    }

    @GetMapping("/{factId}")
    public PokemonFacts findByFactId(@PathVariable int factId) {
        return service.findByFactId(factId);
    }

    @GetMapping("/fact-type-name/{typeName}")
    public PokemonFacts findByTypeName(@PathVariable String typeName) {
        return service.findByTypeName(typeName);
    }
}
