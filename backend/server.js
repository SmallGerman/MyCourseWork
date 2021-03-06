const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const Port = process.env.Port || 1488;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const servicesRouter = require('./routes/service');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/service', servicesRouter);

app.listen(Port, () => {
    console.log('Server started on')
});
