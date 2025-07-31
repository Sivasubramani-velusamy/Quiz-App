const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  const { name, username, password } = req.body;
  if (!name || !username || !password) return res.status(400).json({ error: 'All fields required' });
  if (password.length < 4) return res.status(400).json({ error: 'Password too short' });
  const exists = await User.findOne({ username });
  if (exists) return res.status(400).json({ error: 'Username exists' });
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ name, username, password: hash, joinDate: new Date().toISOString(), quizzes: [], completedStates: [] });
  await user.save();
  res.json({ message: 'Signup successful' });
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, user });
});

module.exports = router;
