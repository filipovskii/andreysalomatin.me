var when = require('when'),
    Mailgun = require('mailgun').Mailgun,
    mailgun = new Mailgun(process.env.MAILGUN_KEY);

module.exports = {};

module.exports.job = function (req, res) {
  var text = 'From ' + req.email;

  mailgun.sendText(
      'job@andreysalomatin.me',
      [ process.env.MAIL_TO ],
      '[JOB] ' + req.url, text, function (err) {
        err && console.error(err);
      });

  return when({ status: 'OK' });
};
