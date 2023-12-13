require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/router');
const connectDB = require('./config/db');

const app = express();
const { PORT } = process.env;

connectDB();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});