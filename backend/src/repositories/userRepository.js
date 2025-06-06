const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (name, email, passwordHash) => {
    return await prisma.user.create({
        data: {
            name,
            email,
            password: passwordHash,
        },
    });
};

const findUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: {
            email,
        },
    });
}

module.exports = {
    createUser,
    findUserByEmail,
};