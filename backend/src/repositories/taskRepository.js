const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTask = async (title, description, dueDate, userId) => {
    return await prisma.task.create({
        data: {
            title,
            description,
            dueDate, 
            userId,
        },
    });
};

const findTasksByUserId = async (userId) => {
    return await prisma.task.findMany({
        where: {
            userId,
        },
    });
};

const completeTaskByTaskId = async (taskId) => {
    return await prisma.task.update({
        where: {
            id: taskId
        },
        data: {
            completed: true
        }
    });
}; 

const deleteTaskByTaskId = async (taskId) => {
    return await prisma.task.delete({
        where: {
            id: taskId
        }
    });
};

module.exports = {
    createTask,
    findTasksByUserId,
    completeTaskByTaskId,
    deleteTaskByTaskId
};