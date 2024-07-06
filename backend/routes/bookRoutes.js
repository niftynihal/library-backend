const express = require('express');
const router = express.Router();
const { createBook, getAllBooks, updateBook, deleteBook } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.post('/', authMiddleware, adminMiddleware, createBook);
router.get('/', authMiddleware, getAllBooks);
router.put('/:id', authMiddleware, adminMiddleware, updateBook);
router.delete('/:id', authMiddleware, adminMiddleware, deleteBook);

module.exports = router;