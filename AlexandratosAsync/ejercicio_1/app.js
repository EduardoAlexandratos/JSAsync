
const obtenerChiste = require("./library");

// Codigo funcion callback

function funcionCallBack(material) {
    chistin = material[0];
    console.log(chistin.setup);
    console.log(chistin.punchline);
}

// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(funcionCallBack);
