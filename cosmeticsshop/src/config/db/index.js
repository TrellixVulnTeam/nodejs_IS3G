const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/cosmetics', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('connect successfully !!!');
    } catch (erorr) {
        console.log('Connect failure !!!');
    }
}

module.exports = { connect }