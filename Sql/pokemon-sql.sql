
drop database if exists pokemon;
create database pokemon;
use pokemon;


create table if not exists pokemon_type (
pokemon_type_id int primary key auto_increment,
type_name varchar(50) not null,
type_description text not null
);

create table if not exists pokemon (
	pokemon_id int primary key auto_increment,
    `name` text not null,
    image_url varchar(250) null,
    type_id int,
    constraint fk_pokemon_type
		foreign key (type_id) 
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
    
    select * from pokemon_type;
    select * from pokemon;
  
    
    
    




