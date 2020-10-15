
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido

let PocketMonster = "charmeleon";

obtenerPokemon(PocketMonster).then( pokemon => {
    
    pokemon.abilities.forEach(habilidad => console.log("Pokemón: \n\t" + pokemon.name + "\n"+"Ability: \n\t"+habilidad.ability.name));
} ).catch( (error) => console.log('Error: ' + error) );
