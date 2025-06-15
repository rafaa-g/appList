const taskRepository = require('../repositories/taskRepository');

const createTask = async (title, description, dueDate, userId) => {

    const FormattedDueDate = new Date(dueDate);

    return await taskRepository.createTask(title, description, FormattedDueDate, userId)
}

const findTasksByUserId = async (userId) => {
    return await taskRepository.findTasksByUserId(userId);
}

const completeTaskByTaskId = async (taskId, completed) => {
    return await taskRepository.completeTaskByTaskId(taskId, completed);
}

const deleteTaskByTaskId = async (taskId) => {
    return await taskRepository.deleteTaskByTaskId(taskId);
}

module.exports = {
    createTask,
    findTasksByUserId,
    completeTaskByTaskId,
    deleteTaskByTaskId
}