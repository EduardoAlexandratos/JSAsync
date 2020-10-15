
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(person => {
individual = person.results[0];
    console.log("Gender: "+individual.gender+"\n"+"Name: "+individual.name.title +" "+ individual.name.first +" "+ individual.name.last);
    console.log("Country: "+individual.location.country+". State: "+individual.location.state+"\n"+"City: "+individual.location.city+". Street: "+individual.location.street.name+" "+individual.location.street.number
    +". Postal Code : "+individual.location.postcode);
    console.log("Email: "+individual.email+"\n"+"Username: "+individual.login.username+"\n"+"Pass: "+individual.login.password);

}).catch( (error) => console.log('Error: ' + error) );