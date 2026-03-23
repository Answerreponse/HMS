require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;

const app = express();
const db = require('./config/db');


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

module.exports = app;