const User = require('../models/User');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
  try {
    const { email, username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({email, username, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: 'User created successfully', userId: user._id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createUser, deleteUser };