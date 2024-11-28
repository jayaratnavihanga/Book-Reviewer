const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const reviewRoutes = require('./routes/reviewRoutes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/reviews', reviewRoutes);

module.exports = app;
