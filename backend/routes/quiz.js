const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

function auth(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Save quiz result
router.post('/save', auth, async (req, res) => {
  const { quizResult } = req.body;
  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  user.quizzes.push(quizResult);
  user.totalQuizzes++;
  user.totalScore += quizResult.percentage;
  user.bestScore = Math.max(user.bestScore, quizResult.percentage);
  await user.save();
  res.json({ message: 'Quiz saved' });
});

// Get leaderboard
router.get('/leaderboard', async (req, res) => {
  const users = await User.find({ totalQuizzes: { $gt: 0 } });
  const sorted = users.sort((a, b) => b.bestScore - a.bestScore || b.totalQuizzes - a.totalQuizzes);
  res.json(sorted.map(u => ({ name: u.name, username: u.username, bestScore: u.bestScore, totalQuizzes: u.totalQuizzes, avgScore: u.totalQuizzes ? Math.round(u.totalScore/u.totalQuizzes) : 0 })));
});

// Mark state completed
router.post('/complete-state', auth, async (req, res) => {
  const { stateName } = req.body;
  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  if (!user.completedStates.includes(stateName)) {
    user.completedStates.push(stateName);
    await user.save();
  }
  res.json({ completedStates: user.completedStates });
});

// Get user progress
router.get('/progress', auth, async (req, res) => {
  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ completedStates: user.completedStates });
});

module.exports = router;
