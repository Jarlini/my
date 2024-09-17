
const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Package = mongoose.model('Package', packageSchema);

module.exports = {Package};
