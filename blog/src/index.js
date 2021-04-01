const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
const { json } = require('express');
const db = require('./config/db');
const port = 3000;

//method override
app.use(methodOverride('_method'));
//connect database
db.connect();
//route
const route = require('./routes');

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
); //html

app.use(express.json()); //XMLHttpREquest, fetch, axios, js

// config  path
app.use(express.static(path.join(__dirname, 'public')));

//morgan config logger
app.use(morgan('combined'));

//hbs config
app.engine('hbs', hbs({
    extname: '.hbs',
    helpers: {
        sum: function(a, b) { return a + b; }
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

route(app);

app.listen(port, () => console.log('Server running at ' + port + '!!!'));