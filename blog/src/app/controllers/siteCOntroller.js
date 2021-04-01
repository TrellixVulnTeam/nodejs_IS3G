const Author = require('../models/Author');
const mongoClient = require('mongodb').MongoClient;
const {mutipleMongooseToObject} = require('../../util/mongoose')
class siteController {
    // [GET] /news
   home(req, res, next) {
       
    // callback
    /*
    author.find({},function (err, Author){
        if(!err){
            res.json(Author);
            return;
        }
        next();
    });
    */
   res.render('home');
    }
    // [GET] /news/:slug
    search(req, res, next) {
        Author.find({})
        //.then(authors => res.json(authors))
        .then(authors => {

            res.render('search', {
                authors: mutipleMongooseToObject(authors)
            });
         }
        )
        .catch(error => next(error));
       // res.render('search');
    }
}
module.exports = new siteController();
