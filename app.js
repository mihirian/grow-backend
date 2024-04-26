// src/app.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const { errorHandler } = require('./src/middlewares/errorHandler');
const userRoutes = require('./src/routes/userRoutes');
const panVerificationRoutes = require('./src/routes/panVerificationRoutes');
const aadharVerificationRoutes = require('./src/routes/aadharVerificationRoutes');
const commonVerificationRoutes = require('./src/routes/commonVerificationRoutes');



const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/users', userRoutes); // Setting up user routes

app.use('/pan', panVerificationRoutes);
app.use('/aadhar',aadharVerificationRoutes);
app.use('/common',commonVerificationRoutes);


app.use(errorHandler); // Global error handler

module.exports = app;