const express = require('express');
const router = express.Router();
const { createUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

// Public route for user registration
router.post('/register', createUser);

// Protected route for user deletion (admin only)
router.delete('/:id', authMiddleware, adminMiddleware, deleteUser);

module.exports = router;