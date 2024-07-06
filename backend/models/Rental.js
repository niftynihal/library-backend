const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  rentedAt: { type: Date, default: Date.now },
  returnDate: { type: Date, required: true },
});

module.exports = mongoose.model('Rental', rentalSchema);