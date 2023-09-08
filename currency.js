const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    });

    const Currency = mongoose.model('Currency', currencySchema);

    module.exports = Currency;