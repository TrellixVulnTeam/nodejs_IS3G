const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


mongoose.plugin(slug);


const InventorySchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true,
    },
    have: {
        type: String,
        require: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
},
{
    timestamps: true,
});

InventorySchema.plugin(mongooseDelete, {
     deletedAt: true,
    });

    
module.exports = mongoose.model('Inventory',InventorySchema);




