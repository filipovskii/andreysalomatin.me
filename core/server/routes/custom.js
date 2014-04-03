var express = require('express'),
    path = require('path'),
    fs = require('fs');

module.exports = {};

module.exports.meetme = function (server) {
  var meetmePath = path.join(__dirname, '../../../meetme/dist')

  server.use('/job', express.static(meetmePath));
};

module.exports.slides = function (server) {
  var basePath = path.join(__dirname, '../../../slides'),
      slideDirs = fs.readdirSync(basePath);

  slideDirs
    .filter(function (dir) {
      var slPath = path.join(basePath, dir);
      return dir.indexOf('.') !== 0 && fs.lstatSync(slPath).isDirectory();
    })
    .forEach(function (dir) {
      var slPath = path.join(basePath, dir, 'dist');
      server.use('/slides/' + dir, express.static(slPath));
    });
};

module.exports.trainings = function (server) {
  var basePath = path.join(__dirname, '../../../trainings');
  server.use('/trainings', express.static(basePath));
};

module.exports.exchange = function (server) {
  var rates = {
    'RUB-RUB': 1,
    'RUB-USD': 0.028,
    'RUB-EUR': 0.021,

    'RUR-RUR': 1,
    'RUR-USD': 0.028,
    'RUR-EUR': 0.021,

    'USD-USD': 1,
    'USD-RUB': 35.40,
    'USD-RUR': 35.40,
    'USD-EUR': 0.73,

    'EUR-EUR': 1,
    'EUR-USD': 1.38,
    'EUR-RUB': 48.72,
    'EUR-RUR': 48.72

  };

  server.use('/exchange-rates', function (req, res) {
    var from, to, fromTo, rate;

    try {
      from = req.query.from.toUpperCase();
      to = req.query.to.toUpperCase();
    } catch (e) {
      res.status(403);
      res.end('Bad request');
      return;
    }

    fromTo = from + '-' + to;

    if (!(fromTo in rates)) {
      res.status(404);
      res.end('Not found');
      return;
    }

    res.set('Content-Type', 'application/json');
    res.json({
      from: from,
      to: to,
      rate: rates[fromTo]
    });
    res.status(200);

  });
};
