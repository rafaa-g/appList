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

module.exports = {
    createTask,
    findTasksByUserId,
}