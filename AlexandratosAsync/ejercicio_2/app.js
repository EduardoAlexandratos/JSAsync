
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido

obtenerChiste().then((chistin)=> {
    chistin = material[0];
    console.log(chistin.setup);
    console.log(chistin.punchline);

}).catch( (error) => console.log('Error: ' + error) );
