
drop database if exists pokemon;
create database pokemon;
use pokemon;


create table if not exists pokemon_type (
pokemon_type_id int primary key auto_increment,
type_name varchar(50) not null,
type_description text not null
);



create table if not exists pokemon_facts (
pokemon_fact_id int primary key auto_increment,
pokemon_fact text not null,
pokemon_type_id int,
constraint fk_pokemon_type
		foreign key (pokemon_type_id) 
		references pokemon_type(pokemon_type_id)
        );


-- data
insert into pokemon_type ( `type_name`, `type_description`) values
    ( 'Water', 'Water-type Pokémon are often aquatic or related to water.'),
    ( 'Electric', 'Electric-type Pokémon are characterized by their electrical powers.'),
    ( 'Fire', 'Fire-type Pokémon are associated with flames and heat.'),
    ( 'Normal', 'The Normal type is the most basic type.'),
    ( 'Grass', 'Grass-type Pokémon are typically plants or have plant-like characteristics.'),
    ( 'Ice', ' Ice-type Pokémon are associated with cold and ice.'),
    ( 'Fighting', 'Fighting-type Pokémon excel in physical combat'),
    ( 'Posion', ' Poison-type Pokémon often possess toxic or noxious abilities.'),
    ('Ground','Ground-type Pokémon are often connected to
    the earth or have ground-related abilities. '),
    ('Flying','Flying-type Pokémon are known for their ability to fly.'),
    ('Psychic','Psychic-type Pokémon possess psychic powers and mental abilities.'),
    ('Bug','Bug-type Pokémon are often insects or bug-like creatures.'),
    ('Rock',' Rock-type Pokémon are composed of or associated with rocks and minerals.'),
    ('Ghost','Ghost-type Pokémon are typically
    associated with the spirit world or supernatural abilities.'),
    ('Dragon','Dragon-type Pokémon are powerful and mythical creatures. '),
    ('Dark','Dark-type Pokémon often have sneaky or malicious characteristics.'),
    ('Steel',' Steel-type Pokémon are composed of or associated with steel or metal. '),
    ('Fairy','Fairy-type Pokémon are often portrayed as magical and ethereal creatures.');
    
    -- ('',),
    insert into pokemon_facts(pokemon_fact, pokemon_type_id) values
    ('Normal-type Pokémon have no specific strengths or weaknesses against other types.', 4),
    ('Fire-type Pokémon are strong against Grass, Bug, Ice, and Steel types, but weak against Water, Rock, and Dragon types.',3),
    ('Water-type Pokémon are strong against Fire, Ground, and Rock types, but weak against Electric and Grass types.',1),
    ('Electric-type Pokémon are strong against Water and Flying types, but weak against Ground types.',2),
    ('Grass-type Pokémon are strong against Water, Ground, and Rock types, but weak against Fire, Ice, Poison, Flying, and Bug types.',5),
    ('Ice-type Pokémon are strong against Grass, Ground, Flying, and Dragon types, but weak against Fire, Fighting, Rock, and Steel types.',6),
    ('Fighting-type Pokémon are strong against Normal, Ice, Rock, Dark, and Steel types, but weak against Flying, Psychic, Fairy, and Ghost types.',7),
    ('Poison-type Pokémon are strong against Grass and Fairy types, but weak against Ground, Psychic, and other Poison types',8),
    ('Ground-type Pokémon are strong against Fire, Electric, Poison, Rock, and Steel types, but weak against Water, Grass, and Ice types.',9),
    ('Flying-type Pokémon are strong against Grass, Fighting, and Bug types, but weak against Electric, Ice, and Rock types',10),
    ('Psychic-type Pokémon are strong against Fighting and Poison types, but weak against Bug, Ghost, and Dark types.',11),
    ('Bug-type Pokémon are strong against Grass, Psychic, and Dark types, but weak against Fire, Flying, and Rock types.',12),
    ('Rock-type Pokémon are strong against Fire, Ice, Flying, and Bug types, but weak against Water, Grass, Fighting, Ground, and Steel types.',13),
    ('Ghost-type Pokémon are strong against Psychic and Ghost types, but weak against Dark types and Normal types (most Ghost-type moves have no effect on Normal types).',14),
    ('Dragon-type Pokémon are strong against Dragon types, but weak against Ice, Dragon, and Fairy types.',15),
    ('Dark-type Pokémon are strong against Psychic and Ghost types, but weak against Fighting, Bug, and Fairy types.',16),
    ('Steel-type Pokémon are strong against Ice, Rock, and Fairy types, but weak against Fire, Fighting, and Ground types.',17),
    ('Fairy-type Pokémon are strong against Fighting, Dragon, and Dark types, but weak against Poison and Steel types.',18);
    
    
    select * from pokemon_type;
    select * from pokemon;
  
select * from pokemon_facts;
  
    
    
    




