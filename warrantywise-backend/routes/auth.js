const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();
router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});
router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(401).send('Invalid credentials');
  }
  const token = jwt.sign({ userId: user._id }, 'secretkey');
  res.json({ token });
});
module.exports = router;
