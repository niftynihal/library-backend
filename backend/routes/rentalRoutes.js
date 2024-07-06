const express = require('express');
const router = express.Router();
const { rentBook, getRentals } = require('../controllers/rentalController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, rentBook);
router.get('/', authMiddleware, getRentals);

module.exports = router;