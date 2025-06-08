const taskRepository = require('../repositories/taskRepository');

const createTask = async (title, description, dueDate, userId) => {

    const FormattedDueDate = new Date(dueDate);

    return await taskRepository.createTask(title, description, FormattedDueDate, userId)
}

module.exports = {
    createTask
};