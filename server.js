const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('El bot sigue encendido.');
});
 
module.exports = () => {
    server.listen(3000, () => {
        console.log('Server Ready.');
    });
    return true;
}