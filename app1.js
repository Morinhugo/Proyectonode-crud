const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// aqui Eu to conectando a base de dados mongodb
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));

//aqui Eu to importando as rotas
const indexRoutes = require('./routes/index');

// set da api
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: fals e }))
    // rotas
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});