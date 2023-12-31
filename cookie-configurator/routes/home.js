const express = require('express');
const { getCookieSettings } = require('../utils/getCookieSettings');

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  const {
    base, addons, sum, allAddons, allBases,
  } = getCookieSettings(req);

  res.render('home/index', {
    cookie: {
      base,
      addons,
    },
    allBases,
    allAddons,
    sum,
  });
});

module.exports = {
  homeRouter,
};
