const Sender = require("../config/email_config");

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await Sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
    console.log(response);
  } catch (error) {
    console.log("something went wrong in email Service");
    throw { error };
  }
};

module.exports = {
  sendBasicEmail,
};
