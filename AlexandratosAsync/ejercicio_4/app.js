
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido

let nombrePokemon = "venusaur";

obtenerPokemon(nombrePokemon).then( pokemon => {
    
    console.log(pokemon.name+"\n\t");

    console.log("Abilities: \n\t ");
    pokemon.abilities.forEach( habilidad => console.log( habilidad.ability.name) );

} ).catch( (error) => console.log('Error: ' + error) );
