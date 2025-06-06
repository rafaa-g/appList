require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const bathroomRoutes = require('./routes/bathrooms');
const reviewRoutes = require('./routes/review')

app.use(cors());
app.use(express.json());

// app.use('/auth', authRoutes);
// app.use('/bathrooms', bathroomRoutes);
// app.use('/review', reviewRoutes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
