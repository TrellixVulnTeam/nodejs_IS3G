const Author = require('../models/Author');
const mongoClient = require('mongodb').MongoClient;
const {mutipleMongooseToObject} = require('../../util/mongoose')
class meController {
    //[POST] /me/stored/players

    storedPlayers(req, res, next){
        // Promise
         Promise.all([Author.find({}),  Author.countDocumentsDeleted()])
            .then(([authors, deletedCount]) => 
                res.render('me/stored-players',{
                    deletedCount,
                    authors: mutipleMongooseToObject(authors)
            }))
            .catch(next);
    }
    //[POST] /me/trash/players

    trashPlayers(req, res, next){
        Author.findDeleted({ deleteAt: null})
        .then(authors => res.render('me/trash-players',{
            authors: mutipleMongooseToObject(authors)
        }))
        .catch(next);   
    }

}
module.exports = new meController();
