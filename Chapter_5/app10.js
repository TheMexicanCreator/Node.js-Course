var fs = require('fs');

var content = fs.readFileSync('./archivos/texto.txt', 'utf8');
/* .readFile() is used especifically for videos
    var content = fs.readFile('./archivos/texto.txt', 'utf8', function(error, data) (
        console.log(data);
    ))
*/

console.log(content);