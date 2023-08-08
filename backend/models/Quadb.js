const mongoose = require('mongoose');

const QuadbSchema = new mongoose.Schema ({

    base_unit: {
        type: String,
        required: true
    },
    quote_unit: {
        type: String,
        required: true
    },
    low: {
        type: String,
        required: true
    },
    high: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    open: {
        type: String,
        required: true
    },
    volume: {
        type: String,
        required: true
    },
    sell: {
        type: String,
        required: true
    },
    buy: {
        type: String,
        required: true
    },
    at: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
});

const quadb = mongoose.model('quadb', QuadbSchema);
quadb.createCollection();
module.exports = quadb;