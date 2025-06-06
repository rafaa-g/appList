require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');


app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
