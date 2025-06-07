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

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        
        const token = await userService.loginUser(email, password);
        res.status(200).json({
            result: 'Login success',
            token: token
        })

    } catch (error) {
        if (error.message === 'USER_NOT_FOUND') {
            return res.status(404).json({ error: 'Usuário ou senha incorreta' });
        }  
        if (error.message === 'INVALID_PASSWORD') {
            return res.status(404).json({ error: 'Usuário ou senha incorreta' });
        }

        res.status(500).json({ error: 'Erro ao fazer login.' });
    }
}

module.exports = {
    createUser,
    loginUser,
};