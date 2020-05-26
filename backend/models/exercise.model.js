const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
    offering: {type: String, required: true}
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
