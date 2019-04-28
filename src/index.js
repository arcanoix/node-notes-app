/*jshint esversion: 6 */

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOveride = require('method-override');
const expressEction = require('express-session');

// initialization
const app = express();
require('./database');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// middleware
app.use(express.urlencoded({extended: false}));
app.use(methodOveride('_method'));
app.use(expressEction({
    secret: 'myapp',
    resave: true,
    saveUninitialized: true
}));

// global variables

// routes
app.use(require('./routes/index.js'));
app.use(require('./routes/notes.js'));
app.use(require('./routes/users.js'));

// static file
app.use(express.static(path.join(__dirname, 'public')));


// server is listening
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});