const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Authentication required' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("----", token, process.env.JWT_SECRET)
    console.log("decoded", decoded)
    req.user = decoded;
    next();
  } catch (error) {
    console.log("error----")
    console.log(error)
    res.status(401).json({ message: 'Invalid token' });
  }
};