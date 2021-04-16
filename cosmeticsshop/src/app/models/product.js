const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


mongoose.plugin(slug);

const productSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        require: true,
    },
    brand: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    detail: {
        type: String,
        require: true,
    },
    evaluate: {
        type: String,
        require: true,
    },
    rate: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    },
    picture: {
        type: String,
        require: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
    timestamps: true,
});

productSchema.plugin(mongooseDelete, {
    deletedAt: true,
});

module.exports = mongoose.model('Product', productSchema);