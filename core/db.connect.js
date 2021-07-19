'use strict'

const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.DB_ATLAS,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
);

const db = mongoose.connection

module.exports = {
    db
}