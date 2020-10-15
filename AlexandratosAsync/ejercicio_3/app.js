
const obtenerPokemon = require("./library");

// Codigo funcion callback

function funcionCallBack(pokemon){
    pokemon.abilities.forEach(habilidad => console.log("Pokemón: \n\t" + pokemon.name + "\n"+"Ability: \n\t"+habilidad.ability.name));
}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido
var pokemon = "haunter";
obtenerPokemon(pokemon,funcionCallBack);
