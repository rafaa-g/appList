const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');
const auth = require('../middleware/auth');

router.post('/create-task', auth, taskController.createTask);
router.get('/tasks-by-userid', auth, taskController.findTasksByUserId);
router.put('/complete-task-by-taskid', auth, taskController.completeTaskByTaskId);
router.delete('/delete-task-by-taskid/:id', auth, taskController.deleteTaskByTaskId);
router.put('/update-task-by-taskid', auth, taskController.updateTaskByTaskId);

module.exports = router;
