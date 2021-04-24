const mongoClient = require('mongodb').MongoClient;
const Products = require("../models/product");
const { mutipleMongooseToObject } = require('../../utils/mongoose')
const { mongooseToObject } = require('../../utils/mongoose')

class productController {
    // [GET] /brand
    defaultActive(req, res, next) {

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
            var cart = req.cookies.cart;
            cart += req.params.code + ',';
            var ele = cart.toString().split(',');
            res.cookie("cart", cart);
            res.redirect('/product/cart/watch');

        }
        //  [POST] /product/cart
    cart(req, res, next) {
        var cart = req.cookies.cart;
        cart += req.params.code + ',';
        var ele = cart.toString().split(',');
        ele.pop(ele[ele.length]);
        console.log(cart);
        console.log(ele);
        Products.find({ code: { $in: [JSON.stringify(ele)] } })
            .then(products => {
                if (products) {
                    res.render('cart', {
                        products: mutipleMongooseToObject(products)
                    })
                }
            });

    }

}
module.exports = new productController();