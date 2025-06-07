const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const createUser = async (name, email, password) => {

    const existingUser = await userRepository.findUserByEmail(email);

    if (existingUser) {
        throw new Error('User already exists with this email');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    return await userRepository.createUser(name, email, passwordHash);
}

const loginUser = async (email, password) => {
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
        throw new Error("USER_NOT_FOUND");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        throw new Error("INVALID_PASSWORD");
    }

    const token = jwt.sign({id: user.id}, JWT_SECRET, {expiresIn: '7d'})
    return token;
}

module.exports = {
    createUser,
    loginUser,
}