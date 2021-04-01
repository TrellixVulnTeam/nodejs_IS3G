const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


mongoose.plugin(slug);

const stockSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    rate: {
        type: Float32Array,
        require: true,
    },
    displayName: {
        type: String,
        require: true,
    },
    comment: {
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