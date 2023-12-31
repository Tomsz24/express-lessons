// import { handlebarsHelpers } from './handlebars-helpers';

const express = require('express');
const cookieParser = require('cookie-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
const hbs = require('express-handlebars');
const { handlebarsHelpers } = require('./utils/handlebars-helpers');
const { homeRouter } = require('./routes/home');
const { configuratorRouter } = require('./routes/configurator');
const { orderRouter } = require('./routes/order');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.engine('.hbs', hbs.engine({ extname: '.hbs', helpers: handlebarsHelpers }));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/configurator', configuratorRouter);
app.use('/order', orderRouter);

app.listen(3000, 'localhost');
