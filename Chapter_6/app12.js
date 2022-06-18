var fs = require('fs');
var libro = require('./archivos/libros.json');

fs.readFile('./archivos/libros.json', (error, datos) => {
    console.log(datos);
});
console.log(libro.autor);