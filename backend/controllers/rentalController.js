const Rental = require('../models/Rental');
const Book = require('../models/Book');

const rentBook = async (req, res) => {
  try {
    const { bookId, returnDate } = req.body;
    console.log(bookId, returnDate)
    const book = await Book.findById(bookId);
    console.log(book)
    if (!book || book.quantity < 1) {
      return res.status(400).json({ message: 'Book not available' });
    }

    const rental = new Rental({
      user: req.user.id,
      book: bookId,
      returnDate: new Date(returnDate),
    });

    await rental.save();
    book.quantity -= 1;
    await book.save();

    res.status(201).json(rental);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getRentals = async (req, res) => {
  try {
    const rentals = await Rental.find({ user: req.user.id }).populate('book');
    res.json(rentals);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { rentBook, getRentals };