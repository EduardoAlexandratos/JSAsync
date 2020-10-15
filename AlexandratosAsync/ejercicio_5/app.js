
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

function funcionCallback(person){
    individual = person.results[0];
    console.log("Gender: "+individual.gender+"\n"+"Name: "+individual.name.title +" "+ individual.name.first +" "+ individual.name.last);
    console.log("Country: "+individual.location.country+". State: "+individual.location.state+"\n"+"City: "+individual.location.city+". Street: "+individual.location.street.name+" "+individual.location.street.number
    +". Postal Code : "+individual.location.postcode);
    console.log("Email: "+individual.email+"\n"+"Username: "+individual.login.username+"\n"+"Pass: "+individual.login.password);
    
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(funcionCallback);
