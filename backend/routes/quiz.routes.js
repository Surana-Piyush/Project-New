const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz.controller');
const { checkSession } = require('../middleware/auth.middleware');

router.post('/create-quiz', checkSession, quizController.createQuiz);
router.get('/quizzes', checkSession, quizController.getAllQuizzes);
router.get('/quiz/:id', checkSession, quizController.getQuizById);

module.exports = router;
