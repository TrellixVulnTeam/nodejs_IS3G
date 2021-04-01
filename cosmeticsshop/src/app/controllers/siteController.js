const mongoClient = require('mongodb').MongoClient;
class siteController {
    // [GET] /news
    home(req, res, next) {
        res.render('home');
    }
}
module.exports = new siteController();