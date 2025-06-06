const userService = require('../services/userService');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {

        const user = await userService.createUser(name, email, password);
        res.status(201).json({ message: 'User created successfully' });
        
    } catch (error) {
        if (error.message === 'User already exists with this email') {
            res.status(400).json({ error: error.message });
        }
        
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    createUser,
};