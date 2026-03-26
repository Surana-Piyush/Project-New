const express = require('express');
const router = express.Router();
const resultController = require('../controllers/result.controller');
const { checkSession } = require('../middleware/auth.middleware');

router.post('/submit-quiz', checkSession, resultController.submitQuiz);
router.get('/my-results', checkSession, resultController.getMyResults);

module.exports = router;
