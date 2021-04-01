const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


mongoose.plugin(slug);


const authorSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    videoId: {
        type: String,
        require: true,
    },
    slug: { type: String, slug: "title", unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
},
{
    timestamps: true,
});

authorSchema.plugin(mongooseDelete, {
     deletedAt: true,
    });

module.exports = mongoose.model('Author',authorSchema);