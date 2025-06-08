const taskService = require('../services/taskService');

const createTask = async (req, res) => {
    const userId = req.userId
    const { title, description, dueDate} = req.body

    try {
        
        const task = await taskService.createTask(title, description, dueDate, userId);
        res.status(201).json({message: 'Task created successfully'});

    } catch (error) {
        res.status(500).json({error: 'Internal server error'})
    }
}

module.exports = {
    createTask,
}