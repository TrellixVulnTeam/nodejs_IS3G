const mongoClient = require('mongodb').MongoClient;
var sess;
class siteController {
    // [GET] /news
    home(req, res, next) {
        var sessData = req.session;
        sessData.cart = [""];
        res.render('home');
    }

    aboutus(req, res, next) {
        res.render('aboutus');
    }

    support(req, res, next) {
        res.render('support');
    }

}
module.exports = new siteController();