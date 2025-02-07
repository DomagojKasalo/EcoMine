const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const blockRoutes = require('./routes/blockRoutes');
const test = require('./routes/test');
const errorHandler = require('./utils/errorHandler');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', blockRoutes);
app.use('/api', test);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Aplikacija pokrenuta na portu ${PORT}`);
});

module.exports = app;
