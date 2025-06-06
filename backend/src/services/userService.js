const bcrypt = require('bcryptjs');
const authRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const createUser = async (name, email, password) => {

    const existingUser = await authRepository.findUserByEmail(email);

    if (existingUser) {
        throw new Error('User already exists with this email');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    return await authRepository.createUser(name, email, passwordHash);
}

module.exports = {
    createUser,
}