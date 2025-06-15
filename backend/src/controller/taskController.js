const taskService = require('../services/taskService');

const createTask = async (req, res) => {
    const userId = req.userId
    const { title, description, dueDate } = req.body

    try {

        const task = await taskService.createTask(title, description, dueDate, userId);
        res.status(201).json({ message: 'Task created successfully' });

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
};

const findTasksByUserId = async (req, res) => {
    const userId = req.userId
    try {

        const tasks = await taskService.findTasksByUserId(userId);
        res.status(200).json(tasks);

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
};

const completeTaskByTaskId = async (req, res) => {
    const { id, completed } = req.body;

    console.log(id, completed);

    if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Status inválido' });
    }

    try {
        const task = await taskService.completeTaskByTaskId(id, completed);
        res.status(200).json({ message: 'Task updated successfully', task });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteTaskByTaskId = async (req, res) => {
    const taskId = req.params.id;
    if (!taskId) {
        return res.status(400).json({ error: 'Task ID is required' });
    }
    try {
        const task = await taskService.deleteTaskByTaskId(taskId);
        res.status(201).json({ message: 'Task deleted successfully', task })
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
};

const updateTaskByTaskId = async (req, res) => {
    const { id, title, description, dueDate } = req.body;

    if (!id || !title || !description || !dueDate) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const task = await taskService.updateTaskByTaskId(id, title, description, dueDate);
        res.status(200).json({ message: 'Task updated successfully', task });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    createTask,
    findTasksByUserId,
    completeTaskByTaskId,
    deleteTaskByTaskId,
    updateTaskByTaskId
};