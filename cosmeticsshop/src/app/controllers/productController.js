const mongoClient = require('mongodb').MongoClient;
class productController {
    // [GET] /news
    defaultActive(req, res, next) {
        res.render('brand');
    }
    detail(req, res, next) {
        res.render('detail');
    }
}
module.exports = new productController();