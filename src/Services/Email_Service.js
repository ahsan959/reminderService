const Sender = require("../config/email_config");

const sendBasicEmail = (mailFrom, mailTo, mailSubject, mailBody) => {
  Sender.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: mailSubject,
    text: mailBody,
  });
};

module.exports = {
  sendBasicEmail,
};
