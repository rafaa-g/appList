const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');
const auth = require('../middleware/auth');

router.post('/create-task', auth, taskController.createTask);

module.exports = router;
