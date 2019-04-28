/*jshint esversion: 6 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notas-db',  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then( db => console.log('Db is connected'))
    .catch( error => console.log('Error de conexion'));

