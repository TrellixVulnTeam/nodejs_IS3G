const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const path = require('path');
const port = 3000;
const db = require('./config/db');
const route = require('./routes');
const methodOverride = require('method-override');



//method override
app.use(methodOverride('_method'));
//connect database
db.connect();
//route
app.use(
    express.urlencoded({
        extended: true,
    }),
); //html

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
route(app);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

app.listen(port, () => console.log('Server running at ' + port + '!!!'));