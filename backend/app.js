const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const corsOptions = {
  origin: ['http://localhost:8080', 'https://demonopedia.iwezix.xyz'],
};

const personnageRouter = require('./routes/personnages');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/personnages', personnageRouter);

console.log(`Server started on port ${process.env.PORT || 3000}`);

module.exports = app;
