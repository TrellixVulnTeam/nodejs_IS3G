const mongoClient = require('mongodb').MongoClient;
const Products = require("../models/product");
const { mutipleMongooseToObject } = require('../../utils/mongoose')
const { mongooseToObject } = require('../../utils/mongoose')


class productController {
    // [GET] /brand
    defaultActive(req, res, next) {
            /* req.session.someAttribute.push("soccer"); */
            Products.find({})
                .then(products => res.render("product/brand", {
                    products: mutipleMongooseToObject(products)
                }));

        }
        // [GET] /product/:brand
    getBrand(req, res, next) {
            Products.find({ brand: req.params.brand })
                .then(products => res.render("product/brand", {
                    products: mutipleMongooseToObject(products)
                }));
        }
        //[GET] /product/:code/detail
    detail(req, res, next) {
            Products.findOne({ code: req.params.code })
                .then(product => res.render('detail', {
                    product: mongooseToObject(product)
                }));

        }
        // [POST] /product/:code/addToCart
    addToCart(req, res, next) {
            res.redirect('/')
        }
        //  [POST] /product/cart
    cart(req, res, next) {
        res.write(`<h1>Hello ${req.session.someAttribute} </h1><br>`);
        res.end('<a href=' + '/logout' + '>Logout</a>');
    }

}
module.exports = new productController();