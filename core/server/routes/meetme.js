var express = require('express'),
    path = require('path');

module.exports = function (server) {
  var meetmePath = path.join(__dirname, '../../../meetme/dist')

  console.log('PATH', meetmePath);

  server.use('/job', express.static(meetmePath));
  function log(req, res, next) {
    console.log('IN MEETME', res.body);
    next();
  }
};
