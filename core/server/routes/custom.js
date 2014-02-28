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
}
