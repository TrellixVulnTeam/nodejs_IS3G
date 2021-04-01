const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


mongoose.plugin(slug);

const stockSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: { type: String, slug: "name", unique: true },
    amount: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
    timestamps: true,
});

stockSchema.plugin(mongooseDelete, {
    deletedAt: true,
});

module.exports = mongoose.model('stock', stockSchema);