const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  date: String,
  score: Number,
  total: Number,
  percentage: Number,
  timeElapsed: Number,
  answers: Array
});

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true },
  password: String,
  quizzes: [quizSchema],
  totalQuizzes: { type: Number, default: 0 },
  bestScore: { type: Number, default: 0 },
  totalScore: { type: Number, default: 0 },
  joinDate: String,
  completedStates: [String]
});

module.exports = mongoose.model('User', userSchema);
