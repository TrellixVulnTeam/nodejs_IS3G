const newsRouter = require('./news');
const siteRouter = require('./site');
const playerRouter = require('./author');
const meRouter = require('./me');

function route(app) {
    // get methods

    app.use('/me', meRouter);

    app.use('/news', newsRouter);

    app.use('/players', playerRouter);

    app.use('/', siteRouter);



    /*
app.get('/news', function(req,res){
    res.render('news');
});



app.get('/search', function(req,res){
    console.log(req.query);
    res.render('search');
});

//post methods
app.post('/search', function(req,res){
    console.log(req.body);
    res.render('search');
})

*/
}
module.exports = route;
