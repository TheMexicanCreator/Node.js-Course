var fs = require('fs');

fs.writeFile('./archivos/texto.txt', 'Data sent from node', (error) => {
    if (error) {
        console.log('Error writing archive');
    } else {
        console.log('Archive successfully modified!');
    }
})